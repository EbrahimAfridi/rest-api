import { userModel } from "../db/users";

export const getUsers = async () => {
  return await userModel.find();
};

export const getUserByEmail = async (email: string) => {
  return await userModel.findOne({ email });
};

export const getUserByUsername = async (username: string) => {
  return await userModel.findOne({ username });
};

export const getUserBySessionToken = async (sessionToken: string) => {
  return await userModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
};

export const getUserById = async (id: string) => {
  return await userModel.findById(id);
}

export const createUser = async (values: Record<string, any>) => {
  return await userModel.create(values);
}

export const deleteUser = async (id: string) => {
  return await userModel.findByIdAndDelete(id);
}

export const updateUser = async (id: string, values: Record<string, any>) => {
  return await userModel.findByIdAndUpdate(id, values, { new: true });
}