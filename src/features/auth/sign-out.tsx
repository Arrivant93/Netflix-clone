import { FC } from "react";
import { Button } from "../../components/ui/button";
import { signOut } from "@/actions/auth/sign-out";

const SignOut: FC = (): JSX.Element => {
  return (
    <form action={signOut}>
      <Button type="submit">SignOut</Button>
    </form>
  );
};

export default SignOut;
