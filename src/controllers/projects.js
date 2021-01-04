import aws from "aws-sdk";
import { Project } from "../../models";

aws.config.region = "us-east-2";

const { S3_BUCKET } = process.env;

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
        return res.status(400).send({ err: "Can not get signed request" });
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      res.status(201).send({ msg: "Signed url request returned", data: returnData });
    });
  },

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
