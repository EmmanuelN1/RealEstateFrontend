import Link from "next/link"

function Banner() {
  return (
    <main className="mt-4 px-4">
        <div className=" text-left lg:text-center md:text-center ">
            <h1 className="font-extrabold lg:text-4xl  text-2xl ">
                <span className="block ">Premium Properties</span>
                <span className="block text-red-500">Non-Premium Prices</span>
            </h1>

            <p className="sm:text-sm mt-3 text-gray-500 md:text-xl md:mt-5 xlg:text-center lg:text-center xlg:mx-auto lg:mx-auto lg:max-w-screen-md xlg:max-w-screen-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic et necessitatibus, numquam quibusdam in eius, aspernatur perspiciatis fugit commodi suscipit a quis eum adipisci atque quo autem, quod tempora.
            </p>

            <div className="mt-5 lg:flex xlg:flex lg:max-w-screen-sm xlg:max-w-screen-sm md:flex lg:mx-auto">
                <div>
                    <Link href="">
                        <a className="flex justify-center rounded-md bg-red-500 text-white px-8 py-3 mt-5"> View Properties </a>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <a className="flex lg:flex-0 justify-center rounded-md bg-red-100 text-red-500 py-3 px-8 lg:mt-5 mt-3"> Explore Locations </a>
                    </Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Banner