type QuoteSection = {
  quote: string;
  author: string;
};

export default function QuoteSection({ quote, author }: QuoteSection) {
  return (
    <div>
      <blockquote>{quote}</blockquote>
      <figcaption>{author}</figcaption>
    </div>
  );
}
