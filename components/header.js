import Image from 'next/image'

export default function Header() {
    return (
        <header className='flex justify-center items-center gap-2.5 h-20 shadow-sm'>
            <Image src="/chef-claude-icon.png" width="50" height="0" alt='Chef Logo' priority style={{ width: "auto" }} />
            <h1 className='font-normal text-2xl'>Chef Claude</h1>
        </header>
    );
}