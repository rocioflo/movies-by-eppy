/* eslint-disable @next/next/no-img-element */
import ActorCard from "./components/ActorCard/ActorCard";
import { AnimatedTitle } from "./components/AnimatedTitle/AnimatedTitle";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <>
      <AnimatedTitle />
      <div className="h-28 bg-[#340100]"></div>
      <div className="grid grid-cols-2 gap-x-40">
        <div>
          <img
            src="https://images.mubicdn.net/images/film/34125/cache-24248-1445880490/image-w1280.jpg?size=800x"
            alt="Movie pic"
          />
        </div>
        <div className="self-end pb-2">
          <SectionTitle titleName="SYNOPSIS" />
          <p className="text-balance leading-8 max-w-prose">
            A socially awkward but very bright 15-year-old girl being raised by
            a single mom discovers that she is the princess of a small European
            country because of the recent death of her long-absent father, who,
            unknown to her, was the crown prince of Genovia. She must make a
            choice between continuing the life of a San Francisco teen or
            stepping up to the throne.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <QuoteSection
            author="NY TIMES"
            quote="One of the most delightful and touching comedies to grace the big-screen in years."
          />
        </div>
        <div className="my-5">
          <SectionTitle titleName="ACTORS" />
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
          <SectionTitle titleName="MOVIE INFO" />
          <div className="grid grid-cols-2">
            <p className="whitespace-nowrap leading-8">Genre: Comedy</p>
            <p className="whitespace-nowrap leading-8">
              Director: Garry Marshall
            </p>
            <p className="leading-8">Duration: 114 minutes</p>
            <p className="leading-8">Studio: Walt Disney</p>
            <p className="leading-8">In Theaters: July 2001</p>
            <p className="leading-8">Box Office: $107,000,000</p>
          </div>
        </div>
      </div>
      <div>More images?</div>
    </>
  );
}
