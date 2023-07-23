import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../../graphql/users";

const UsersModel = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  return { loading, error, data };
};

export default UsersModel;
