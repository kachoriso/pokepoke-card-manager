// packages/server/src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth') // ルートパスを 'auth' に設定
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register') // POST /auth/register でアクセス
  async register(@Body() registerUserDto: RegisterUserDto) {
    // ValidationPipe (main.tsで設定) により registerUserDto は検証済み
    // パスワードハッシュを除いたユーザー情報を返すように AuthService を実装した場合
    const user = await this.authService.register(registerUserDto);
    // 実際のレスポンス形式は要件に合わせて調整（例: { message: '登録成功', user }）
    return user;
  }

  // --- ログインエンドポイントなどは後でここに追加 ---
}