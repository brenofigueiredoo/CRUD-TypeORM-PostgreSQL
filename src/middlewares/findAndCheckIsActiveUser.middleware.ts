import { Response, Request, NextFunction, request } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const findAndCheckIsActiveUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!findUser.isActive) {
    return res.status(400).json({ message: "User is disabled" });
  }

  next();
};
export default findAndCheckIsActiveUserMiddleware;
