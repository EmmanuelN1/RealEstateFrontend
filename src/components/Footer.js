import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from 'next/link'

function Footer() {
  return (
    <div className="pt-40 px-4">
            <div className="container flex flex-col justify-between mx-auto space-y-8">
                    <div className="flex justify-center">
                        <div className=" flex w-12 h-12">
                          <Image 
                                  src={Logo}
                                  width={150}
                                  height={60}
                                  objectFit="contain"
                                  className="cursor-pointer mt-1 mr-2"
                              />
                        </div>
                        <span className="font-semibold text-gray-500 text-lg mt-2">
                            Premium Properties
                        </span>
                    </div>




                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-3 gap-y-8 text-sm">
                      <div className="space-y-3">
                          <h3 className="text-red-500 uppercase tracking-wide">Product</h3>
                            <ul className="space-y-1">
                              <li>
                                 <a href="/about"> About</a> 
                                  
                              </li>
                            
                              <li>
                                    <a href="/services"> Services </a> 
                                  
                              </li>

                              <li>
                                   <a href="/locations">Locations </a> 
                                  
                              </li>

                              <li>
                                   <a href="/contact"> Contact Us </a> 
                              </li>
                            </ul>
                      </div>

                      <div className="space-y-3">
                          <h3 className="text-red-500 uppercase tracking-wide">Company</h3>
                            <ul className="space-y-1">
                              <li>
                                 <a href="#"> Privacy</a> 
                                  
                              </li>
                            
                              <li>
                                    <a href="#"> Terms of Service  </a> 
                                  
                              </li>
                            </ul>
                      </div>

                      <div className="space-y-3">
                          <h3 className="text-red-500 uppercase tracking-wide">Developer</h3>
                            <ul className="space-y-1">
                              <li>
                                 <a href="">Public API</a> 
                                  
                              </li>
                            
                              <li>
                                    <a href=""> Documentation </a> 
                                  
                              </li>

                              <li>
                                   <a href=""> Guides </a> 
                                  
                              </li>

                            </ul>
                      </div>

                      <div className="space-y-3">
                          <h3 className="text-red-500 uppercase tracking-wide">Social Media</h3>
                            <div className="flex justify-start space-x-3">
                                <a href="">
                                    
                                </a>


                                <a href="#" title="Instagram" className="flex items-center p-1">
                                  
                                </a>
                            </div>
                      </div>

                  </div>

            </div>
    </div>
  )
}

export default Footer