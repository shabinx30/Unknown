import { findUser } from "@/services";
import { notFound } from "next/navigation";
import React from "react";

interface ProfilePageProps {
    params: {
        userid: string;
    };
}

export default async function Profile({ params }: ProfilePageProps) {
    const { userid } = params;
    const data = await findUser(userid);

    if (!data) {
        notFound();
    }

    return (
        <div className="pt-[10em] text-white">
            <p>{data.username}</p>
        </div>
    );
}
