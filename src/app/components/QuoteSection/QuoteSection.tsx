import "./QuoteSection.styles.css";

type QuoteSection = {
  quote: string;
  author: string;
};

export default function QuoteSection({ quote, author }: QuoteSection) {
  return (
    <div id="quoteSectionContainer">
      <blockquote className="text-balance leading-8 text-lg ">
        {quote}
      </blockquote>
      <div className="flex gap-2">
        <figcaption className="font-bold text-slate-50/30">
          - {author}
        </figcaption>
        <p>.....</p>
      </div>
    </div>
  );
}
