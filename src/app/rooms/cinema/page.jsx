import Link from 'next/link'
import React from 'react'

export default function Cinema() {
  return (
    <body className='cinema'>
        <Link href="/"> &lt; Home </Link>
        <h1>Cinema</h1>
        <div className='cinemaGrid'>
          <div>Bruh</div>
          This is alot of text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum, temporibus quisquam facilis consequatur doloribus itaque, molestiae veritatis optio cum nemo dolorem delectus. Velit tempora cum doloribus animi ipsum dignissimos.
          <div>Bruh</div>
          <div>Bruh</div>
        </div>
        <div className="fuzzy-overlay"></div>
    </body>
  )
}
