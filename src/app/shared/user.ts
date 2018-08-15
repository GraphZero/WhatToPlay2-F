export class User {
  id: number;
  username: string;
  password: string;
  animState: string;

  constructor(id: number, username: string, password: string, animState?: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.animState = animState;
  }
}
