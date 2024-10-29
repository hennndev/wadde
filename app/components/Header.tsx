"use client"
import React from 'react'
import Link from 'next/link'
import { IoLogoXing } from "react-icons/io"


const Header = () => {
    return (
        <header className='mb-[20px]'>
            <section className="flex-between px-[32px] py-[16px]">
                <section className='flexx space-x-2'>
                    <section className='w-[33px] h-[33px] bg-brand-primary rounded-full flex-center'>
                        <IoLogoXing className='text-black text-xl'/>
                    </section>
                    <h5 className='text-white text-[30px] font-bold tracking-tighter'>Wadde</h5>
                </section>

                <section className='flexx space-x-[40px] -mr-[50px]'>
                    <Link href='#' className='text-[16px] leading-[26px] font-medium text-white'>All Pages</Link>
                    <Link href='#' className='text-[16px] leading-[26px] font-medium text-white'>Pricing</Link>
                    <Link href='#' className='text-[16px] leading-[26px] font-medium text-white'>Contact</Link>
                    <Link href='#' className='text-[16px] leading-[26px] font-medium text-white'>About</Link>
                </section>  

                <section className='flexx space-x-[24px]'>
                    <button className='border-none outline-none bg-transparent text-[16px] font-medium leading-[26px] text-white'>Sign In</button>
                    <button className='bg-brand-primary px-[28px] py-[16px] rounded-[32px] text-white text-[16px] font-medium leading-[24px]'>Get This Template</button>
                </section>
            </section>
        </header>
    )
}

export default Header