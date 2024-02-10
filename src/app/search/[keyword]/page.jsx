"use client"

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-fetch";

const Page = async ({ params }) => {
    const decodeTitle = decodeURI(params.keyword)
    const searchAnime = await getAnimeResponse('anime', `q=${decodeTitle}`)
    let count = 0
    searchAnime.data?.map(() => count += 1)
    return (
        <>
            <section>
                <Header title={`Founded ${count} result for ${decodeTitle}`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    );
}

export default Page