"use client";

import { useUser } from "@clerk/nextjs";

const ProfileName = () => {
  const { user } = useUser();
  return <span>{user?.firstName}</span>;
};

export default ProfileName;
