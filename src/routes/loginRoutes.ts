import { Router } from "express";
import { loginUserController } from "../controllers/users.controllers";

const loginRoutes = Router();

loginRoutes.post("", loginUserController);

export default loginRoutes;
