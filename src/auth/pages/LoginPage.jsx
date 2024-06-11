import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, authReducer } from "../context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login("oliver31batista");
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-t">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
