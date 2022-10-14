import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const userWithoutPassword = users.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      email: elem.email,
      isAdm: elem.isAdm,
      isActive: elem.isActive,
      createdAt: elem.createdAt,
      updatedAt: elem.updatedAt,
    };
  });

  return userWithoutPassword;
};
export default listUsersService;
