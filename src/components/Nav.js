import {useState} from "react"
import Image from "next/image";
import Logo from "../assets/Logo.png";
import {Transition} from "@headlessui/react" //installed from a library
import Link from 'next/link'



function Nav() {


    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <nav className=" sticky shadow-md w-full z-10 mb-5 ">
          <div className="w-full">
              <div className="flex items-center h-20 w-full ">
                  <div className="flex items items-center mx-2 lg:mx-20 justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0">
                           <Image 
                                src={Logo}
                                width={150}
                                height={60}
                                objectFit="contain"
                                className="cursor-pointer mt-1"
                             />
                          </div>

                          <div className="hidden md:block">
                              <div className="ml-10  flex items-baseline space-x-4 mr-4"> 
                                    <Link  href="/" > 
                                       <a  className="cursor-pointer text-red-500 font-semibold px-3 py-2 text-md hover:text-white hover:bg-red-500 "> Home </a> 
                                    </Link>

                                    <Link href="/about"> 
                                         <a className="cursor-pointer text-gray-500 font-semibold px-3 py-2 text-md hover:text-white hover:bg-red-500">About</a>
                                    </Link>

                                    <Link  href="/properties" > 
                                        <a className="cursor-pointer text-gray-500 font-semibold px-3 py-2 text-md hover:text-white hover:bg-red-500"> Properties </a> 
                                    </Link>  

                                    <Link  href="/locations" > 
                                       <a className="cursor-pointer text-gray-500 font-semibold px-3 py-2 text-md hover:text-white hover:bg-red-500" > Locations </a> 
                                    </Link>

                                    <Link href="/contact"> 
                                       <a className="cursor-pointer text-white bg-red-500 
                                       rounded-md
                                       font-semibold px-3 py-2 text-md  hover:bg-white hover:text-gray-500" >Contact</a>
                                    </Link>
                              </div>
                          </div>
                      
                  </div>

                    {/*Making it Mobile Responsive */}
                  <div className="mr-10 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-red-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-500 focus:outline-none focus:ring-offset-2 focus:ring-offset-red-500 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        >
                                {/* shape code */}
                        <span className="sr-only"> Open main menu </span>
                            {!isOpen ? (
                                //menu shape
                                <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/> 
                                </svg>
                            ): (
                                //cross shape
                                <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            )}  
                            
                        </button>
                  </div>
              </div>
          </div>

            <Transition 
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95" 
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100  scale-100" 
                leaveTo="opacity-0 scale-95"
                >  
                    {(ref) => (
                        //handles the mobile menu tabs
                        <div className="md:hidden id-mobile-menu">
                                <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                                    <Link href="/">
                                      <a className="cursor-pointer hover:bg-red-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>  
                                    </Link>


                                    <Link href="/about">
                                        <a className="cursor-pointer hover:bg-red-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"> About </a>
                                    </Link>


                                    <Link href="/properties">
                                        <a className="cursor-pointer hover:bg-red-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Properties</a>
                                    </Link>


                                    <Link href="/locations" >
                                       <a 
                                        className="cursor-pointer hover:bg-red-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Locations</a>  
                                    </Link>

                                    <Link href="/contact">
                                        <a className="cursor-pointer hover:bg-red-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                                    </Link>
                                </div>
                        </div>
                    )}  
            </Transition>



        </nav>
    </div>
  )
}

export default Nav;
