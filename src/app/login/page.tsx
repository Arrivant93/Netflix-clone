import LoginForm from "@/components/login-form";
import { NextPage } from "next";

const LoginPage: NextPage = (): JSX.Element => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <LoginForm />
    </div>
  );
};
export default LoginPage;
