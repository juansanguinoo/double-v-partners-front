import { inject, injectable } from "inversify";
import { TYPES } from "../../../../config/types";
import type { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class GetAllUsersUseCase {
  constructor(
    @inject(TYPES.IUsersRepository)
    private usersRepository: IUsersRepository
  ) {}

  async execute(user: string) {
    return await this.usersRepository.getAllUsers(user);
  }
}
