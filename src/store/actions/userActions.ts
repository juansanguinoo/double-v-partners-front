import { Dispatch } from "redux";
import {
  GetAllUsers,
  GetAllUsersError,
  GetAllUsersSuccess,
  GetUserByLogin,
  GetUserByLoginError,
  GetUserByLoginSuccess,
} from "../interfaces/UserActionsInterface";
import { container } from "../../config/inversifyContainer";
import { GetAllUsersUseCase } from "../../pages/Home/domain/useCases/GetAllUsersUseCase";
import { TYPES } from "../../config/types";
import { UsersActionTypes } from "../enums/UsersActionEnums";
import { AppError } from "../../config/AppError";
import { adaptUsers } from "../../pages/Home/infrastructure/adapters/userAdapter";
import { GetUserUseCase } from "../../pages/User/domain/useCases/GetUserUseCase";
import { adaptUserByLogin } from "../../pages/User/infrastructure/adapters/userByLoginAdapter";

export type UsersAction =
  | GetAllUsers
  | GetAllUsersSuccess
  | GetAllUsersError
  | GetUserByLogin
  | GetUserByLoginSuccess
  | GetUserByLoginError;

export const getAllUsers = (user: string) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const useCase = container.get<GetAllUsersUseCase>(TYPES.GetAllUsersUseCase);

    dispatch({ type: UsersActionTypes.GET_ALL_USERS });

    try {
      const response = await useCase.execute(user);
      dispatch({
        type: UsersActionTypes.GET_ALL_USERS_SUCCESS,
        payload: adaptUsers(response.items!),
      });
    } catch (error) {
      const handleError = new AppError(
        `Ocurrió un error al obtener los usuarios ${error}`
      );
      dispatch({
        type: UsersActionTypes.GET_ALL_USERS_ERROR,
        payload: handleError,
      });
    }
  };
};

export const getUserByLogin = (login: string) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const useCase = container.get<GetUserUseCase>(TYPES.GetUserUseCase);

    dispatch({ type: UsersActionTypes.GET_USER_BY_LOGIN });

    try {
      const response = await useCase.execute(login);
      dispatch({
        type: UsersActionTypes.GET_USER_BY_LOGIN_SUCCESS,
        payload: adaptUserByLogin(response),
      });
    } catch (error) {
      const handleError = new AppError(
        `Ocurrió un error al obtener el usuario ${error}`
      );
      dispatch({
        type: UsersActionTypes.GET_USER_BY_LOGIN_ERROR,
        payload: handleError,
      });
    }
  };
};
