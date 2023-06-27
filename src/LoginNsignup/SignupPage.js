import SignupForm from "./SignupForm";
import LoginPage from './LoginPage';
import { Link, useNavigate  } from "react-router-dom";

function SignupPage() {
  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm />
      <h3>OR</h3>
            Already Registered?  <Link to="/login">Login</Link> here!
    </div>
  );
}

export default SignupPage;
