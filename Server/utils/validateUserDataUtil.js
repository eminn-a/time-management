const { Role } = require("../models/Roles");
const User = require("../models/User");

const checkRoleExistence = async (roleName) => {
    try {
        const role = await Role.findOne({ name: roleName });

        return !!role;
    } catch (error) {
        console.error("Error checking role existence:", error);
        return false;
    }
};

const validateCommonUserDataParams = async (userData) => {
    const {
        username,
        firstName,
        lastName,
        userRole,
    } = userData;

    if (!userRole) {
        throw new Error("userRole is required!");
    }

    const roleExists = await checkRoleExistence(userRole);

    if (!roleExists) {
        throw new Error("Role does not exist!");
    }

    if (!username) {
        throw new Error("Username is required!")
    } else if (username.length < 2) {
        throw new Error("Username is not long enough");
    }

    if (!firstName) {
        throw new Error("First name is required!")
    } else if(username.length < 2) {
        throw new Error("First name is not long enough");
    }

    if (!lastName) {
        throw new Error("Last name is required!")
    } else if(username.length < 2) {
        throw new Error("Last name is not long enough");
    }
}

const validateUserDataOnUserCreate = async (userData) => {
    let doesUserExist;

    try {
        doesUserExist = await User.findOne({ username: userData.username });
    } catch (error) {
        console.error("Error searching for user existence:", error);
        throw new Error("Trouble creating a new user!");
    }

    if (doesUserExist) {
        throw new Error("User exists!");
    }

    await validateCommonUserDataParams(userData);
};

const validateUserDataOnUserUpdate = async (userData) => {
    let doesUserExist;

    try {
        doesUserExist = await User.findOne({ username: userData.username });
    } catch (error) {
        console.error("Error searching for user existence:", error);
        throw new Error("Trouble creating a new user!");
    }

    if (!doesUserExist) {
        throw new Error("User with the provided ID does not exist!");
    }

    await validateCommonUserDataParams(userData);
}

module.exports = {
    checkRoleExistence,
    validateUserDataOnUserCreate,
    validateUserDataOnUserUpdate,
};