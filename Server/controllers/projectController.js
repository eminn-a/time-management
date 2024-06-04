const router = require('express').Router()
const projectService = require('../services/projectService')
const isAdmin = require('../middlewares/isAdminMiddleware') 

router.post("/", isAdmin, async (req, res) => {
    
    const projectData = req.body;

    try {
        const project = await projectService.createProject(projectData);

        res.status(201).json(project);
    }
    catch (error) {
        res.status(403).json({ message: error.message });
    }
});

module.exports = router;