import Link from "next/link"

const Navbar = () => {
  return(
    <header className="bg-indigo-500">
      <div className="flex flex-col sm:flex-row justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-2xl">Anime List</Link>
        <input className="bg-white" placeholder="cari anime"/>
      </div>
    </header>
  )
}

export default Navbar