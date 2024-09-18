import React from 'react'

export const Buttons = () => {
    return (
        <div className='flex flex-col'>
            <button class="mt-10 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Large button</span>
            </button>

            <button class="mt-10 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span class="order-2">Lead icon</span>
                <span class="relative only:-mx-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-01 desc-01">
                        <title id="title-01">Icon title</title>
                        <desc id="desc-01">
                            A more detailed description of the icon
                        </desc>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                </span>
            </button>

            <button class="mt-10 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Icon & Badge</span>
                <span class="relative only:-mx-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" role="graphics-symbol" aria-labelledby="title-03 desc-03">
                        <title id="title-03">Icon title</title>
                        <desc id="desc-03">
                            A more detailed description of the icon
                        </desc>
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="absolute -top-2 inline-flex items-center justify-center gap-1 rounded-full bg-pink-500 px-1.5 text-xs text-white">
                        9
                        <span class="sr-only"> new emails</span>
                    </span>
                </span>
            </button>

        </div>
    )
}
