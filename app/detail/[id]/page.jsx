"use client"
import React, {useEffect, useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Data from "../../../DB/db.json"
import Modal from "@/components/Modal";

const Detail = () => {
    const {id} = useParams()
    const router = useRouter()
    const question = Data.questions.filter(d => d.questionNo == id);
    const filterData = Data.answers.filter(d => d.questionNo == id);
    const [modalData, setModalData] = useState("")
    const [modal,setModal] = useState(false)
    const [f,setF] = useState("")
    const [e,setE] = useState(0)
    useEffect(() => {
        if (f === "၁"){
            setE(1)
        }else if (f === "၂"){
            setE(2)
        }else if (f === "၃"){
            setE(3)
        }else if (f === "၄"){
            setE(4)
        }else if (f === "၅"){
            setE(5)
        }else if (f === "၆"){
            setE(6)
        }else if (f === "၇"){
            setE(7)
        }else if (f === "၈"){
            setE(8)
        }else if (f === "၉"){
            setE(9)
        }
    }, [f]);
    useEffect(() => {
        if(!!e){
            const data = filterData.filter(data => data.answerNo === e)
            setModalData(data[0].answerResult)
        }
    }, [e,filterData]);
    useEffect(() => {
        router.prefetch("/")
    }, [router]);
    return (
        <>
            <Modal modal={modal} setModal={setModal} modalData={modalData}/>
            <div
                className='bg-[#eff8f9] mx-auto p-5 flex  max-w-screen-md  flex-col justify-center items-center h-auto md:h-screen'>
                <Link href={"/"} className="relative w-[205px] h-[200px]  mb-3 rounded overflow-hidden">
                    <Image priority placeholder="blur"
                           blurDataURL={'/mintheinkha_logo.png'} className='object-cover' sizes={"700"} fill src={"/mintheinkha_logo.png"} alt={"DD"}/>
                </Link>
                <div className='h-full'>
                    <h1 className='text-[20px] font-semibold text-center'>
                        {
                            question[0].questionName
                        }
                    </h1>
                    <div className='grid grid-cols-7 md:grid-cols-9 mt-4 max-w-screen-sm mx-auto gap-1'>
                        {Data.numberList.map((d, i) => <button key={i} onClick={()=> {
                            setF(d)
                            if (!!e){
                                setModal(true)
                            }
                        }}
                                                               className='bg-yellow-800 text-center p-2 rounded-xl text-white text-xs'>{d}</button>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
