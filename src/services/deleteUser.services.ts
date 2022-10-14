import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  await userRepository.update(id, {
    isActive: false,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user;
};

export default deleteUserService;
