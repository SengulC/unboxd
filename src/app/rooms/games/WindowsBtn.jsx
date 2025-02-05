import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function WindowsBtn({img, title, redirect}) {
    const router = useRouter();
    return (
    <div className='windowsBtn'>
        <Image className={"XPicon"} src={img} alt={`Retro Windows XP icon for ${title}`} width={500} height={500}></Image>
        <button onClick={()=>router.push(redirect)}>{title}</button>
    </div>
    )
}



