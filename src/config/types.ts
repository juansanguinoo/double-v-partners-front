const TYPES = {
  HttpClient: Symbol.for("HttpClient"),
  BaseUrl: Symbol.for("BaseUrl"),

  IUsersRepository: Symbol.for("IUsersRepository"),
  IUserByLoginRepository: Symbol.for("IUserByLoginRepository"),

  GetAllUsersUseCase: Symbol.for("GetAllUsersUseCase"),
  GetUserUseCase: Symbol.for("GetUserUseCase"),
};

export { TYPES };
