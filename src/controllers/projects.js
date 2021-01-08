import { Project } from "../../models";


const projectController = {
  postProject: async (req, res) => {
    const { projectUrl, description, title } = req.body;
    const project = await Project.create({ projectUrl, description, title });
    res.status(201).send({ msg: "Project posted successfully", project });
  },

  getProjects: async (req, res) => {
    const projects = await Project.findAll();
    res.status(200).send({ projects });
  },

  deleteProject: async (req, res) => {
    const { id } = req.params;
    const deletedProject = await Project.destroy({ where: { id } });
    if (deletedProject) {
      return res
        .status(200)
        .send({ msg: "Project successfully deleted", deletedProject });
    }
    return res
      .status(404)
      .send({ msg: "Project with the specified ID doesn't exist" });
  },

  updateProject: async (req, res) => {
    const { id } = req.params;
    const [update] = await Project.update({ ...req.body }, { where: { id } });
    if (update) {
      const updatedProject = await Project.findOne({ where: { id } });
      return res
        .status(200)
        .send({ msg: "Project successfully updated", updatedProject });
    }
    return res
      .status(404)
      .send({ msg: "Project with the specified ID doesn't exist" });
  }
};

export default projectController;
