import { FC } from "react";
import { Button } from "../../components/ui/button";
import { signOut } from "@/actions/auth/sign-out";

const SignOut: FC = (): JSX.Element => {
  return (
    <form action={signOut}>
      <Button type="submit" size="sm" variant="sign-out">
        Se déconnecter
      </Button>
    </form>
  );
};

export default SignOut;
