import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-8 md:gap-4 sm:gap-2 gap-1 md:px-4 px-2">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`}
                        className="text-color-primary hover:text-color-accent transition-all"
                        key={index}
                    >
                        <Image
                            src={anime.images.webp.image_url}
                            alt={anime.images.jpg.image_url}
                            width={350}
                            height={700}
                            fetchPriority="high"
                            priority
                            decoding="async"
                            data-nimg="1"
                            className="w-full h-full object-cover rounded max-h-64"
                        />
                        <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList