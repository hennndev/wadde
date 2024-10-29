import React from 'react'
import FrameOne from '@/app/components/Homepage/FrameOne'
import FrameTwo from './components/Homepage/FrameTwo'
import FrameThree from './components/Homepage/FrameThree'
import FrameFour from './components/Homepage/FrameFour'

export const metadata = {
    title: "Wadde | Homepage"
}

const page = () => {
    return (
        <main className='container'>
            <FrameOne/>
            <FrameTwo/>
            <FrameThree/>
            <FrameFour/>
        </main>
    )
}

export default page