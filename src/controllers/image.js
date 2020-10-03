import { Image } from "../../models";

export default {
  addImage: async (req, res) => {
    const { name, photoUrl } = req.body;
    const image = await Image.create({ name, photoUrl });
    res.status(201).send({ message: "Image saved successfully", image });
  },
  getImage: async (req, res) => {
    const image = await Image.findAll();
    res.status(200).send(image);
  },
  deleteImage: async (req, res) => {
    const { id } = req.params;
    const deletedImage = await Image.destroy({ where: { id } });
    res.status(200).send({ message: "Image successfully deleted", deletedImage });
  }
};
