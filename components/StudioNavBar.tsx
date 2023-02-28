import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

export default function StudioNavBar(props: any) {
    return (
        <div className='bg-[#101112]'>
            <div className='flex items-center justify-between p-5'>
                <Link href='/' className='text-blue-500 flex items-center'>
                    <ArrowUturnLeftIcon className='h-6 w-6 text-blue-500 mr-2' />
                    back to website
                </Link>
            </div>
            <>{ props.renderDefault(props) }</>
        </div>
    )
}

