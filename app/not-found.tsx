import React from 'react'

type Props = {}

const NotFoundPage = (props: Props) => {
    return (
        <div className='flex-1 flex w-full h-full'>
            <div className='flex flex-col gap-2 m-auto'>
                <h1 className='text-9xl font-bold text-center'>404</h1>
                <p className='text-center text-sm mb-3'>Mohon maaf halaman yang anda akses tidak tersedia</p>
                <a href="/" className='block px-3 py-2 rounded-lg border self-center'>Back to Dashboard</a>
            </div>
        </div>
    )
}

export default NotFoundPage