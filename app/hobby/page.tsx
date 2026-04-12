import Image from "next/image";

const hobbies = [
  {
    src: "/hobby/hiking.jpg",
    alt: "興趣一",
    title: "登山",
    description: "用雙腿走遍世界每一個大自然，用高度欣賞不一樣的世界。",
  },
  {
    src: "/hobby/cocktails.jpg",
    alt: "興趣二",
    title: "調酒",
    description: "用一杯酒去感受味覺、視覺、觸覺、嗅覺的技巧。",
  },
  {
    src: "/hobby/crafing.jpg",
    alt: "興趣三",
    title: "3d列印",
    description: "用科技結合手繪創作獨一無二的模型作品。",
  },
] as const;

export default function HobbyPage() {
  return (
    <div
      className="Tanugo-font flex min-h-[70vh] w-full flex-col items-center justify-center gap-10 overflow-y-auto rounded-2xl bg-[url('/background_right.jpg')] bg-cover bg-center p-8"
    >
      <header className="Tanugo-font mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
          Hobby
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-blue-950 md:text-4xl">
          興趣
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
          以下為各種興趣
        </p>
      </header>

      <div className="flex w-full max-w-4xl flex-wrap items-start justify-center gap-12 md:gap-16">
        {hobbies.map((item) => (
          <article
            key={item.title}
            className="group flex w-[200px] flex-col items-center text-center md:w-[220px]"
          >
            <div className="relative flex min-h-[280px] flex-col items-center pt-2 md:min-h-[300px]">
              {/* Spinning disc — only the image rotates */}
              <div
                className="origin-center transition-[transform] duration-500 ease-out will-change-transform group-hover:z-20 group-hover:scale-[2.15] md:group-hover:scale-[2.05]"
              >
                <div
                  className="size-28 overflow-hidden rounded-full border-4 border-white shadow-xl ring-2 ring-white/40 md:size-32 animate-[spin_12s_linear_infinite] motion-reduce:animate-none"
                >
                  <div className="relative size-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                </div>
              </div>

              {/* Text draws out below on hover */}
              <div
                className="pointer-events-none absolute left-1/2 top-[7.5rem] z-10 w-[min(100vw-2rem,280px)] -translate-x-1/2 rounded-2xl border border-white/40 bg-white/90 px-4 py-3 text-slate-800 opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 ease-out group-hover:pointer-events-auto group-hover:top-[11.5rem] group-hover:opacity-100 md:top-[8.5rem] md:group-hover:top-[12.5rem]"
              >
                <h2 className="mb-1 text-lg font-semibold text-blue-950">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="max-w-md text-center text-xs text-slate-600">
        將滑鼠移到圓形圖片上，圖片會放大並顯示說明。
      </p>
    </div>
  );
}
