import Image from "next/image";
import cali1 from "../assets/cali.jpg";
import cali2 from "../assets/cali2.jpg";
import cali3 from "../assets/cali3.jpg";
import cali4 from "../assets/cali4.jpg";




function Recent() {
  return (
    <div className="mt-10 p-5 justify-center">
        <h2 className="text-2xl text-center font-bold text-red-500 mb-1 md:mb-1 lg:mb-1 xlg:mb-1 ">Recent Properties </h2>

        {/* cards section  */}
        <div className="grid p-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xlg:grid-cols-4 gap-5">
            <div className=" overflow-hidden md:px-6 lg:px-6 xlg:px-6 ">
                   <Image 
                                src={cali1}
                                width={400}
                                height={300}
                                objectFit="center"
                                className="cursor-pointer w-full rounded-md"
                             />
                      <div className=" py-4">
                        <p className="font-bold text-xl text-red-500 mb-2">Aso Villa</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta adipisci quasi veniam exercitationem praesentium sit dolor aspernatur qui placeat alias minima maxime dolorum, quia, repellendus natus aliquid veritatis voluptate?</p>
                    </div>

                    <div className="pt-4 pb-2">  
                      <span className="inline-block text-red-300 font-bold text-sm py-1">$120,000</span>
                    </div>

                    <div className="pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> 2 Beds</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> 2 Baths</span>

                    </div>

                    <div className="pt-4 pb-2 mb-10">
                      <button className="inline-block bg-red-500 rounded-full px-4 py-1  font-bold text-white mr-2 mb-2" >View Property</button>
                    </div>
            </div>

            <div className=" overflow-hidden md:px-6 lg:px-6 xlg:px-6">
                   <Image 
                                src={cali2}
                                width={400}
                                height={300}
                                objectFit="center"
                                className="cursor-pointer w-full rounded-md"
                             />
                      <div className=" py-4">
                        <p className="font-bold text-xl text-red-500 mb-2">G.W Castle</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta adipisci quasi veniam exercitationem praesentium sit dolor aspernatur qui placeat alias minima maxime dolorum, quia, repellendus natus aliquid veritatis voluptate?</p>
                    </div>

                    <div className="pt-4 pb-2">  
                      <span className="inline-block text-red-300 font-bold text-sm py-1">$280,000</span>
                    </div>

                    <div className="pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> 5 Beds</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> 3 Baths</span>

                    </div>

                    <div className="pt-4 pb-2 mb-10">
                      <button className="inline-block bg-red-500 rounded-full px-4 py-1  font-bold text-white mr-2 mb-2" >View Property</button>
                    </div>
            </div>

            <div className=" overflow-hidden md:px-6 lg:px-6 xlg:px-6 ">
                   <Image 
                                src={cali3}
                                width={400}
                                height={300}
                                objectFit="center"
                                className="cursor-pointer w-full rounded-md"
                             />
                      <div className=" py-4">
                        <p className="font-bold text-xl text-red-500 mb-2">Prime Castle</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta adipisci quasi veniam exercitationem praesentium sit dolor aspernatur qui placeat alias minima maxime dolorum, quia, repellendus natus aliquid veritatis voluptate?</p>
                    </div>

                    <div className="pt-4 pb-2">  
                      <span className="inline-block text-red-300 font-bold text-sm py-1">$200,000</span>
                    </div>

                    <div className="pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> 4 Beds</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> 4 Baths</span>

                    </div>

                    <div className="pt-4 pb-2 mb-3">
                      <button className="inline-block bg-red-500 rounded-full px-4 py-1  font-bold text-white mr-2 mb-2" >View Property</button>
                    </div>
            </div>

        </div>
    </div>
  
    
  )
}

export default Recent