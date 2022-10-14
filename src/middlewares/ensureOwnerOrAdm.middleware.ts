import { Response, Request, NextFunction } from "express";

const ensureOwnerOrAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (req.user.id === id) {
    return next();
  }

  if (!req.user.isAdm) {
    return res.status(401).json({
      message: "Missing adm permission",
    });
  }

  return next();
};
export default ensureOwnerOrAdmMiddleware;
