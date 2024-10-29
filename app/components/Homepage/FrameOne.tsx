"use client"
import React from 'react'
import Image from 'next/image'
import { FaPlus } from "react-icons/fa6"
import heroPersonImg2 from '@/app/assets/images/hero-person-2.svg'
import heroPersonImg1 from '@/app/assets/images/hero-person-1.svg'
import frameOneImgMan from '@/app/assets/images/frameone-img-man.svg'
import frameOneImgWoman from '@/app/assets/images/frameone-img-woman.svg'

const FrameOne = () => {
    return (
        <section className='relative px-[100px] min-h-[724px]'>
            <section className='flex flex-col space-y-[40px]'>
                <section className='flex flex-col space-y-[20px]'>
                    <section className='flexx'>
                        <h1 className='text-[68px] font-bold leading-[88px] text-white tracking-[-2px]'>
                            Intelligent
                        </h1>
                        <Image src={frameOneImgWoman} width={168.77} height={186.71} alt='frame-one-img-woman' className='inline'/>
                        <h1 className='text-[68px] font-bold leading-[88px] text-white tracking-[-2px]'>
                            Tools for
                        </h1>
                    </section>
                    <section className='flexx !-mt-10'>
                        <Image src={frameOneImgMan} width={168.77} height={186.71} alt='frame-one-img-man' className='inline object-contain -mt-10'/> 
                        <h1 className='text-[68px] font-bold leading-[88px] text-white mt-5 tracking-[-2px]'>Savvy Businesses</h1>
                    </section>
                    <p className='w-[656px] text-[rgba(255,255,255,0.6)] text-[20px] leading-[40px] tracking-[0.6px]'>
                        FramerBite provides the essential elements for crafting a top-tier website for your SaaS platform.
                    </p>
                </section>
                <section className='flexx space-x-[42px]'>
                    <button className='bg-brand-primary px-[28px] py-[18px] text-white rounded-[32px]'>Get Started Now</button>

                    <section className="flexx space-x-[24px]">
                        <section className='flexx -space-x-[12px]'>
                            <section className='z-[1] relative w-[60px] h-[60px]'>
                                <Image src={heroPersonImg1} fill alt="hero-person-1" className='w-full h-full rounded-full'/>
                            </section>
                            <section className='z-[2] relative w-[60px] h-[60px]'>
                                <Image src={heroPersonImg2} fill alt="hero-person-2" className='w-full h-full rounded-full'/>
                            </section>
                            <section className='z-[3] w-[60px] h-[60px] flex-center bg-white rounded-full'>
                                <FaPlus className='w-[24px] h-[24px] text-[#181C39]'/>
                            </section>
                        </section>

                        <section className='flex flex-col space-y-[2px]'>
                            <h3 className='text-white text-[36px] leading-[52px] tracking-[-1px] font-bold'>3.2m</h3>
                            <p className='font-normal text-[18px] leading-[26px] text-[rgba(255,255,255,0.6)]'>Success clients</p>
                        </section>  
                    </section>
                </section>
            </section>
        </section>
    )
}

export default FrameOne