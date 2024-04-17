import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'


const Navbar = () => {
    return (
        <>
            <nav className='w-[100%] h-[56px] bg-[#7EC3F6] text-[#050505] font-semibold'>
                <ul className='w-[100%] h-[56px] flex'>
                    <li className='w-[12%] h-[56px] flex items-center justify-center md:w-[115px] hover:bg-white hover:text-black'>
                        <Link href="/" className='w-[100%] h-[100%] flex flex-row items-center justify-center'>
                            <div className='w-[50px] h-[40px] flex items-center'>
                                <Image 
                                    src="/logo.webp" 
                                    alt="OfficeX Logo" 
                                    width={50}
                                    height={40}    
                                />
                            </div>
                            <span>officeX</span>
                        </Link>
                    </li>

                    <SearchBar />

                    <li className='w-[10%] items-center justify-center ml-auto hidden md:flex hover:bg-white hover:text-black'>
                        <Link href='/'>
                            <FontAwesomeIcon icon={faCartShopping} size='2xl' style={{color: "#d8d4d4",}} />
                        </Link>
                    </li>

                    <li className='w-[10%] hidden items-center justify-center md:flex hover:bg-white hover:text-black'>
                        <Link href='/'>Đăng nhập</Link>
                    </li>
                </ul>
            </nav>
            
        </>
    )
}
export default Navbar
