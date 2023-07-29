"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const ProfileCard = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user?.image && (
        <>
          <Image
            src={session?.user?.image}
            alt="profile photo"
            width={200}
            height={200}
          />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
