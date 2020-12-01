import { Event } from "../../models";

export default {
  postEvent: async (req, res) => {
    const { name, caption, photoUrl } = req.body;
    const event = await Event.create({ name, caption, photoUrl });
    res.status(201).send({ msg: "Event posted successfully", event });
  },

  getEvents: async (req, res) => {
    const event = await Event.findAll();
    res.status(200).send(event);
  },

  deleteEvent: async (req, res) => {
    const { id } = req.params;
    const deletedEvent = await Event.destroy({ where: { id } });
    if (deletedEvent) {
      return res
        .status(200)
        .send({ msg: "Event successfully deleted", deletedEvent });
    }
    return res
      .status(404)
      .send({ msg: "Event with the specified ID doesn't exist" });
  },
  updateEvent: async (req, res) => {
    const { id } = req.params;
    const { caption } = req.body;
    const [update] = await Event.update({ caption }, { where: { id } });
    if (update) {
      const updatedEvent = await Event.findOne({ where: { id } });
      return res
        .status(200)
        .send({ msg: "Caption successfully updated", updatedEvent });
    }
    return res
      .status(404)
      .send({ msg: "Event with the specified ID doesn't exist" });
  }
};
