import Link from "next/link";
import React from "react";

const page = () => (
    <div>
        <Link href={'/'} className="font-lato text-2xl font-semibold" > Link lato</Link>
        <h1 className="font-saira text-5xl font-bold">Heading saira </h1>
        <p className="text-5xl font-rubik">paragraapg Rubik</p>

        <hr />

        <Link href={'/'} className="text-2xl font-semibold" > Link lato</Link>
        <h1 className="text-5xl font-bold">Heading saira </h1>
        <p className="text-5xl">paragraapg Rubik</p>
    </div>
);

export default page;