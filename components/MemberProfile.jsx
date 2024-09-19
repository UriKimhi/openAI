import { UserButton } from "@clerk/nextjs";
import { currentUser, auth } from "@clerk/nextjs/server";

const MemberProfile = async () => {
  const user = await currentUser();
  //   const { userId } = auth();
  return (
    <div className="px-4 flex iten-center-gap-2">
      <UserButton />
      <p className="px-4 py-2">{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default MemberProfile;
