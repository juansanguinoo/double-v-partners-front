import { inject, injectable } from "inversify";
import { TYPES } from "../../../../config/types";
import type { IUserByLoginRepository } from "../repositories/IUserByLoginRepository";

@injectable()
export class GetUserUseCase {
  constructor(
    @inject(TYPES.IUserByLoginRepository)
    private userByLoginRepository: IUserByLoginRepository
  ) {}

  async execute(login: string) {
    const response = await this.userByLoginRepository.getUserByLogin(login);
    return response;
  }
}
