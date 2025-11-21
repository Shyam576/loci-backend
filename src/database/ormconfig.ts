import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthEntity } from '../auth/auth.entity';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: [AuthEntity],

  synchronize: false,

  migrations: ['dist/database/migrations/*.js'],
  migrationsRun: true,
  logging: true,
};
