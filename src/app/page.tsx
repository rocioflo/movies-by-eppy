/* eslint-disable @next/next/no-img-element */
import ActorCard from "./components/ActorCard/ActorCard";
import { AnimatedTitle } from "./components/AnimatedTitle/AnimatedTitle";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";
import dameJulieAndrews from "../public/dameJulieAndrews.jpg";
import anneHathaway from "../public/anneHathaway.webp";
import mandyMoore from "../public/mandyMoore.jpg";
import hectorElizondo from "../public/hectorElizondo.webp";

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

        <QuoteSection
          quote="One of the most delightful and touching comedies to grace the big-screen in years."
          author="NY TIMES"
        />

        <div className="my-5">
          <SectionTitle titleName="ACTORS" />
          <div className="flex flex-wrap">
            <ActorCard name="Anne Hathaway" image={anneHathaway} />
            <ActorCard name="DAME JULIE ANDREWS" image={dameJulieAndrews} />
            <ActorCard name="Mandy Moore" image={mandyMoore} />
            <ActorCard name="Hector Elizondo" image={hectorElizondo} />
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
