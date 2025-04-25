import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // Prisma Client の接続を開始
    await this.$connect();
  }

  async onModuleDestroy() {
    // アプリケーション終了時に接続を閉じる
    await this.$disconnect();
  }
}