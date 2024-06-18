import React from "react";
import CallToAction from "./components/CallToAction";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import MarqueeDemo from "./components/Marquee";
import { Metadata } from "next";
import { metadataHome } from "@/constants/metadata";

export const metadata: Metadata = metadataHome;

export default function Home() {
    return (

        <div className="container mx-auto p-4 w-full ">
            <div className="min-h-screen flex items-center ">
                <div className="grid flex-row items-start w-full justify-center">
                    <div className="flex items-baseline">
                        <Image src="svgs/LogoIconDark.svg" alt="Icon Kanzoto" className="-ml-6  dark:flex" width={124} height={124} />
                        <h1 className="font-Bebas text-9xl text-white ">anzoto</h1>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-between items-center  sm:gap-16 md:gap-24 lg:gap-64 w-full">
                            <h2 className="text-2xl text-white">Human web agency</h2>
                            <div className="flex space-x-4">
                                <CallToAction color="lime" text="GET STARTED" />
                                <CallToAction color="gray" text="OUR PROJECT" icon={<Image src="/svgs/ButtonIcon.svg" alt="Redirection Icon" width={16} height={16} />} />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 mt-2">
                            <Image src={"/svgs/Underline.svg"} alt="underline effect" width={86} height={86} />
                            <p className="text-lg text-white">Creatively Human, Digitally Expert</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl text-white fw-bold mb-8 text-center">LATEST PROJECT</h2>
            <BentoGrid className="max-w-4xl mx-auto mb-16 md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                    />
                ))}
            </BentoGrid>
            <h2 className="text-2xl text-white fw-bold text-center">THEY TRUST US</h2>
            <MarqueeDemo />
        </div>
    );
}
//For bento grid 
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        className: "md:col-span-2",
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        className: "md:col-span-1",
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-2",
    },
];
