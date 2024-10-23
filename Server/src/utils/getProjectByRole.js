const Project = require("../models/Project");
const ApiException = require("../errors/ApiException");
const { validateObjectId } = require("./validateObjectIdUtil");

const getProjectByRole = async (projectId, userId, userRole) => {
  const query = { _id: projectId };

  if (userRole === "customer") {
    query.customerIds = userId;
  } else if (userRole === "employee") {
    query.employeeIds = userId;
  }

  return Project.findOne(query).populate(
    "customerIds employeeIds",
    "firstName lastName email"
  );
};

const getProjectByRoleIfNotAdmin = async (projectId, userId, userRole) => {
  if (!validateObjectId(projectId)) {
    throw new ApiException("Invalid project ID format!", 400);
  }

  let project;
  if (userRole === "admin") {
    project = await Project.findById(projectId).populate(
      "customerIds employeeIds",
      "firstName lastName email"
    );
  } else {
    project = await getProjectByRole(projectId, userId, userRole);
    if (!project) {
      throw new ApiException("Access denied!", 403);
    }
  }

  if (!project) {
    throw new ApiException("Project not found!", 404);
  }

  return project;
};

module.exports = {
  getProjectByRole,
  getProjectByRoleIfNotAdmin,
};
