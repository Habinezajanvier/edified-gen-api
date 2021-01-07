import { Message } from "../../models";

export default {
  sendMessage: async (req, res) => {
    const { fullName, email, phoneNumber, message } = req.body;
    const newMessage = await Message.create({
      fullName,
      email,
      phoneNumber,
      message
    });
    return res
      .status(201)
      .send({ message: "Message successfully sent", newMessage });
  },

  getMessage: async (req, res) => {
    const messages = await Message.findAll();
    if (messages.length === 0) {
      return res.status(404).send({ message: "No message found" });
    }
    return res.status(200).send({ messages });
  },

  deleteMessage: async (req, res) => {
    const { id } = req.params;
    const message = await Message.findByPk(id);
    if (!message) return res.status(404).send({ message: "No message found" });
    await Message.destroy({ where: { id } });
    return res.status(200).send({ message: "Message successfully deleted" });
  }
};
