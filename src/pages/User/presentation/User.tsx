import Error from "../../components/Error";
import Loading from "../../components/Loading";
import UserModel from "./UserModel";

const User = () => {
  const { userByLoginData, loadingUsers, errorUsers, handleClick } =
    UserModel();

  if (loadingUsers) {
    return <div>{loadingUsers ? <Loading /> : null}</div>;
  }
  if (errorUsers)
    return (
      <div>
        <Error error={errorUsers} />
      </div>
    );

  return (
    <div className="container-lg">
      <div className="row d-flex justify-content-center">
        <div className="card card-user" style={{ width: "40rem" }}>
          <div className="col-12 d-flex justify-content-center">
            <img
              src={userByLoginData?.avatarURL}
              alt="user-avatar"
              className="user-img"
            />
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <h2 className="mt-2">{userByLoginData?.login}</h2>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <h6 className="mt-2" style={{ color: "#8F9095" }}>
                  {userByLoginData?.company
                    ? userByLoginData.company
                    : "No company"}
                </h6>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <ul className="mt-2 d-flex" style={{ listStyle: "none" }}>
                    <li className="m-2">
                      <h6 className="text-center">
                        {userByLoginData?.followers}
                      </h6>
                      <p>Followers</p>
                    </li>
                    <li className="m-2">
                      <h6 className="text-center">
                        {userByLoginData?.following}
                      </h6>
                      <p>Following</p>
                    </li>
                    <li className="m-2">
                      <h6 className="text-center">
                        {userByLoginData?.publicRepos}
                      </h6>
                      <p>Repositories</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <p className="text-center">
                  {userByLoginData?.bio ? userByLoginData.bio : "No bio"}
                </p>
              </div>
              <div className="button-user col-12 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary btn-lg d-flex btn-user"
                >
                  <a
                    className="m-1"
                    href={userByLoginData?.htmlURL}
                    style={{
                      fontSize: "1.2rem",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    <i
                      className="fa-brands fa-github me-2"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    GitHub
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg d-flex ms-2 btn-user"
                  onClick={handleClick}
                >
                  <i
                    className="fa-solid fa-download mt-2"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <p className="m-2">Export</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
