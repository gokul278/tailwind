import React from 'react'

export const Breadcrumbs = () => {
    return (
        <div className='mt-2'>
            <nav aria-label="Breadcrumb">
                <ol class="flex items-stretch gap-2 px-4 list-none rounded shadow-md h-14 shadow-slate-200 bg-white">
                    <li class="flex items-center gap-2">
                        <a href="#" class="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true" aria-labelledby="title-01 description-01" role="link">
                                <title id="title-01">Home</title>
                                <desc id="description-01">
                                    Home button indicating the homepage of the website.
                                </desc>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </a>
                       
                    </li>
                    <li class="flex items-center gap-2">
                        <a href="#" class="flex max-w-[20ch] truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">UI components</a>
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true" aria-labelledby="title-04 description-04" role="graphics-symbol">
                            <title id="title-04">Arrow</title>
                            <desc id="description-04">
                                Arrow icon that points to the next page in big screen resolution sizes
                                and previous page in small screen resolution sizes.
                            </desc>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </li>
                    <li class="flex items-center flex-1 gap-2">
                        <a href="#" aria-current="page" class="pointer-events-none max-w-[20ch] truncate whitespace-nowrap text-slate-400">Project</a>
                    </li>
                </ol>
            </nav>
        </div>
    )
}
