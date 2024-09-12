/* eslint-disable @next/next/no-img-element */

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
      <main className="bg-[#946426]">
        <div className="h-8 bg-[#340100]"></div>
        <h1 className="text-6xl font-serif sticky z-10 mb-6">The Movie</h1>
        <div>
          Images
          <img
            src="https://images.mubicdn.net/images/film/34125/cache-24248-1445880490/image-w1280.jpg?size=800x"
            alt="Movie pic"
          />
        </div>
        <div>Quote</div>
        <div>Image</div>
        <div>SYNOPSIS</div>
        <div>Actors</div>
        <div>Movie Info</div>
        <div>More images</div>
      </main>
    </div>
  );
}
