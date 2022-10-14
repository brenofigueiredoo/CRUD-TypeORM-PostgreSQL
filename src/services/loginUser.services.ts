import AppDataSource from "../data-source";
import { IUserLogin } from "../interfaces/users";
import { User } from "../entities/user.entity";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginUserService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const passowrdMatch = await compare(password, user.password);

  if (!passowrdMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h", subject: user.id }
  );

  return token;
};
export default loginUserService;
