import { ResponseAllUsersAPI } from "../../../../api/models/ResponseAPI";

export interface IUsersRepository {
  getAllUsers(user: string): Promise<ResponseAllUsersAPI>;
}
