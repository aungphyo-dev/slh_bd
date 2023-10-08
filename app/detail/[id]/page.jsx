"use client"
import React from 'react';
import {useParams} from "next/navigation";
import Image from "next/image";

const Detail = () => {
    const {id} = useParams()
    return (
        <div className='bg-[#eff8f9] mx-auto p-5 flex  max-w-screen-md  flex-col justify-center items-center h-screen'>
            <div className="relative w-[200px] h-[200px] object-contain mb-3">
                <Image priority sizes={"700"} fill src={"/mintheinkha_logo.png"} alt={"DD"}/>
            </div>
            <div className='h-full'>

            </div>
        </div>
    );
};

export default Detail;
