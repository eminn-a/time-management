const Project = require("../models/Project");

const userService = require("../services/userService");
const { getReportBuffer } = require("../services/reportsService");
const {
    validateProjectData,
    validateProjectStatus,
} = require("../utils/validateProjectDataUtil");
const ProjectValidationErrors = require("../errors/projectsValidationErrors");
const { validateObjectId } = require("../utils/validateObjectIdUtil");
const { getProjectByRoleIfNotAdmin } = require("../utils/getProjectByRole");
const sendInvitesToNonExistingUsers = require("../utils/inviteEmailsUtils/sendInvitesToNonExistingUsers");
const getInvitesByProjectId = require("../utils/inviteUtils/getInvitesByProjectId");

exports.createProject = async (req) => {
    const projectData = req.body;

    await validateProjectData(projectData);

    const project = await Project.create({
        customerIds: projectData.customerIds,
        projectName: projectData.projectName,
        startingDate: projectData.startingDate,
        pricePerHour: projectData.pricePerHour,
        employeeIds: projectData.employeeIds,
    });

    if (projectData.inviteEmails) {
        sendInvitesToNonExistingUsers(projectData.inviteEmails, project._id);
    }

    return {
        projectId: project._id,
        customerIds: project.customerIds,
        projectName: project.projectName,
        startingDate: project.startingDate,
        pricePerHour: project.pricePerHour,
        employeeIds: project.employeeIds,
    };
};

exports.getProjects = async (req) => {
    const { status, employeeId } = req.query;
    const userId = req.userToken._id;

    if (employeeId) {
        if (!validateObjectId(employeeId)) {
            throw new ProjectValidationErrors(
                "Invalid employee ID format",
                400
            );
        }
    }

    if (status) {
        await validateProjectStatus(status);
    }

    const query = {};

    if (status) {
        query.status = status;
    }
    if (employeeId) {
        query.employeeIds = employeeId;
    }

    const user = await userService.getSingleUser(userId);

    if (user.userRole === "employee") {
        query.employeeIds = user._id;
    } else if (user.userRole === "customer") {
        query.customerIds = user._id;
    }

    const projects = await Project.find(query).sort({
        status: -1,
    });

    return projects;
};

exports.getSingleProject = async (req) => {
    const projectId = req.params.id;
    const userId = req.userToken._id;
    const userRole = req.userToken.userRole;

    const project = await getProjectByRoleIfNotAdmin(
        projectId,
        userId,
        userRole
    );
    const projectInvites = await getInvitesByProjectId(projectId);

    const projectClone = JSON.parse(JSON.stringify(project));
    projectClone.invites = projectInvites;

    return projectClone;
};

exports.updateProject = async (req) => {
    const projectData = req.body;
    const projectId = req.params.id;
    const emailsToCheck = projectData.inviteEmails;

    if (!projectData.status) {
        throw new ProjectValidationErrors("No status provided!", 400);
    }

    await validateProjectStatus(projectData.status);
    await validateProjectData(projectData);

    const query = {
        ...projectData,
    };

    if (projectData.status) {
        query.status = projectData.status;
    }

    const project = await Project.findByIdAndUpdate(projectId, query, {
        new: true,
    });

    if (project.status === "completed") {
        await getReportBuffer(project._id, req.userToken.userId, req.userToken.userRole);
    }

    if (emailsToCheck) {
        await sendInvitesToNonExistingUsers(emailsToCheck, projectId);
    }

    return {
        customerIds: project.customerIds,
        projectName: project.projectName,
        startingDate: project.startingDate,
        pricePerHour: project.pricePerHour,
        employeeIds: project.employeeIds,
    };
};
