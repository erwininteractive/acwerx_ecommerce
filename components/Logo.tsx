import Image from 'next/image'
import logo from '../public/logo.png'

export default function Logo(props: any) {
    const { renderDefault, title } = props

    return (
        <div className='flex items-center space-x-2'>
            <Image src={ logo } height={50} alt='A C Werx' />
            <>{ renderDefault(props) }</>
        </div>
    )
}

