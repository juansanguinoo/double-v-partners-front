import UsersModel from "./UsersModel";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

interface User {
  id: string;
  login: string;
  company: string;
}

const Users = () => {
  const { loading, error, data } = UsersModel();

  if (loading) {
    return <div>{loading ? <Loading /> : null}</div>;
  }
  if (error)
    return (
      <div>
        <Error error={error} />
      </div>
    );

  return (
    <div className="container-lg">
      <div className="row">
        {data.getAllUsers.map((user: User) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={user.id}>
            <div className="card m-3 mt-5" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
                <p>{user.id}</p>
                <p>{user.company ? user.company : "No company"}</p>
              </div>
              <button type="button" className="btn btn-primary btn-card mb-2">
                <Link
                  to={`/user/${user.login}`}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Go to profile
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
