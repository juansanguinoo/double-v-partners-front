import { AppError } from "../../config/AppError";
import { UserModel } from "../../pages/Home/domain/models/UserModel";
import { UserByLoginModel } from "../../pages/User/domain/models/UserByLoginModel";
import { UsersActionTypes } from "../enums/UsersActionEnums";

export interface GetAllUsers {
  type: UsersActionTypes.GET_ALL_USERS;
}

export interface GetAllUsersSuccess {
  type: UsersActionTypes.GET_ALL_USERS_SUCCESS;
  payload: UserModel[];
}

export interface GetAllUsersError {
  type: UsersActionTypes.GET_ALL_USERS_ERROR;
  payload: AppError;
}

export interface GetUserByLogin {
  type: UsersActionTypes.GET_USER_BY_LOGIN;
}

export interface GetUserByLoginSuccess {
  type: UsersActionTypes.GET_USER_BY_LOGIN_SUCCESS;
  payload: UserByLoginModel;
}

export interface GetUserByLoginError {
  type: UsersActionTypes.GET_USER_BY_LOGIN_ERROR;
  payload: AppError;
}
