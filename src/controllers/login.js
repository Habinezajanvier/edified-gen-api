import bcrypt from "bcrypt";
import { User } from "../../models";
import genToken from "../helpers/tokenGen";

export default async (req, res) => {
  const { email, password } = req.body;
  const account = await User.findOne({ where: { email } });
  if (!account) {
    return res.status(404).send({
      message: "Email or password is incorrect"
    });
  }
  const validPass = await bcrypt.compare(password, account.password);
  if (!validPass) {
    return res.status(404).send({
      message: "Email or password is incorrect"
    });
  }
  const token = genToken({
    id: account.id,
    email: account.email,
    firstName: account.firstName,
    lastName: account.lastName
  });

  res.status(200).send({ message: "Successfully loged in", token });
};
