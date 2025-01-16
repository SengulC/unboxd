"use client"

import React, { useState, useEffect } from 'react'

export default function Stars({rating}) {
    // depending on rating 0-5 render 0-5 stars.

    const [starsList, setstarsList] = useState([]);

    useEffect(() => {
        let arr = new Array(rating).fill("★");
        setstarsList(arr);
    }, [rating])    

    return (
        <>
        {starsList}
        </>
    )
}
