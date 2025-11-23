import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
   const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogIn = (event) => {
    event.preventDefault();
    setError("");
    const email = event.target.email.value;
    const password = event.target.password.value;

    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        //  console.log(result.user);
         toast.success("Login Successful!");
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
         setError(error.message);
        toast.error("Login Failed!");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        //  console.log(result.user);
         toast.success("Logged in with Google!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
         setError(error.message)
        toast.error("Google Login Failed!");
      });
  };

  return (
    <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
   
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
               className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover text-red-500">Forgot password?</a>
            </div>
             {error && <p className="text-red-500 text-sm">{error}</p>}
            <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
              Login
            </button>
          </fieldset>
        </form>
          <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5]"
        >
          <FaGoogle />
          Login with Google
        </button>
        <p className="text-center">
          New to our website? Please  <Link
            className="text-red-500 hover:underline"
            to="/auth/register"
          >
             Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;