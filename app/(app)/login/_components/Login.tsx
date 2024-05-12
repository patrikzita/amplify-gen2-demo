"use client";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Authenticator } from "@aws-amplify/ui-react";

const Login = () => {
  return (
    <div className="flex justify-center pt-10">
      <Authenticator loginMechanisms={["email"]}>
        {({ signOut, user }) => (
          <Shell>
            <h1>{user?.signInDetails?.loginId}</h1>
            <Button onClick={signOut} className="w-fit">
              Odhlásit se
            </Button>
          </Shell>
        )}
      </Authenticator>
    </div>
  );
};

export default Login;
