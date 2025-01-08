'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Movie() {
  const searchParams = useSearchParams();
  const [movieName, setMovieName] = useState("");

  useEffect(() => {
    setMovieName(searchParams.get('title'));
    if (movieName) {
        console.log(movieName);
    } else {
        console.log(searchParams);
    }
  }, [searchParams]);

  return (
    <body className='cinema'>
      <h1>{movieName}</h1>
      <div className="fuzzy-overlay"></div>
    </body>
  );
}
