import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users: string[] = [];

  create(user: string) {
    this.users.push(user);
  }
}
