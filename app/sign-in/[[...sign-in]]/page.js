import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center item-center">
      <SignIn />
    </div>
  );
};
export default SignInPage;
