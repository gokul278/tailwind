import React from 'react'
import Inputbox from '../../Pages/Bootstrap/Input/Inputbox'
import { TextArea } from '../../Pages/Bootstrap/Input/TextArea'
import Button from '../../Pages/Bootstrap/Button/Button'
import Toast from '../../Pages/Bootstrap/Toast/ToastUI'
import Breadcrumb from '../../Pages/Bootstrap/Breadcrumb/Breadcrumb'

export const BootstrapCss = () => {
  return (
    <div className='w-[100%]' align="center">
      <h1 className='text-[20px] mt-5 font-bold'>React Bootstrap</h1>
      <div className='w-[90%]'>
        <h1 className='text-[20px] font-bold mt-10'>Input Box</h1>
        <Inputbox />
        <h1 className='text-[20px] font-bold mt-[300px]'>TextArea</h1>
        <TextArea />
        <h1 className='text-[20px] font-bold mt-[350px]'>Button</h1  >
        <Button />
        <h1 className='text-[20px] font-bold mt-56'>Simply Notify Toast</h1>
        <Toast />
        <h1 className='text-[20px] font-bold mt-[600px]'>Breadcrumbs</h1>
        <Breadcrumb/>
        <h1 className='text-[20px] font-bold mt-20'>Stepper</h1>
        <h1 className='text-[20px] font-bold mt-5'>Not Available</h1>
        <h1 className='text-[20px] font-bold mt-20'>Fab Button</h1>
        <h1 className='text-[20px] font-bold mt-5'>Not Available</h1>
        <h1 className='text-[20px] font-bold mt-20'>Chips</h1>
        <h1 className='text-[20px] font-bold mt-5'>Not Available</h1>
      </div>
    </div>
  )
}
