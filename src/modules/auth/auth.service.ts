import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.userService.findOne(username);
    if (user && user.password === password) {
      const { password, username, ...rest } = user;

      return rest;
    }
    return null;
  }
}
