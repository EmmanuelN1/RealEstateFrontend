import Image from "next/image";
import Logo from "../assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



function Footer() {
  return (
    <div className="pt-40 px-4 divide-y">
            <div className="container flex flex-col justify-between mx-auto space-y-8 ">
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




                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-3 gap-y-8 text-sm sm:ml-10 " >
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
                            <ul className="space-x-3">
                              <li>
                                 <a href="#">Public API</a> 
                                  
                              </li>
                            
                              <li>
                                    <a href="#"> Documentation </a> 
                                  
                              </li>

                              <li>
                                   <a href="#"> Guides </a> 
                                  
                              </li>

                            </ul>
                      </div>

                      <div className="space-y-3">
                          <h3 className="text-red-500 uppercase tracking-wide">Social Media</h3>
                            <div className="flex justify-start space-x-3 ">
                                <a href=""title="Facebook" className="flex items-center p-1">
                                    <FaFacebook className="w-5 h-5 fill-current"/>
                                </a>

                                <a href="#" title="Instagram" className="flex items-center p-1  ">
                                  <FaInstagram className="w-5 h-5 fill-current "/>
                                </a>

                                <a href="#" title="Twitter" className="flex items-center p-1">
                                  <FaTwitter className="w-5 h-5 fill-current"/>
                                </a>

                                <a href="#" title="LinkedIn" className="flex items-center p-1">
                                  <FaLinkedinIn className="w-5 h-5 fill-current"/>
                                </a>
                            </div>

                            
                      </div>

                  </div>
                  <div className="text-center text-red-500  text-sm py-6 ">
                              <p>© 1968 Company Co. All rights reserved</p>
                  </div>

            </div>
    </div>
  )
}

export default Footer