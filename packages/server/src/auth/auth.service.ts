import { Injectable, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt'; 
import { t_users as users } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    // private prisma: PrismaService, // UsersService経由で操作する場合は不要なことも
    // private jwtService: JwtService, // ログイン時に使う
    // private configService: ConfigService, // JWT設定読み込みに使う
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<Omit<users, 'password_hash'>> {
    const { username, email, password } = registerUserDto;

    // 1. ユーザー (メールアドレス) が既に存在するかチェック
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('このメールアドレスは既に使用されています');
    }

    // 2. パスワードをハッシュ化 (salt round = 10 が一般的)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. ユーザーをデータベースに作成
    const newUser = await this.usersService.create({
      username,
      email,
      password_hash: hashedPassword,
      // avatar_url など他の必須でないフィールドは省略可能 (DBスキーマによる)
    });

    // 4. パスワードハッシュを除いたユーザー情報を返す
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password_hash, ...result } = newUser;
    return result;
  }

  // --- ログイン処理などは後でここに追加 ---
}