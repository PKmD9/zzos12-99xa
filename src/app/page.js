"use client"

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const topAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const listTop = await topAnime.json()

  return (
    <>
      <section>
        <Header title="Most Popular" hrefLink="/popular" desc="See More"/>
        <AnimeList api={listTop}/>
      </section>
      <section>
        <Header title="Newest" hrefLink="/newest" desc="See More"/>
        <AnimeList api={listTop}/>
      </section>
    </>
  );
}

export default Page