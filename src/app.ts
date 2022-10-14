import "reflect-metadata";
import express from "express";
import usersRoutes from "./routes/usersRoutes";
import loginRoutes from "./routes/loginRoutes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);

export default app;
