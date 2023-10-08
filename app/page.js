"use client"
import React, {useEffect, useState} from 'react';
import Data from '../DB/db.json'
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const HomeIndex = () => {
    const [question, setQuestion] = useState(null)
    const [query, setQuery] = useState("")
    useEffect(() => {
        if  (query.length === 0) {
            setQuestion(Data.questions)
        }else if (query.length > 0) {
                const filterData = question.filter(data => data.questionName.includes(query))
                setQuestion(filterData)
        }
    }, [query,question]);
    return (
        <div className='bg-[#eff8f9] mx-auto pt-5 pb-0 flex  max-w-screen-md  flex-col justify-center items-center h-screen'>
            <div className="relative w-[205px] h-[200px] x mb-3 rounded overflow-hidden">
                <Image  placeholder="blur"
                        blurDataURL={'/mintheinkha_logo.png'} className={"object-cover"} priority sizes={"100"} fill src={"/mintheinkha_logo.png"} alt={"DD"}/>
            </div>
            <div className='w-full px-5'>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                           className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                           placeholder="Search Baydin" required value={query} onChange={e=>setQuery(e.target.value)}/>
                </div>
            </div>
            <ul className='h-full overflow-y-auto mt-5 mb-1  border-collapse px-0 md:px-5 ' id={"scroll"}>
                {
                    question?.map(q => <Link href={`/detail/${q.questionNo}`}
                                             className='grid grid-cols-12 border-2 mb-2 px-3 py-2 rounded'
                                             key={q.questionNo}>
                        <div className='col-span-1'>
                            {q.questionNo}
                        </div>
                        <div className='col-span-11'>
                            {q.questionName}
                        </div>
                    </Link>)
                }
            </ul>
            <Footer/>
        </div>
    )
};

export default HomeIndex;
