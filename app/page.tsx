import AnimeList  from "./components/AnimeList"

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)

  const anime = await response.json()
  anime.data
  return(
    <main>
      <h1>Paling Populer</h1>
      <AnimeList/>
    </main>
  )
}

export default Home