import { inject, injectable } from "inversify";
import { IUserByLoginRepository } from "../../domain/repositories/IUserByLoginRepository";
import { TYPES } from "../../../../config/types";
import type { IHttpClient } from "../../../../api/interface/IHttpClient";
import { IResponseUser } from "../../domain/models/IResponseUser";

@injectable()
export class UserByLoginRepositoryImpl implements IUserByLoginRepository {
  private readonly httpClient: IHttpClient;
  private readonly baseUrl: string;

  constructor(
    @inject(TYPES.HttpClient) httpClient: IHttpClient,
    @inject(TYPES.BaseUrl) baseUrl: string
  ) {
    this.httpClient = httpClient;
    this.baseUrl = baseUrl;
  }

  async getUserByLogin(login: string): Promise<IResponseUser> {
    const url = `${this.baseUrl}/users/${login}`;
    const response = await this.httpClient.get<IResponseUser>(url);
    return response;
  }
}
