import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getAllUsers } from "../../../store/actions/userActions";
import { RootState } from "../../../store/store";
import Swal from "sweetalert2";

const HomeModel = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<Dispatch<any>>(); // eslint-disable-line

  const handleSearch = () => {
    if (search.length > 3 && search !== "doublevpartners") {
      dispatch(getAllUsers(search));
    } else if (search.length <= 3) {
      setSearch("");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Search must be greater than 3 characters!",
      });
    } else if (search === "doublevpartners") {
      setSearch("");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't search for this user!",
      });
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const userData = useSelector((state: RootState) => state.userReducer.users);
  const loadingUsers = useSelector(
    (state: RootState) => state.userReducer.loading
  );
  const errorUsers = useSelector((state: RootState) => state.userReducer.error);

  return {
    search,
    userData,
    loadingUsers,
    errorUsers,
    handleSearchChange,
    handleSearch,
  };
};

export default HomeModel;
