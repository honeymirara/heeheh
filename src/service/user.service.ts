import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getAllUsers() {
    return this.userRepository.getAllUsersDB();
  }
  getUserById(id: string) {
    return this.userRepository.getUserByIdDB(id);
  }
  createUser(name: string, surname: string, email: string, pwd: string) {
    return this.userRepository.createUserDB(name, surname, email, pwd);
  }
  updateUser(id: string, name: string, surname: string, email: string, pwd: string) {
    return this.userRepository.updateUserDB(id, name, surname, email, pwd);
  }
  deleteUser(id: string) {
    return this.userRepository.deleteUserDB(id);
  }
}
