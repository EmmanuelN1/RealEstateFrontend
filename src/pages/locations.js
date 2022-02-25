import Nav from "../components/Nav"
import Image from "next/image";
import cali1 from "../assets/cali.jpg";
import cali2 from "../assets/cali2.jpg";
import cali3 from "../assets/cali3.jpg";
import cali4 from "../assets/cali4.jpg";
import cali5 from "../assets/cali5.jpg";
import cali6 from "../assets/cali6.jpg";
import cali7 from "../assets/cali7.jpg";
import cali8 from "../assets/cali8.jpg";
import cali9 from "../assets/cali9.jpg";
import Footer from "../components/Footer";



function locations() {
  return (
    <div>
         <Nav/>
         <div className=" pt-5 px-5 lg:max-w-screen-lg mx-auto justify-center">
        <h2 className="text-2xl font-bold text-red-500 mb-1 md:mb-1 lg:mb-1 xl:mb-1 text-center ">LOCATIONS </h2>

        {/* cards section  */}
        <div className="grid p-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xlg:grid-cols-4 gap-5 ">
            <div className="overflow-hidden md:px-6 lg:px-6 xl:px-6 shadow-lg md:shadow-none lg:shadow-none xl:shadow-none rounded-md md:rounded-md lg:rounded-md xl:rounded-md  p-5 md:py-0 lg:py-0 xl:py-0 mb-4 md:mb-0 lg:mb-0 xl:mb-0 ">
                   <Image 
                                src={cali4}
                                width={400}
                                height={300}
                                objectFit="center"
                                className="cursor-pointer w-full rounded-md"
                             />
                      <div className=" py-4">
                        <p className="font-bold text-xl text-red-500 mb-2">Vienna</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta adipisci quasi veniam exercitationem praesentium sit dolor aspernatur qui placeat alias minima maxime dolorum, quia, repellendus natus aliquid veritatis voluptate?</p>
                    </div>

            </div>

            <div className="overflow-hidden md:px-6 lg:px-6 xl:px-6 shadow-lg md:shadow-none lg:shadow-none xl:shadow-none rounded-md md:rounded-md lg:rounded-md xl:rounded-md  p-5 md:py-0 lg:py-0 xl:py-0 mb-4 md:mb-0 lg:mb-0 xl:mb-0 ">
                   <Image 
                                src={cali5}
                                width={400}
                                height={300}
                                objectFit="center"
                                className="cursor-pointer w-full rounded-md"
                             />
                      <div className=" py-4">
                        <p className="font-bold text-xl text-red-500 mb-2">Istanbul</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta adipisci quasi veniam exercitationem praesentium sit dolor aspernatur qui placeat alias minima maxime dolorum, quia, repellendus natus aliquid veritatis voluptate?</p>
                    </div>

            </div>

            <div className="overflow-hidden md:px-6 lg:px-6 xl:px-6 shadow-lg md:shadow-none lg:shadow-none xl:shadow-none rounded-md md:rounded-md lg:rounded-md xl:rounded-md  p-5 md:py-0 lg:py-0 xl:py-0 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                   <Image 
                                src={cali6}
                                width={400}
                                height={300}
                                objectFit="center"
                                className="cursor-pointer w-full rounded-md"
                             />
                      <div className=" py-4">
                        <p className="font-bold text-xl text-red-500 mb-2">London</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta adipisci quasi veniam exercitationem praesentium sit dolor aspernatur qui placeat alias minima maxime dolorum, quia, repellendus natus aliquid veritatis voluptate?</p>
                    </div>

            </div>

           
        </div>


        <div className="grid p-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xlg:grid-cols-4 gap-5 mb-10">
            <div className="overflow-hidden md:px-6 lg:px-6 xl:px-6 shadow-lg md:shadow-none lg:shadow-none xl:shadow-none rounded-md md:rounded-md lg:rounded-md xl:rounded-md  p-5 md:py-0 lg:py-0 xl:py-0 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                   <Image 
                                src={cali9}
                                width={400}
                                height={300}
                                objectFit="center"
                                className="cursor-pointer w-full rounded-md"
                             />
                      <div className=" py-4">
                        <p className="font-bold text-xl text-red-500 mb-2">Paris</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta adipisci quasi veniam exercitationem praesentium sit dolor aspernatur qui placeat alias minima maxime dolorum, quia, repellendus natus aliquid veritatis voluptate?</p>
                    </div>

            </div>

            <div className="overflow-hidden md:px-6 lg:px-6 xl:px-6 shadow-lg md:shadow-none lg:shadow-none xl:shadow-none rounded-md md:rounded-md lg:rounded-md xl:rounded-md  p-5 md:py-0 lg:py-0 xl:py-0 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                   <Image 
                                src={cali7}
                                width={400}
                                height={300}
                                objectFit="center"
                                className="cursor-pointer w-full rounded-md"
                             />
                      <div className=" py-4">
                        <p className="font-bold text-xl text-red-500 mb-2">Munich</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta adipisci quasi veniam exercitationem praesentium sit dolor aspernatur qui placeat alias minima maxime dolorum, quia, repellendus natus aliquid veritatis voluptate?</p>
                    </div>

            </div>

            <div className="overflow-hidden md:px-6 lg:px-6 xl:px-6 shadow-lg md:shadow-none lg:shadow-none xl:shadow-none rounded-md md:rounded-md lg:rounded-md xl:rounded-md  p-5 md:py-0 lg:py-0 xl:py-0 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                   <Image 
                                src={cali8}
                                width={400}
                                height={300}
                                objectFit="center"
                                className="cursor-pointer w-full rounded-md"
                             />
                      <div className=" py-4">
                        <p className="font-bold text-xl text-red-500 mb-2">Norwich</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta adipisci quasi veniam exercitationem praesentium sit dolor aspernatur qui placeat alias minima maxime dolorum, quia, repellendus natus aliquid veritatis voluptate?</p>
                    </div>

            </div>

           
        </div>

        
    </div>
    <Footer/>
    </div>
  )
}

export default locations