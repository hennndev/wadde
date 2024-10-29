"use client"
import React from 'react'
import Image from 'next/image'
import logoImage1 from '@/app/assets/images/logo-1.svg'
import logoImage2 from '@/app/assets/images/logo-2.svg'
import logoImage3 from '@/app/assets/images/logo-3.svg'
import logoImage4 from '@/app/assets/images/logo-4.svg'
import logoImage5 from '@/app/assets/images/logo-5.svg'
import logoImage6 from '@/app/assets/images/logo-6.svg'

const FrameTwo = () => {
    return (
        <section className='flex-center flex-col space-y-[52px]'>
            <h3 className='w-[682px] text-center text-white text-[36px] leading-[52px] font-bold tracking-[-1px]'>
                Join over 55,000 businesses that have achieved their goals.
            </h3>

            <section className='bg-white w-[1162.89px] flexx space-x-[48px] px-[82px] py-[50px] rounded-[100px]'>
                <section className='relative w-[133.12px] h-[32.22px]'>
                    <Image src={logoImage2} fill alt="logo2" className='w-full h-full'/>
                </section>  
                <section className='relative w-[133.12px] h-[32.22px]'>
                    <Image src={logoImage3} fill alt="logo2" className='w-full h-full'/>
                </section>  
                <section className='relative w-[133.12px] h-[32.22px]'>
                    <Image src={logoImage4} fill alt="logo2" className='w-full h-full'/>
                </section>  
                <section className='relative w-[133.12px] h-[32.22px]'>
                    <Image src={logoImage5} fill alt="logo2" className='w-full h-full'/>
                </section>  
                <section className='relative w-[133.12px] h-[32.22px]'>
                    <Image src={logoImage6} fill alt="logo2" className='w-full h-full'/>
                </section>  
                <section className='relative w-[133.12px] h-[32.22px]'>
                    <Image src={logoImage1} fill alt="logo2" className='w-full h-full'/>
                </section>  
            </section>
        </section>
    )
}

export default FrameTwo