import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      password: 'pass123',
      username: 'Bob',
      name: 'teste0',
    },
    {
      id: 2,
      password: 'pass123',
      username: 'alice',
      name: 'teste',
    },
  ];
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
