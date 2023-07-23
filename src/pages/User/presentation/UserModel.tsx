import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Dispatch } from "redux";
import { useEffect } from "react";
import { getUserByLogin } from "../../../store/actions/userActions";
import { RootState } from "../../../store/store";
import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "../../../graphql/users";
import Swal from "sweetalert2";

const UserModel = () => {
  const params = useParams();
  const dispatch = useDispatch<Dispatch<any>>(); // eslint-disable-line
  const [createUser] = useMutation(CREATE_USER);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) dispatch(getUserByLogin(String(params.login)));

    return () => {
      isMounted = false;
    };
  }, []);

  const userByLoginData = useSelector(
    (state: RootState) => state.userReducer.userByLogin
  );
  const loadingUsers = useSelector(
    (state: RootState) => state.userReducer.loading
  );
  const errorUsers = useSelector((state: RootState) => state.userReducer.error);

  const variables = {
    login: userByLoginData?.login,
    id: userByLoginData?.id,
    nodeID: userByLoginData?.nodeID,
    avatarURL: userByLoginData?.avatarURL,
    gravatarID: userByLoginData?.gravatarID,
    url: userByLoginData?.url,
    htmlURL: userByLoginData?.htmlURL,
    followersURL: userByLoginData?.followersURL,
    followingURL: userByLoginData?.followingURL,
    gistsURL: userByLoginData?.gistsURL,
    starredURL: userByLoginData?.starredURL,
    subscriptionsURL: userByLoginData?.subscriptionsURL,
    organizationsURL: userByLoginData?.organizationsURL,
    reposURL: userByLoginData?.reposURL,
    eventsURL: userByLoginData?.eventsURL,
    receivedEventsURL: userByLoginData?.receivedEventsURL,
    type: userByLoginData?.type,
    siteAdmin: userByLoginData?.siteAdmin,
    name: userByLoginData?.name,
    company: userByLoginData?.company,
    blog: userByLoginData?.blog,
    location: userByLoginData?.location,
    email: userByLoginData?.email,
    hireable: userByLoginData?.hireable,
    bio: userByLoginData?.bio,
    twitterUsername: userByLoginData?.twitterUsername,
    publicRepos: userByLoginData?.publicRepos,
    publicGists: userByLoginData?.publicGists,
    followers: userByLoginData?.followers,
    following: userByLoginData?.following,
    createdAt: userByLoginData?.createdAt,
    updatedAt: userByLoginData?.updatedAt,
  };

  const handleClick = () => {
    createUser({
      variables: variables,
    });
    Swal.fire("Good job!", "User created successfully!", "success");
  };

  return { userByLoginData, loadingUsers, errorUsers, variables, handleClick };
};

export default UserModel;
