"use client"

import React, { useState, useEffect } from 'react'

export default function Stars({rating}) {
    // depending on rating 0-5 render 0-5 stars.

    const [starsList, setstarsList] = useState([]);

    useEffect(() => {
        // rating = 3.5
        let len = Math.floor(rating);
        let arr = new Array(5);
        for (let i=0; i<len; i++) {
            arr.push("🌕 ")
        }
        if (rating !== len) {
            arr.push("🌗 ")
        }
        let remainder = Math.floor(5-rating); // 5-3.5 = 1-> 1
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
