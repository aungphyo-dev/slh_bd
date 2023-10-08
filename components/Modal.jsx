import React from 'react';

const Modal = ({modal,setModal,modalData}) => {
    return (
        <div onClick={()=>setModal(false)} className={`absolute flex flex-col gap-y-5 justify-center items-center inset-0 z-[100000] bg-gray-900/40 transition-all duration-500 ${modal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <div className="bg-blue-500 p-5 rounded text-white">
                {
                    modalData
                }
            </div>
                <button className='bg-red-500 text-white px-4 py-2 rounded-xl'>Close</button>
        </div>
    );
};

export default Modal;
