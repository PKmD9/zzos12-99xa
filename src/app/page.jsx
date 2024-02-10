import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnime } from "../libs/api-fetch";

// Membuat objek cache
const cache = { topAnime: null };

const getRandomIndices = (max) => {
  const indices = new Set();
  while (indices.size < 8) {
    indices.add(Math.floor(Math.random() * max));
  }
  return indices;
};

const fetchTopAnime = async () => {
  // Cek apakah data sudah tersedia di cache
  if (!cache.topAnime) {
    cache.topAnime = await getAnimeResponse("top/anime", "limit=8");
  }
  return cache.topAnime;
};

const Page = async () => {
  const topAnime = await fetchTopAnime();
  console.log(topAnime)
  const fullListRecommend = await getNestedAnime("recommendations/anime", "entry");
  const randomIndices = Array.from(getRandomIndices(fullListRecommend.length));
  // console.log(getRandomIndices(fullListRecommend.length))
  // console.log(Array.from(getRandomIndices(fullListRecommend.length)))
  // console.log(randomIndices.map(index => fullListRecommend[index]))
  const listRecommend = { data: randomIndices.map((index) => fullListRecommend[index]) };

  return (
    <>
      <section>
        <Header title="Most Popular" hrefLink="/popular" desc="See More" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommend" />
        <AnimeList api={listRecommend} />
      </section>
    </>
  );
}

export default Page;


// listRecommend = { data: shuffle(listRecommend).slice(0, 8) };
// // Function to shuffle an array (Fisher-Yates algorithm)
// function shuffle(array) {
//   let currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }