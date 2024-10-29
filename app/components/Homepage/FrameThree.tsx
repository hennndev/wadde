"use client"
import React from 'react'
import Image from 'next/image'
import visaCardImg from '@/app/assets/images/visa-card-img.png'
import investmentImg from '@/app/assets/images/investment-img.svg'
import retirementImg1 from '@/app/assets/images/retirement-img-1.svg'
import retirementImg2 from '@/app/assets/images/retirement-img-2.svg'
import { VscFilterFilled, VscOutput, VscCreditCard } from "react-icons/vsc"

const FrameThree = () => {
    return (
        <section className='px-[200px] flex flex-col space-y-[68px] mt-[200px]'>
            <h2 className='w-[968px] text-[56px] font-bold leading-[62px] tracking-[-1px] text-white'>
                We're here to assist you in creating, managing
            </h2>
            
            <section className='flex flex-col space-y-[34px]'>
                <section className='h-[493px] flex space-x-[34px]'>
                    <section className='flex-between flex-col w-[416px] bg-[rgba(255,255,255,0.1)] pt-[52px] px-[36px] rounded-[12px]'>
                        <section className='flex flex-col space-y-[12px]'>
                            <section className="flex-between pb-[38px]">
                                <h3 className='text-[30px] leading-[40px] tracking-[-1px] font-bold text-white'>Investment Fund</h3>
                                <div className='bg-yellow-primary rounded-full w-[48px] h-[48px] flex-center'>
                                    <VscFilterFilled className='text-black w-[24px] h-[24px]'/>
                                </div>
                            </section>
                            <p className='text-[rgba(255,255,255,0.6)] text-[20px] leading-[28px] tracking-[0.6px]'>FramerBite delivers the essential components to build a polished and professional website for your SaaS business.</p>
                        </section>

                        <div className='relative w-[316px] h-[149px]'>
                            <Image src={investmentImg} fill alt="investment" className='w-full h-full'/>
                        </div>
                    </section>


                    <section className='flex-1 flex-between flex-col w-[571px] bg-[rgba(255,255,255,0.1)] pt-[52px] px-[36px] rounded-[12px]'>
                        <section className='flex flex-col space-y-[12px]'>
                            <section className="flex-between pb-[38px]">
                                <h3 className='text-[30px] leading-[40px] tracking-[-1px] font-bold text-white'>Retirement Plan</h3>
                                <div className='bg-yellow-primary rounded-full w-[48px] h-[48px] flex-center'>
                                    <VscOutput className='text-black w-[24px] h-[24px]'/>
                                </div>
                            </section>
                            <p className='text-[rgba(255,255,255,0.6)] text-[20px] leading-[28px] tracking-[0.6px]'>
                                FramerBite offers the essential building blocks for developing a sophisticated website for your SaaS, a well-established fact recognized by numerous desktop publishing packages and web page editors.
                            </p>
                        </section>

                        <section className='flexx space-x-[32px]'>
                            <div className='relative w-[313px] h-[154px]'>
                                <Image src={retirementImg1} fill alt="retirement1" className='w-full h-full'/>
                            </div>
                            <div className='relative w-[162.97px] h-[154px]'>
                                <Image src={retirementImg2} fill alt="retirement2" className='w-full h-full'/>
                            </div>
                        </section>
                    </section>  
                </section>

                <section  className='w-[1021px] h-[458px] bg-[rgba(255,255,255,0.1)] pt-[52px] pb-[32px] px-[36px] rounded-[12px] flex-center space-x-[59px]'>
                    <section className='w-[408px] flex flex-col space-y-[26px]'>
                        <section className='flex flex-col space-y-[40px]'>
                            <div className='bg-yellow-primary rounded-full w-[48px] h-[48px] flex-center'>
                                <VscCreditCard className='text-black w-[24px] h-[24px]'/>
                            </div>
                            <h2 className='text-[30px] leading-[40px] tracking-[-1px] font-bold text-white'>Global Visa and Mastercard with Multi-Currency Support</h2>
                        </section>
                        <p className='text-[20px] leading-[28px] tracking-[0.6px] text-[rgba(255,255,255,0.6)]'>FramerBite provides the necessary elements for crafting a professional-grade website for your SaaS, acknowledged by various desktop publishing tools</p>
                    </section>

                    <div className='self-end relative w-[462px] h-[278px]'>
                        <Image src={visaCardImg} fill alt='visa-card' className='w-full h-full'/>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default FrameThree