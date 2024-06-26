import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2i0LTf1seNZkpSK3r9g3nXXaMpO"];
export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
