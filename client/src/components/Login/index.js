import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const url = "http://localhost:3001/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username.username);
      window.location = "/";
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
          <h1>Login to Your Account</h1>
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
          {error && <div>{error}</div>}
          <button type="submit">Sing In</button>
        </form>

        <Link to="/signup">
          <button type="button">Sing Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
