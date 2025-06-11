import React from "react";

import { Metadata } from "next";

export const generateMetadata = async ({
    params,
} : Props): Promise<Metadata> => {
    const aboutid = (await params).aboutid;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${aboutid}`);
        }, 100);
    });
    return {
        title: `Product ${title}`,
        description: `This is the about page for ${aboutid}`,
    };
}

type Props ={
    params: Promise<{ aboutid: string; }>
};

const page = async ({ params }: Props) => {
    const aboutid  = (await params).aboutid;
    return <h1>about page {aboutid}</h1>;
};

export default page;
