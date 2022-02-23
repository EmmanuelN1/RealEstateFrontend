import Link from "next/link"

function Banner() {
  return (
    <main className="mt-5 px-4 m-2 ">
        <div className=" text-left mb-10  ">
            <h1 className="font-extrabold lg:text-4xl xl:text-4xl text-2xl">
                <span className="block ">Premium Properties</span>
                <span className="block text-red-500">Non-Premium Prices</span>
            </h1>

            <p className="sm:text-sm mt-3 text-gray-500 md:text-xl md:mt-5  mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic et necessitatibus, numquam quibusdam in eius, aspernatur perspiciatis fugit commodi suscipit a quis eum adipisci atque quo autem, quod tempora.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic et necessitatibus, numquam quibusdam in eius, aspernatur perspiciatis fugit commodi suscipit a quis eum adipisci atque quo autem, quod tempora.
                
            </p>

            <div className=" lg:flex xl:flex md:flex   ">
                <div>
                    <Link href="">
                        <a className="flex justify-center rounded-md bg-red-500 text-white px-8 py-3 mt-5 "> View Properties </a>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <a className="flex lg:flex-0 justify-center rounded-md bg-red-100 text-red-500 py-3 px-8 xl:m-5 lg:m-5 md:m-5 mt-3 "> Explore Locations </a>
                    </Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Banner