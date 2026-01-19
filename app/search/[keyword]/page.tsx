import Header from "@/components/AnimeList/Header"
import AnimeList from "@/components/AnimeList"

interface ISearchPage {
  params: Promise<{ keyword: string }>
}

const Page = async ({ params }: ISearchPage ) => {
  const { keyword } = await params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()

  return (
    <>
      <section>
        <Header title={`Search ${keyword}...`} linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}

export default Page