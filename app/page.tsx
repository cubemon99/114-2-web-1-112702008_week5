import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[90%] w-full rounded-2xl bg-white p-3">
        <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-2xl pb-10">
          <Image
            src="/me4.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
          <div
            className="relative z-10 flex h-[80px] w-full items-center justify-center bg-black/15 text-white backdrop-blur-sm"
          >
            這裏沒東西賣
          </div>
        </div>
      </div>
    </>
  );
}
