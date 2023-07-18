import {PiBellLight} from 'react-icons/pi'
import {RxHamburgerMenu} from 'react-icons/rx';
import {PiNotePencilThin} from 'react-icons/pi'
import profilepic from './Images/profile-pic-44.jpg'

const Header=()=>{
    return (
        <>
           <header className='border-b'>
                <div className="w-[94%] h-16  mx-auto flex justify-between">

                 {/* HAMBURGER-ICON */}
                   <section className='cursor-pointer text-gray-500 text-2xl order-last ml-1  my-auto md:order-first'>
                     < RxHamburgerMenu className=''/> 
                   </section>
                    
                    {/* TITLE */}
                    <h2 className="tracking-tighter md:ml-48 text-2xl font-bold my-auto ">READER</h2>
                   
                   {/* NOTIFY-DIVISION */}
                    <section className=' gap-6 items-center hidden md:flex'>
                        <div className="text-xl cursor-pointer">
                        <PiBellLight className=""/>
                        </div>

                        <div className='rounded-full h-fit cursor-pointer'>
                           <img className='w-full h-full object-cover rounded-full border border-gray-500 p-0.5' src={profilepic} alt='DP'></img> 
                        </div>

                        <div className='flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-2 px-4  cursor-pointer'>
                            <div classname="text-xl font-bold">
                             <PiNotePencilThin className=''/>
                            </div>

                            <p className='text-sm font-semibold'>write</p>
                        </div>
                    </section>
                </div>
           </header>
        </>
    )
}

export default Header;