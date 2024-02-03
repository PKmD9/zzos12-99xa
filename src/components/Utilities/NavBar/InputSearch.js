"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${searchRef.current.value}`)
        }
    }
    return (
        <div className="relative">
            <input placeholder="Search" className="w-full p-2 rounded" ref={searchRef} onKeyDown={handleSearch} />
            <button type="submit" className="absolute top-2 end-2" onClick={handleSearch}><MagnifyingGlass size={25} /></button>
        </div>
    )
}

export default InputSearch