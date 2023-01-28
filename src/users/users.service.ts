import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(email: string, password: string) {
    const user = await this.repo.create({ email, password });

    return await this.repo.save(user);
  }

  async findOne(id: number) {
    console.log(id);
    const user = await this.repo.find({ where: { id: id } });

    return user;
  }

  async find(email: string) {
    const user = await this.repo.find({ where: { email } });

    return user;
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }

    Object.assign(user, attrs);

    return await this.repo.save(user);
  }

  async remove(id: number) {
    const user = this.findOne(id);

    if (!user) {
      throw new Error('User not found!');
    }

    return await this.repo.delete(id);
  }
}
