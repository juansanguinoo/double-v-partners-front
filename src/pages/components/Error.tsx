import Swal from "sweetalert2";

interface IErrorInterface {
  error: {
    message: string;
  };
}

const Error = ({ error }: IErrorInterface) => {
  const { message } = error;

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });

  return null;
};

export default Error;
