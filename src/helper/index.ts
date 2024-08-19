import bcrypt from 'bcrypt';
import { userModel } from '../db/users';

export const random = () => bcrypt.genSaltSync(10);

export const authentication = (password: string, username: string, email: string) =>
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        return err.message;
      } else {
        let user = await userModel.create({
          username,
          email,
          password: hash,
        });
      }
    });
  }); 