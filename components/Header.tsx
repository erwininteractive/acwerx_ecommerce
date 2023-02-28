import Image from 'next/image'
import logo from '../public/logo_black.png'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
            <div className='flex items-center space-x-2'>
                <Link href='/'>
                    <Image src={ logo } height={50} alt='A C Werx' />
                </Link>
                <h1 className='text-3xl'>A C WERX</h1>
            </div>
            <div>
                <p>something will go here too!</p>
            </div>
        </header>
    )
}
