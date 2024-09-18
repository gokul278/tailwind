import React from 'react'
import { InputBox } from '../../Pages/TailwindCss/Input/InputBox'
import { TextArea } from '../../Pages/TailwindCss/Input/TextArea'
import { Buttons } from '../../Pages/TailwindCss/Button/Buttons'
import { Toast } from '../../Pages/TailwindCss/Toast/Toast'
import { Breadcrumbs } from '../../Pages/TailwindCss/Breadcrumbs/Breadcrumbs'
import { FabButton } from '../../Pages/TailwindCss/FabButton/FabButton'

export const TailwindCss = () => {
  return (
    <div align="center">
      <h1 className='text-[20px] mt-5 font-bold'>Tailwind + WindUi</h1>

      <div className='py-10 w-[90%]'>
        <h1 className='text-[20px] font-bold'>Input Box</h1>
        <InputBox />
        <h1 className='text-[20px] font-bold mt-20'>TextArea</h1>
        <TextArea />
        <h1 className='text-[20px] font-bold mt-20'>Button</h1>
        <Buttons />
        <h1 className='text-[20px] font-bold mt-20'>Simply Notify Toast</h1>
        <Toast />
        <h1 className='text-[20px] font-bold mt-20'>Breadcrumbs</h1>
        <Breadcrumbs />
        <h1 className='text-[20px] font-bold mt-20'>Stepper</h1>
        <h1 className='text-[20px] font-bold mt-5'>Not Available</h1>
        <h1 className='text-[20px] font-bold mt-20'>Fab Button</h1>
        <h1 className='text-[20px] font-bold mt-5'>In Your Bottom Left Side</h1>
        <h1 className='text-[20px] font-bold mt-20'>Chips</h1>
        <h1 className='text-[20px] font-bold mt-5'>Not Available</h1>
        <FabButton />
      </div>
    </div>
  )
}
