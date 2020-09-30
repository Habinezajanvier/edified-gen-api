import bcrypt from "bcrypt";
import { User } from "../../models";

export default async () => {
  try {
    const { PASSwORD, ADMIN_EMAIL } = process.env;
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(PASSwORD, salt);
    const [user, created] = await User.findOrCreate({
      where: { email: ADMIN_EMAIL },
      defaults: {
        firstName: "Edified Generation",
        lastName: "Admin",
        email: ADMIN_EMAIL,
        role: "Admin",
        password
      }
    });
    if (created) console.log(`${user.lastName} created`);
    console.log(`${user.lastName} created`);
  } catch (error) {
    console.log(error);
  }
};
