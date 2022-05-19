/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../core/entities/user.entity';

import { USER_REPOSITORY } from '../../core/constants';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
