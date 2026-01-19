import Link from "next/link"


const Header = ({title, linkHref, linkTitle}:any) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {/* IF */}
      {linkHref && linkTitle ?
      <Link href={linkHref} className="text-md sm:text-xl underline hover:text-indigo-500 transition-all">{linkTitle}</Link>
      // ELSE
      : null }
    </div>
  )
}

export default Header