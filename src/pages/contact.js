import Nav from "../components/Nav"
import Footer from "../components/Footer";

function contact() {
  return (
    <div>
        <Nav/>
        <div className=" pt-5 px-5 lg:max-w-screen-lg mx-auto justify-center">
             <h2 className="text-2xl font-bold text-red-500 mb-1 md:mb-1 lg:mb-1 xl:mb-1 text-center ">CONTACT US </h2>
          
          <div className="mt-5 ">
            <form action="" method="POST" >
              <div className="w-full md:flex lg:flex xl:flex mt-2 mb-5">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">First Name</label>
                              <input type="text" name="fname" id="" placeholder=" Enter Your First Name" className="block bg-gray-100 py-3 px-4 w-full border border-gray-300 text-black rounded-md focus:outline-none " />
                        </div>
                      
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Last Name</label>
                              <input type="text" name="lname" id="" placeholder=" Enter Your Last Name" className="block bg-gray-100 py-3 px-4 w-full border border-gray-300 text-black rounded-md focus:outline-none " />
                        </div>
                </div>

                <div className="w-full md:flex lg:flex xl:flex mt-2 mb-5">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Phone</label>
                                  <input type="text" name="phone" id="" placeholder="+234-toll-free" className="block bg-gray-100 py-3 px-4 w-full border border-gray-300 text-black rounded-md focus:outline-none " />
                            </div>
                          
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Email</label>
                                  <input type="email" name="lname" id="" placeholder="example@example.com" className="block bg-gray-100 py-3 px-4 w-full border border-gray-300 text-black rounded-md focus:outline-none " />
                            </div>
                </div>  


                <div className="flex mb-6 ">

                    <div className="w-full px-3">
                        <label htmlFor="" className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">
                        Message
                        </label>

                        <textarea className="no-resize bg-gray-100 h-48 resize-none appearance-none w-full rounded-md py-3 px-4 focus:outline-none border-gray-300 " placeholder="Enter Your Message here" id="">

                        </textarea>
                
                    </div>

                </div>


                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button className="shadow  bg-red-500 text-white py-2 px-4 mx-2 rounded-md">
                            Submit
                        </button>
                    </div>
                </div>

                <div>
                
                </div>   

                      
                  </form>

          </div>

                
        <Footer/>
        </div>
    </div>
  )
}

export default contact;