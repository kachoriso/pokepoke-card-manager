// packages/server/src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // UsersModule をインポート
import { PrismaModule } from '../prisma/prisma.module'; // 必要に応じて
// import { JwtModule } from '@nestjs/jwt'; // ログイン時に追加
// import { PassportModule } from '@nestjs/passport'; // ログイン時に追加
// import { JwtStrategy } from './jwt.strategy'; // ログイン時に追加

@Module({
  imports: [
    UsersModule, // UsersService を利用するためにインポート
    PrismaModule, // UsersModule が PrismaModule を export していれば不要な場合も
    // PassportModule.register({ defaultStrategy: 'jwt' }), // ログイン時に追加
    // JwtModule.registerAsync({ ... }), // ログイン時に追加
  ],
  controllers: [AuthController],
  providers: [AuthService /*, JwtStrategy */], // JwtStrategy はログイン時に追加
  // exports: [AuthService], // 必要に応じて
})
export class AuthModule {}