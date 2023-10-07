"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const HomeIndex = () => {
        const fetchData = async () => {
            await axios({
                method: 'get',
                url:`https://serverintermake.site/andr/azkar/sec/arr.php` ,
                headers:{
                    "Access-Control-Allow-Origin":"*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"

                }
            })
        }
    const {
        data,
    } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchData,
    })
    console.log(data)
    return <>
        <h1>📖 Post list</h1>
        <div className="container">
            <ol>

            </ol>
        </div>
    </>
};

export default HomeIndex;
