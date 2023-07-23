import { IResponseUser } from "../models/IResponseUser";

export interface IUserByLoginRepository {
  getUserByLogin(login: string): Promise<IResponseUser>;
}
