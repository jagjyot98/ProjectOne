import LoginForm from "./LoginForm";
import SignupPage from './SignupPage';
import { Link, useNavigate  } from "react-router-dom";
function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
      <h3>OR</h3>
            New User? <Link to="/">SignUp</Link> here!
    </div>
  );
}

export default LoginPage;