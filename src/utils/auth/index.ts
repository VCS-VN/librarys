import * as bcrypt from 'bcryptjs';

export function hashPassword(password: string, round = 10): Promise<string> {
  return bcrypt.hash(password, round);
}

export function comparePassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
