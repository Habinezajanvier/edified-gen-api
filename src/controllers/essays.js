import sgMail from "@sendgrid/mail";
import Models from "../../models";
import emailMsg from "../helpers/email";

const { Essay } = Models;

export default {
  recordEssay: async (req, res) => {
    const {
      fullName,
      email,
      phone,
      birthDate,
      guardianName,
      guardianPhone,
      parentsId,
      district,
      school,
      year,
      topic,
      essay
    } = req.body;
    const emailExist = await Essay.findOne({ where: { email } });
    if (emailExist) {
      return res.status(200).send({ message: "Your essay was recorded before" });
    }
    const essayOption = {
      fullName,
      email,
      phone,
      birthDate,
      guardianName,
      guardianPhone,
      parentsId,
      district,
      school,
      year,
      topic,
      essay
    };
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = emailMsg({
      fullName,
      birthDate,
      phone,
      guardianName,
      guardianPhone,
      parentsId,
      year,
      topic,
      district,
      school,
      essay
    });

    sgMail
      .send(msg)
      .then(async () => {
        const createdEssay = await Essay.create(essayOption);
        res
          .status(201)
          .send({ message: "Essay submitted successfully", createdEssay });
      })
      .catch((error) => {
        res.status(500).send({ err: error.message });
      });
  },

  getEssays: async (req, res) => {
    const essays = await Essay.findAll();
    res.status(200).send({ essays });
  },

  getSingleEssay: async (req, res) => {
    const singleEssay = await Essay.findOne({ where: { id: req.params.id } });
    res.status(200).send({ singleEssay });
  },

  deleteEssay: async (req, res) => {
    const deletedEssay = await Essay.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "Essay deleted successfully", deletedEssay });
  }
};
