import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-lg">
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Double V Partners</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
