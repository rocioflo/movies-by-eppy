import Image, { StaticImageData } from "next/image";

type ActorCard = {
  image: StaticImageData;
  name: string;
};

export default function ActorCard({ image, name }: ActorCard) {
  return (
    <div className="flex flex-col justify-center items-center m-2">
      <Image
        alt={`${name}'s picture looking awesome`}
        src={image}
        className="rounded-full h-20 w-20"
      />
      <span className="text-xs whitespace-nowrap">{name}</span>
    </div>
  );
}
