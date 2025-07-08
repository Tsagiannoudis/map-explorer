import React from 'react';

export default function MainPageLayout({ sidebar, mapcontainer, searchbar }) {
    return (
        <main className='relative h-screen w-screen overflow-hidden'>
            <div className='absolute inset-0 z-0'>
                {mapcontainer}
            </div>
            
            <aside className='absolute top-4 bottom-4 left-6 w-400 max-w-md bg-slate-200 rounded-lg bg-opacity-90 backdrop-blur-sm shadow-2xl p-6 overfliw-y-auto z-20'>
                {sidebar}
            </aside>

            <div className='absolute top-4 right-4 z-10'>
                {searchbar}
            </div>       
        </main>
    )
}

// {/* <div className='flex flex-col-reverse lg:flex-row h-screen bg-gray-100'>
//     {/* left side panel */}
//     <aside className='w-full lg:w-1/4 bg-gray-50 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 shadow-inner overflow-y-auto flex-shrink-0'>
//         {controlpanel}
//     </aside>
//     {/* right side map container */}
//     <main className='flex-1 flex flex-col overflow-hidden'>
//         {mapcontainer}
//     </main>
// </div> */}