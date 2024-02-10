import { getAnimeResponse } from "@/libs/api-fetch"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const { data } = await getAnimeResponse(`anime/${id}`)
    return (
        <div>
            <div className="pt-4 px-4">
                <h3 className="text-2xl font-bold text-color-primary">{data.title} - {data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p -2">
                    <h3>Rank</h3>
                    <p>{data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p -2">
                    <h3>Score</h3>
                    <p>{data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p -2">
                    <h3>Popularity</h3>
                    <p>{data.popularity}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p -2">
                    <h3>Type</h3>
                    <p>{data.type}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p -2">
                    <h3>Status</h3>
                    <p>{data.status}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p -2">
                    <h3>Source</h3>
                    <p>{data.source}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p -2">
                    <h3>Episode</h3>
                    <p>{data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap text-color-primary">
                <Image src={data.images.webp.image_url} alt={data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover"/>
                <p className="text-justify">{data.synopsis}</p>
            </div>
        </div>
    )
}

export default Page