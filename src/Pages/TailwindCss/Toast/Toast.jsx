import React from 'react'
import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.css'

export const Toast = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-[20px] font-bold mt-5'>Outlined</h1>
      <button onClick={() => {
        new Notify({
          status: 'success',
          title: 'Notify Title',
          text: 'Notify text lorem ipsum',
          effect: 'fade',
          speed: 300,
          customClass: '',
          customIcon: '',
          showIcon: true,
          showCloseButton: true,
          autoclose: true,
          autotimeout: 3000,
          notificationsGap: null,
          notificationsPadding: null,
          type: 'outline',
          position: 'right top',
          customWrapper: '',
        })
      }} class="mt-5 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Click to Toast - Success</span>
      </button>

      <button onClick={() => {
        new Notify({
          status: 'error',
          title: 'Notify Title',
          text: 'Notify text lorem ipsum',
          effect: 'fade',
          speed: 300,
          customClass: '',
          customIcon: '',
          showIcon: true,
          showCloseButton: true,
          autoclose: true,
          autotimeout: 3000,
          notificationsGap: null,
          notificationsPadding: null,
          type: 'outline',
          position: 'right top',
          customWrapper: '',
        })
      }} class="mt-5 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Click to Toast - Error</span>
      </button>

      <button onClick={() => {
        new Notify({
          status: 'warning',
          title: 'Notify Title',
          text: 'Notify text lorem ipsum',
          effect: 'fade',
          speed: 300,
          customClass: '',
          customIcon: '',
          showIcon: true,
          showCloseButton: true,
          autoclose: true,
          autotimeout: 3000,
          notificationsGap: null,
          notificationsPadding: null,
          type: 'outline',
          position: 'right top',
          customWrapper: '',
        })
      }} class="mt-5 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Click to Toast - Warning</span>
      </button>

      <button onClick={() => {
        new Notify({
          status: 'info',
          title: 'Notify Title',
          text: 'Notify text lorem ipsum',
          effect: 'fade',
          speed: 300,
          customClass: '',
          customIcon: '',
          showIcon: true,
          showCloseButton: true,
          autoclose: true,
          autotimeout: 3000,
          notificationsGap: null,
          notificationsPadding: null,
          type: 'outline',
          position: 'right top',
          customWrapper: '',
        })
      }} class="mt-5 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Click to Toast - Info</span>
      </button>

      <h1 className='text-[20px] font-bold mt-10'>Color Filled</h1>

      <button onClick={() => {
        new Notify({
          status: 'success',
          title: 'Notify Title',
          text: 'Notify text lorem ipsum',
          effect: 'fade',
          speed: 300,
          customClass: '',
          customIcon: '',
          showIcon: true,
          showCloseButton: true,
          autoclose: true,
          autotimeout: 3000,
          notificationsGap: null,
          notificationsPadding: null,
          type: 'filled',
          position: 'right top',
          customWrapper: '',
        })
      }} class="mt-5 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Click to Toast - Success</span>
      </button>

      <button onClick={() => {
        new Notify({
          status: 'error',
          title: 'Notify Title',
          text: 'Notify text lorem ipsum',
          effect: 'fade',
          speed: 300,
          customClass: '',
          customIcon: '',
          showIcon: true,
          showCloseButton: true,
          autoclose: true,
          autotimeout: 3000,
          notificationsGap: null,
          notificationsPadding: null,
          type: 'filled',
          position: 'right top',
          customWrapper: '',
        })
      }} class="mt-5 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Click to Toast - Error</span>
      </button>

      <button onClick={() => {
        new Notify({
          status: 'warning',
          title: 'Notify Title',
          text: 'Notify text lorem ipsum',
          effect: 'fade',
          speed: 300,
          customClass: '',
          customIcon: '',
          showIcon: true,
          showCloseButton: true,
          autoclose: true,
          autotimeout: 3000,
          notificationsGap: null,
          notificationsPadding: null,
          type: 'filled',
          position: 'right top',
          customWrapper: '',
        })
      }} class="mt-5 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Click to Toast - Warning</span>
      </button>

      <button onClick={() => {
        new Notify({
          status: 'info',
          title: 'Notify Title',
          text: 'Notify text lorem ipsum',
          effect: 'fade',
          speed: 300,
          customClass: '',
          customIcon: '',
          showIcon: true,
          showCloseButton: true,
          autoclose: true,
          autotimeout: 3000,
          notificationsGap: null,
          notificationsPadding: null,
          type: 'filled',
          position: 'right top',
          customWrapper: '',
        })
      }} class="mt-5 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Click to Toast - Info</span>
      </button>
    </div>
  )
}
