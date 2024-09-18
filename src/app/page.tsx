/* eslint-disable @next/next/no-img-element */
import ActorCard from "./components/ActorCard/ActorCard";
import QuoteSection from "./components/QuoteSection/QuoteSection";

export default function Home() {
  return (
    <div className="font-sans text-white h-full">
      <header className="bg-[#340100] p-8">
        <nav>
          <ul className="flex flex-row gap-10">
            <li>MOVIES</li>
            <li>ACTORS</li>
            <li>RATINGS</li>
            <li>BROWSE</li>
          </ul>
        </nav>
      </header>
      <main className="bg-[#946426] h-full">
        <div className="absolute grid grid-cols-[2.5fr,_1fr] grid-rows-[1fr,_4fr] w-full">
          <p className="justify-self-end text-2xl">2001</p>
          <img
            src="https://miro.medium.com/v2/resize:fit:780/1*AdDznm7hA6w5s92Hxdz3KQ.jpeg"
            alt="Movie pic"
            className="h-40 justify-self-end row-span-2"
          />
          <h1 className="text-6xl font-extrabold font-serif z-10 mb-6 col-start-1 justify-self-end">
            The Princess Diaries
          </h1>
        </div>
        <div className="h-16 bg-[#340100]"></div>
        <div className="grid grid-cols-2 gap-x-40">
          <div>
            <img
              src="https://images.mubicdn.net/images/film/34125/cache-24248-1445880490/image-w1280.jpg?size=800x"
              alt="Movie pic"
            />
          </div>
          <div className="mt-24">
            <h2 className="font-semibold">SYNOPSIS</h2>
            <hr />
            <p>
              The plot follows Mia Thermopolis (Hathaway), a shy American
              teenager who discovers she is heir to throne of a European
              kingdom. Under the tutelage of her estranged grandmother
              (Andrews), the kingdom&apos;s reigning queen, Mia must choose
              whether to claim or renounce the title she has inherited.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <QuoteSection
              author="NY TIMES"
              quote="One of the most delightful and touching comedies to grace the big-screen in years."
            />
          </div>
          <div className="my-5">
            <h2 className="font-semibold">ACTORS</h2>
            <hr />
            <div className="flex flex-wrap">
              <ActorCard
                name="Anne Hathaway"
                image="https://cdn.britannica.com/49/258149-050-767F0B62/Anne-Hathaway-SXSW-Conference.jpg"
              />
              <ActorCard
                name="DAME JULIE ANDREWS"
                image="https://media.glamour.com/photos/5d94db112545d70008fe9ab4/4:3/w_2232,h_1674,c_limit/Andrews.Julie.approved-2.jpg"
              />
              <ActorCard
                name="Mandy Moore"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mandy_Moore_at_SXSW_2018_%2825904503147%29_%28cropped%29.jpg/220px-Mandy_Moore_at_SXSW_2018_%2825904503147%29_%28cropped%29.jpg"
              />
              <ActorCard
                name="Hector Elizondo"
                image="https://m.media-amazon.com/images/M/MV5BMTAxMDEzMTE4MDFeQTJeQWpwZ15BbWU3MDk3ODU3MTM@._V1_FMjpg_UX1000_.jpg"
              />
            </div>
          </div>
          <div className="col-start-2">
            <h2 className="font-semibold">MOVIE INFO</h2>
            <hr />
            <div className="grid grid-cols-2">
              <p className="text-xs whitespace-nowrap">Genre: Comedy</p>
              <p className="text-xs whitespace-nowrap">
                Director: Garry Marshall
              </p>
              <p className="text-xs">Duration: 114 minutes</p>
              <p className="text-xs">Studio: Walt Disney</p>
              <p className="text-xs">In Theaters: July 2001</p>
              <p className="text-xs">Box Office: $107,000,000</p>
            </div>
          </div>
        </div>
        <div>More images</div>
      </main>
    </div>
  );
}
