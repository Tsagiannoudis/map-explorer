import React from 'react';

export default function MainPageLayout({ sidebar, mapcontainer }) {
    return (
        <div className='flex flex-col-reverse lg:flex-row h-screen bg-gray-100'>
            {/* left side panel */}
            <aside className='w-full lg:w-1/4 bg-gray-50 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 shadow-inner overflow-y-auto flex-shrink-0'>
                {sidebar}
            </aside>
            {/* right side map container */}
            <main className='flex-1 flex flex-col overflow-hidden'>
                {mapcontainer}
            </main>
        </div>
    )
}