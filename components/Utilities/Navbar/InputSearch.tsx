"use client"

import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = (event:any) => {
    event.preventDefault()
    const keyword = searchRef.current?.value
    router.push(`/search/${keyword}`)
  }
  return (
    <div className="relative">
      <input placeholder="cari anime" className="p-2 w-full rounded" ref={searchRef} />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlassIcon size={24} />
      </button>
    </div>
  )
}

export default InputSearch