import { Column} from 'typeorm';

export class AuthEntity {
  @Column({type: String})
  email: string;

  @Column({type: String})
  password: string;
}
