import Image from "next/image";
import avatar from "../assets/avatar.png"

function Testimonials() {
  return (
    <div className="mt-10 p-5 justify-center">
            <h2 className="text-2xl text-center font-bold text-red-500 mb-1 md:mb-1 lg:mb-1 xlg:mb-1 ">Testimonials </h2>  

            <div className="p-10 grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">



                <div className="shadow-lg  bg-white rounded-xl p-4">
                    <p className="text-gray-600">
                        <span className="text-red-500 text-lg font-bold"
                        >"</span>
                            This is one of the best property websites i have ever used. Kudos to Premium Properties and the team
                        <span className="text-red-500 text-lg font-bold">"</span>

                    </p>
                    <div className="flex py-2 bg-red-100 rounded-full items-center    ">
                            <Image 
                                src={avatar}
                                width={100}
                                height={40}
                                objectFit="contain"
                                className="block relative"
                             />

                        <div className=" font-semibold flex flex-col justify-between ">
                            <span className="text-sm text-red-500 font-semibold"> Kyle</span>
                            <span className="text-xs flex items-center">Bamboo Inc</span>

                        </div>
                    </div>
                </div>

                <div className="shadow-lg bg-white rounded-xl p-4">
                    <p className="text-gray-600">
                        <span className="text-red-500 text-lg font-bold"
                        >"</span>
                            This is one of the best property websites i have ever used. Kudos to Premium Properties and the team
                        <span className="text-red-500 text-lg font-bold">"</span>

                    </p>
                    <div className="flex py-2 bg-red-100 rounded-full items-center    ">
                            <Image 
                                src={avatar}
                                width={100}
                                height={40}
                                objectFit="contain"
                                className="block relative"
                             />

                        <div className=" font-semibold flex flex-col justify-between ">
                            <span className="text-sm text-red-500 font-semibold"> Kyle</span>
                            <span className="text-xs flex items-center">Bamboo Inc</span>

                        </div>
                    </div>
                </div>


                <div className="shadow-lg bg-white rounded-xl p-4">
                    <p className="text-gray-600">
                        <span className="text-red-500 text-lg font-bold"
                        >"</span>
                            This is one of the best property websites i have ever used. Kudos to Premium Properties and the team
                        <span className="text-red-500 text-lg font-bold">"</span>

                    </p>
                    <div className="flex py-2 bg-red-100 rounded-full items-center    ">
                            <Image 
                                src={avatar}
                                width={100}
                                height={40}
                                objectFit="contain"
                                className="block relative"
                             />

                        <div className=" font-semibold flex flex-col justify-between ">
                            <span className="text-sm text-red-500 font-semibold"> Kyle</span>
                            <span className="text-xs flex items-center">Bamboo Inc</span>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Testimonials