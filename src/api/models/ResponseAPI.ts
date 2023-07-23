import { IResponseUsers } from "../../pages/Home/domain/models/IResponseUsers";

export interface ResponseAllUsersAPI {
  total_count: number;
  incomplete_results: boolean;
  items?: IResponseUsers[];
}
