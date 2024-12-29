import Image from 'next/image';

type AvatarProps = {
  alt: string;
  src?: string;
};
export default function Avatar({ src, alt }: AvatarProps) {
  if (src)
    return (
      <div className="relative h-10 w-10">
        <Image
          className="rounded-full bg-primary"
          src={src}
          alt={`${alt} avatar`}
          fill
          sizes="40px"
        />
      </div>
    );
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
      <p className="text-2xl font-medium uppercase">{alt.charAt(0)}</p>
    </div>
  );
}
