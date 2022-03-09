import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={data.username}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          {error && <div className="error_msg">{error}</div>}
          <button type="submit" className="green_btn">
            Sing Up
          </button>
          <Link to="/login">
            <button type="button" className="blue_btn">
              Sing in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
