import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  upadateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import findAndCheckIsActiveUserMiddleware from "../middlewares/findAndCheckIsActiveUser.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdmUser.middleware";
import ensureOwnerOrAdmMiddleware from "../middlewares/ensureOwnerOrAdm.middleware";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listUsersController
);
usersRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureOwnerOrAdmMiddleware,
  upadateUserController
);
usersRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  findAndCheckIsActiveUserMiddleware,
  deleteUserController
);

export default usersRoutes;
