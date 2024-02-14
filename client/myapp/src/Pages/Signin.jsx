import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authThunks";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "../redux/auth.selector";

function Signin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigation));
  };

  const { hasError } = useSelector(selectAuth);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {hasError && (
            <div className="form-error-msg">An error has occurs</div>
          )}
          <button className="sign-in-button" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Signin;
