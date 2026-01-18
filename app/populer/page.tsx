import AnimeList from "@/components/AnimeList"
import Link from "next/link"

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime: IAnimeData = await response.json()

  interface IAnimeData {
    mal_id: number,
    title: string,
    images: any,
  }

  return(
    <main>
      <AnimeList api={topAnime}/>
    </main>
  )
}

export default Home