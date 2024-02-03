"use client"

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({params}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${params.keyword}`)
    const searchAnime = await response.json()

    return (
        <>
            <section>
                <Header title={`Search for ${params.keyword}`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    );
}

export default Page