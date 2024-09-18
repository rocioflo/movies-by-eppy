type QuoteSection = {
  quote: string;
  author: string;
};

export default function QuoteSection({ quote, author }: QuoteSection) {
  return (
    <div>
      <blockquote className="text-balance max-w-80">{quote}</blockquote>
      <figcaption>{author}</figcaption>
    </div>
  );
}
