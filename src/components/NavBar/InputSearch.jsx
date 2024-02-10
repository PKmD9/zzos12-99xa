"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if (!keyword || keyword.trim() == "") return
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${searchRef.current.value}`)
        }

    }
    return (
        // <div classNameName="relative">
        //     <input placeholder="Search" classNameName="w-full p-2 rounded" ref={searchRef} onKeyDown={handleSearch} required/>
        //     <button type="submit" classNameName="absolute top-2 end-2" onClick={handleSearch}><MagnifyingGlass size={25} /></button>
        // </div>
        <div>
            <form className="inline-flex items-center">
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /></svg>
                    </div>
                    <input type="text" id="voice-search" ref={searchRef} onKeyDown={handleSearch} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                </div>
                <button type="submit" onClick={handleSearch} className="inline-flex items-center py-2 px-3 ms-2 text-sm font-medium text-white bg-deep-charcoal-light rounded-lg hover:bg-deep-charcoal-default ">Submit</button>
            </form>
        </div>
    )
}

export default InputSearch