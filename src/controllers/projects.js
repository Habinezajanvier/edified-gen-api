import Models from "../../models";

const { Project } = models;

const projectController = {
  getSignedUrl: (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query["file-name"];
    const fileType = req.query["file-type"];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: "public-read"
    };

    s3.getSignedUrl("putObject", s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      res.write(JSON.stringify(returnData));
      res.end();
    });
  },

  postProject: async (req, res) => {
    const { name, caption, photoUrl } = req.body;
    const project = await Project.create({ name, caption, photoUrl });
    res.status(201).send({ msg: "Project posted successfully", project });
  },

  getProjects: async (req, res) => {
    const project = await Project.findAll();
    res.status(200).send(project);
  },

  deleteProject: async (req, res) => {
    const { id } = req.params;
    const deletedProject = await Project.destroy({ where: { id } });
    if (deletedProject) {
      return res
        .status(200)
        .send({ msg: "Project successfully deleted", deletedProject });
    }
    return res.status(404).send("Project with the specified ID doesn't exist");
  },
  updateProject: async (req, res) => {
    const { id } = req.params;
    const { caption } = req.body;
    const [update] = await Project.update({ caption }, { where: { id } });
    if (update) {
      const updatedProject = await Project.findOne({ where: { id } });
      return res
        .status(200)
        .send({ msg: "Caption successfully updated", updatedProject });
    }
    return res.status(404).send("Project with the specified ID doesn't exist");
  }
};

export default projectController;
