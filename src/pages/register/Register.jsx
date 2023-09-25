import { Link, useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const nav = useNavigate();
  const handleRegister = () => {
    nav("/");
  };
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social</h1>
          <h1>Buddy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleRegister}>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
