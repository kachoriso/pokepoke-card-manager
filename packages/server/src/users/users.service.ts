import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, t_users as users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<users | null> {
    return this.prisma.t_users.findUnique({
      where: { email },
    });
  }

  async create(data: Prisma.t_usersCreateInput): Promise<users> {
    return this.prisma.t_users.create({
      data,
    });
  }

  async findById(id: string): Promise<users | null> {
    return this.prisma.t_users.findUnique({
      where: { id },
    });
  }
}