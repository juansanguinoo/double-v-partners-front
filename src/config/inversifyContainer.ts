import { Container } from "inversify";
import { IHttpClient } from "../api/interface/IHttpClient";
import { TYPES } from "./types";
import { AxiosHttpClient } from "../api/AxiosHttpClient";
import { IUsersRepository } from "../pages/Home/domain/repositories/IUsersRepository";
import { UsersRepositoryImpl } from "../pages/Home/infrastructure/repositories/UsersRepositoryImpl";
import { GetAllUsersUseCase } from "../pages/Home/domain/useCases/GetAllUsersUseCase";
import { IUserByLoginRepository } from "../pages/User/domain/repositories/IUserByLoginRepository";
import { UserByLoginRepositoryImpl } from "../pages/User/infrastructure/repositories/UserByLoginRepositoryImpl";
import { GetUserUseCase } from "../pages/User/domain/useCases/GetUserUseCase";

const container = new Container();

// HttpClient
container.bind<IHttpClient>(TYPES.HttpClient).to(AxiosHttpClient);

// BaseUrl
container.bind<string>(TYPES.BaseUrl).toConstantValue("https://api.github.com");

// Repositories
container
  .bind<IUsersRepository>(TYPES.IUsersRepository)
  .to(UsersRepositoryImpl);
container
  .bind<IUserByLoginRepository>(TYPES.IUserByLoginRepository)
  .to(UserByLoginRepositoryImpl);

// UseCases
container
  .bind<GetAllUsersUseCase>(TYPES.GetAllUsersUseCase)
  .to(GetAllUsersUseCase);
container.bind<GetUserUseCase>(TYPES.GetUserUseCase).to(GetUserUseCase);

export { container };
