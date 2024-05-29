import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className=" bg-stone-900 font-extrabold text-white min-h-screen flex items-center justify-center">
      <Link href="https://coding-school-typescript.vercel.app/">
        {" "}
        Desishub Codding school
      </Link>
    </div>
  );
}

export default page;
