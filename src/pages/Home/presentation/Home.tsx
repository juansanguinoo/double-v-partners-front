import HomeModel from "./HomeModel";
import Cards from "./Cards";
import { BarChart } from "./BarChart";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    search,
    userData,
    loadingUsers,
    errorUsers,
    handleSearch,
    handleSearchChange,
  } = HomeModel();

  if (loadingUsers) {
    return <div>{loadingUsers ? <Loading /> : null}</div>;
  }
  if (errorUsers) {
    return (
      <div>
        <Error error={errorUsers} />
      </div>
    );
  }

  return (
    <div className="container-lg">
      <div className="d-flex justify-content-center">
        <div className="col-6">
          <form>
            <div className="input-group input-group-lg">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-regular fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search user..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={search}
                onChange={(e) => handleSearchChange(e)}
              />
            </div>
          </form>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary btn-lg ms-3"
            onClick={handleSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div>
          <button type="button" className="btn btn-primary btn-lg ms-5">
            <Link
              to="/users"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Saved users
            </Link>
          </button>
        </div>
      </div>
      {userData.length ? (
        <>
          <div className="d-flex flex-wrap justify-content-center">
            {userData.slice(0, 10).map((user) => (
              <Cards key={user.id} user={user} />
            ))}
          </div>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <div className="col-8">
              <BarChart />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="px-4 py-5 my-5 text-center">
            <i
              className="fa-solid fa-magnifying-glass-plus"
              style={{ fontSize: "4rem", color: "#BEC0CA" }}
            ></i>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4 mt-4" style={{ color: "#8f9095" }}>
                When you search for a user, your results will appear here.....
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
