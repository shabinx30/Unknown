import { findUser } from "@/services";
import { notFound } from "next/navigation";
import React from "react";

type PageProps<TParams = {}, TSearchParams = {}> = {
    params: TParams;
    searchParams?: TSearchParams;
};

export default async function Profile({
    params,
}: PageProps<{ userid: string }>) {
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
