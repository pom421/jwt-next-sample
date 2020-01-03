import { randomBytes } from 'crypto';

// import UserModel from '../models/user';

import * as jwt from 'jsonwebtoken'

const jwtConfig = {
  secret: "JHo$aY@2&o7m",
  options: {
    expiresIn: "1h",
    algorithm: 'HS256',
  }
}

export const check = token => {
  return jwt.verify(token, jwtConfig.secret, jwtConfig.options);
}

export const authenticate = (email, password) => {
  const generateJWT = ({id, name, email, role}) =>  jwt.sign({
        id,
        name,
        email,
        role
    }, jwtConfig.secret, jwtConfig.options);

    // const userRecord = await UserModel.findOne({ email });
    // let userRecord = ""
    // if (!userRecord) {
    //   throw new Error('User not found')
    // } else {
    //   const correctPassword = await argon2.verify(userRecord.password, password);
    //   if (!correctPassword) {
    //     throw new Error('Incorrect password')
    //   }
    // }

    if (false) {
      throw new Error("Authentication error")
    }

    const userRecord = {
      id: 4,
      password,
      email,
      name: "Charles Chaplin",
      role: "ADMIN"
    }

    return {
      user: userRecord,
      token: generateJWT(userRecord),
    }
  }

  // async LoginAs(email) {
  //   // const userRecord = await UserModel.findOne({ email });
  //   let userRecord = ""
  //   console.log('Finding user record...');
  //   if (!userRecord) {
  //     throw new Error('User not found');
  //   }
  //   return {
  //     user: {
  //       email: userRecord.email,
  //       name: userRecord.name,
  //     },
  //     token: this.generateJWT(userRecord),
  //   }
  // }

  // async signUp(email, password, name) {
  //   const salt = randomBytes(32);
  //   const passwordHashed = await argon2.hash(password, { salt });

  //   const userRecord = {
  //     password: passwordHashed,
  //     email,
  //     salt: salt.toString('hex'),
  //     name,
  //   }
  //   const token = this.generateJWT(userRecord);
  //   return {
  //     user: {
  //       email: userRecord.email,
  //       name: userRecord.name,
  //     },
  //     token,
  //   }

  // }


