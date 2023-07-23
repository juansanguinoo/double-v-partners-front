import { Link } from "react-router-dom";
import { UserModel } from "../domain/models/UserModel";

interface ICardsInterface {
  user: UserModel;
}

const Cards = ({ user }: ICardsInterface) => {
  return (
    <div className="card m-3 mt-5" style={{ width: "18rem" }}>
      <img
        src={user.avatarURL}
        className="card-img-top"
        alt="user-avatar"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <p>ID - {user.id}</p>
        <a href={user.htmlURL}>
          <i className="fa-brands fa-github"></i>
        </a>
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
  );
};

export default Cards;
