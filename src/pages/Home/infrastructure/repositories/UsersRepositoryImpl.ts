import { inject, injectable } from "inversify";
import { IUsersRepository } from "../../domain/repositories/IUsersRepository";
import type { IHttpClient } from "../../../../api/interface/IHttpClient";
import { TYPES } from "../../../../config/types";
import { ResponseAllUsersAPI } from "../../../../api/models/ResponseAPI";

@injectable()
export class UsersRepositoryImpl implements IUsersRepository {
  private readonly httpClient: IHttpClient;
  private readonly baseUrl: string;

  constructor(
    @inject(TYPES.HttpClient) httpClient: IHttpClient,
    @inject(TYPES.BaseUrl) baseUrl: string
  ) {
    this.httpClient = httpClient;
    this.baseUrl = baseUrl;
  }

  async getAllUsers(user: string): Promise<ResponseAllUsersAPI> {
    const url = `${this.baseUrl}/search/users?q=${user}`;
    const response = await this.httpClient.get<ResponseAllUsersAPI>(url);
    return response;
  }
}
