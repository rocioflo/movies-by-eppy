type ActorCard = {
  image: string;
  name: string;
};

export default function ActorCard({ image, name }: ActorCard) {
  return (
    <div className="flex flex-col items-center m-2">
      <img
        src={image}
        alt={`${name}'s picture looking awesome`}
        className="rounded-full h-20 w-20"
      />
      <span className="text-xs whitespace-nowrap">{name}</span>
    </div>
  );
}
