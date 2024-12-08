import { IUser, UserHeaders } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface AuthResponse {
  accessToken: string;
}

const signIn = async (payload: IUser): Promise<AuthResponse> => {
  const { email } = payload;
  const isEmailTaken = await User.findOne({ email });
  if (isEmailTaken) {
    throw new Error("Email is already registered");
  }
  const newUser = await User.create(payload);
  const accessToken = jwt.sign(
    { email: newUser.email, id: newUser._id, role: newUser.role },
    process.env.JWT_SECRET || "default_secret_key",
    { expiresIn: "7d" }
  );
  return {
    accessToken,
  };
};

const loginUser = async (
  payload: Pick<IUser, "email" | "password">
): Promise<AuthResponse> => {
  const { email, password } = payload;
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  const isExistUser = await User.findOne({ email });
  if (!isExistUser) {
    throw new Error("User not found");
  }
  const match = await bcrypt.compare(password, isExistUser.password);
  if (!match) {
    throw new Error("Invalid password");
  }
  const accessToken = jwt.sign(
    { email: isExistUser.email, id: isExistUser._id, role: isExistUser.role },
    process.env.JWT_SECRET || "default_secret_key",
    { expiresIn: "7d" }
  );

  return {
    accessToken,
  };
};

const getUserInfo = async (token: string): Promise<UserHeaders | null> => {
  try {
    const word = token.split(" ");
    const decoded: any = jwt.decode(word[1]);
    if (decoded) {
      const { email } = decoded;
      const user = await User.findOne({ email: email });
      if (user) {
        return {
          email: user.email,
          name: user.name,
          role: user.role,
          isVerify: user.isVerify,
        };
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};

const verifyNumber = async (token: string) => {
  try {
    const word = token.split(" ");
    const decoded: any = jwt.decode(word[1]);
    if (decoded) {
      const result = await User.updateOne(
        { email: decoded.email },
        { $set: { isVerify: true } }
      );
      if (result.modifiedCount > 0) {
        return result;
      } else {
        return null;
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const UserService = {
  loginUser,
  signIn,
  getUserInfo,
  verifyNumber,
};
