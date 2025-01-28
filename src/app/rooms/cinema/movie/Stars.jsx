"use client"

import React, { useState, useEffect } from 'react'

export default function Stars({rating}) {
    const [starsList, setstarsList] = useState([]);

    useEffect(() => {
        let len = Math.floor(rating);
        let arr = new Array(5);
        for (let i=0; i<len; i++) {
            arr.push("🌕 ")
        }
        if (rating !== len) {
            arr.push("🌗 ")
        }
        let remainder = Math.floor(5-rating);
        for (let i=0; i<remainder; i++) {
            arr.push("🌑 ")
        }
        // 🌕🌕🌕🌗🌑
        setstarsList(arr);
    }, [rating])    

    return (
        <>
        {starsList}
        </>
    )
}
