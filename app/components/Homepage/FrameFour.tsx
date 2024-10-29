"use client"
import React from 'react'
import Image from 'next/image'
import aboutusImage from '@/app/assets/images/aboutus-img.png'

const FrameFour = () => {
    return (
        <section className='mt-[100px] px-[200px]'>
            <div className="flex-between">
            <section className='flex flex-col space-y-[52px] w-[460px]'>
                <section className='flex flex-col space-y-[36px]'>
                    <section className="flex flex-col space-y-[12px]">
                        <p className='uppercase text-brand-primary text-[18px] leading-[26px] font-medium'>about us</p>
                        <h2 className='text-[56px] leading-[62px] tracking-[-1px] font-bold text-white'>Embark on Your Digital</h2>
                    </section>
                    <p className='text-[24px] leading-[40px] tracking-[0.6px] text-[rgba(255,255,255,0.6)]'>FramerBite offers the key components to build a professional-grade website for your SaaS, a fact well-known to readers familiar with the industry.</p>
                </section>
                <button className='w-max px-[22px] py-[18px] border border-brand-primary rounded-[32px] text-brand-primary text-[16px] leading-[24px] font-medium'>More About Us</button>
            </section>
            <div className='relative w-[377px] h-[494px]'>
                <Image src={aboutusImage} fill alt='about-us' className='w-full h-full'/>
            </div>
            </div>
        </section>
    )
}

export default FrameFour