import { UserModel } from "../../pages/Home/domain/models/UserModel";
import { UserByLoginModel } from "../../pages/User/domain/models/UserByLoginModel";
import { UsersAction } from "../actions/userActions";
import { UsersActionTypes } from "../enums/UsersActionEnums";

export interface UserState {
  loading: boolean;
  users: UserModel[] | [];
  error: Error | null;
  userByLogin: UserByLoginModel | null;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: null,
  userByLogin: null,
};

export const userReducer = (
  state = initialState,
  action: UsersAction
): UserState => {
  switch (action.type) {
    case UsersActionTypes.GET_ALL_USERS:
    case UsersActionTypes.GET_USER_BY_LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UsersActionTypes.GET_USER_BY_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userByLogin: action.payload,
      };
    case UsersActionTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case UsersActionTypes.GET_ALL_USERS_ERROR:
    case UsersActionTypes.GET_USER_BY_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
