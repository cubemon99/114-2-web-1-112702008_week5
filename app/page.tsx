import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[52vh] min-h-[280px] w-full rounded-2xl bg-white p-2 sm:h-[60vh] sm:p-3 md:h-[90%]">
      <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-2xl">
        <Image
          src="/me4.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
        />
        <div className="relative z-10 flex min-h-[56px] w-full items-center justify-center bg-black/15 px-4 py-3 text-center text-sm text-white backdrop-blur-sm sm:min-h-[80px] sm:text-base">
          氣瓶很重什麼時候準備下潛
        </div>
      </div>
    </div>
  );
}
