import { Link } from "react-router-dom";
import FormUi from "./FormUi";

function SignUpForm() {
  return (
    <FormUi>
      <FormUi.Header>
        <FormUi.Title>Create Account</FormUi.Title>
        <FormUi.Subtitle>Please sign up so you can book appointment</FormUi.Subtitle>
      </FormUi.Header>

      <FormUi.Body>
        <label className="flex flex-col gap-1">
          Full Name
          <input
            className="border-2  py-2 px-2 rounded-lg"
            type="text"
          />
        </label>
        <label className="flex flex-col gap-1">
          Email
          <input
            className="border-2  py-2 px-2 rounded-lg"
            type="email"
          />
        </label>
        <label className="flex flex-col gap-1">
          Password
          <input
            className="border-2  py-2 px-2 rounded-lg"
            type="password"
          />
        </label>
        <button
          type="submit"
          className="bg-primary text-[#fff] py-2 rounded-lg"
        >
          Create Account
        </button>
      </FormUi.Body>
      <FormUi.Footer>
        Already have an account?&nbsp;
        <Link to={"/login"} className="underline text-primary">
          Login here
        </Link>
      </FormUi.Footer>
    </FormUi>
  );
}

export default SignUpForm;