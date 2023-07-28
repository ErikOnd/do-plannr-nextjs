"use-client";

import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Image from "next/image";

export default async function Home() {
  // const {data:session} = useSession({
  //   required:true,
  //   onUnauthenticated(){
  //     redirect('/api/auth/signin?callbackUrl=/clinet')
  //   }
  // })
  const session = await getServerSession(options);
  console.log("test");
  console.log(session?.user?.image);
  return (
    <div>
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          alt="profile photo"
          width={200}
          height={200}
        />
      )}
    </div>
  );
}
