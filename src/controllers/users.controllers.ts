import { Request, Response } from "express";
import { IUser, IUserLogin, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/createUser.services";
import deleteUserService from "../services/deleteUser.services";
import listUsersService from "../services/listUsers.services";
import loginUserService from "../services/loginUser.services";
import upadateUserService from "../services/updateUser.services";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;

    const createdUser = await createUserService(user);

    return res.status(201).json(createdUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const loginUserController = async (req: Request, res: Response) => {
  try {
    const user: IUserLogin = req.body;

    const token = await loginUserService(user);

    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }
};

const listUsersController = async (req: Request, res: Response) => {
  try {
    const users = await listUsersService();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }
};

const upadateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const newUser: IUserUpdate = req.body;
    const updatedUser = await upadateUserService(newUser, id);
    return res.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const deletedUser = await deleteUserService(id);
    return res.status(204).json(deletedUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }
};

export {
  createUserController,
  loginUserController,
  listUsersController,
  upadateUserController,
  deleteUserController,
};
