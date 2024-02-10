"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    return (
        // <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        //     <div className="flex justify-center items-center gap-1">
        //         <FileSearch size={44} className="text-color-accent"/>
        //         <h3 className="text-color-accent text-4xl text-bold">NOT FOUND</h3>
        //     </div>
        // </div>
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col md:flex-row px-5 text-color-accent">
                    <div className="max-w-md">
                        <div className="pr-0 flex justify-center md:pr-3"> </div>
                        <div className="text-3xl md:text-5xl font-dark font-bold text-center">503</div>
                        <p className="mb-8 text-center">Not Found</p>
                        <div className="flex justify-center">
                            <span className="z-0 inline-flex shadow-sm rounded-md flex-grow-1 border border-color-primary-300">
                                <button onClick={() => router.back()} className="rounded-1-md text-gray-600 inline-flex items-center px-4 py-2 bg-white textx-sm font-medium hover:bg-gray-300 focus:z-10 focus:outline-none">Back</button>
                                <Link href="/" className="-ml-px border-l rounded-r-md text-gray-600 inline-flex items-center px-4 py-2 border-gray-300 bg-white text-sm font-medium hover:bg-gray-300 focus:z-10 focus:outline-none">Home</Link>
                            </span>
                        </div>
                        <div className="flex flex-col sm:max-w-md mt-5 px-6 font-thin">
                            <div className="flex justify-center text-xs py-2"> Kesalahan? coba kontak admin lewat Discord </div>
                            <div className="flex justify-center text-xs font-bold"> Copyright © 2024 - ZAnime Website v1</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page