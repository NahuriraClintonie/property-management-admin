import React from "react";
import {useAppSelector } from "../store/Store";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";


const LoginPage: React.FC = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.Login);

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    // const credentials: LoginCredentials = {
    //   username: (
    //     event.currentTarget.elements.namedItem("username") as HTMLInputElement
    //   ).value,
    //   password: (
    //     event.currentTarget.elements.namedItem("password") as HTMLInputElement
    //   ).value,
    // };

    try {
      const data = "true";

      if (data.includes('e')) {
        // navigate("");
      } else {
        toast.warn("Wrong credentials");
      }
    } catch (error) {
      toast.error("Login failed: "+error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg">
        <div style={{ width: 200 }} className="mx-auto mb-1">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <h1 className="text-center mb-6 flex flex-col">
          <span className="text-[#0077B6] text-4xl mt-5 font-extrabold">
            Admin Panel
          </span>
        </h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleLogin}
          noValidate>
          <div className="mb-4">
            <label
              className="block text-black text-md font-bold mb-2"
              htmlFor="username">
              Username or Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username or Email"
              // value={username}
              required/>
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-md font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              // value={password}
              required/>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#0077B6] hover:bg-[#023E8A] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              {loading ? <ClipLoader color="#fff" size={20} /> : "Login"}
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-[#0077B6] hover:text-[#023E8A]"
              // onClick={() => navigate("")}
            >
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
