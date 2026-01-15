import Image from "next/image"

const AnimeList = () => {
  return (
    <div className="h-32 gap-4 grid grid-cols-3">
      <div className="bg-indigo-500">
        <Image src="https://placehold.co/600x400/png" alt="..." width={600} height={400}/>
        <h3>Judul Film</h3>
      </div>
      <div className="bg-indigo-500">kotak2</div>
      <div className="bg-indigo-500">kotak3</div>
      <div className="bg-indigo-500">kotak4</div>
      <div className="bg-indigo-500">kotak5</div>
      <div className="bg-indigo-500">kotak6</div>
    </div>
  )
}

export default AnimeList