import RegisterForm from "@/components/register-form";
import { NextPage } from "next";

const RegisterPage: NextPage = (): JSX.Element => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
