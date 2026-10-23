const hobbies = [
  {
    title: "水肺潛水",
    description: "來一起體驗水底的美吧-沖繩砂邊",
    youtubeUrl: "https://youtube.com/shorts/cY-C8T2uhw4?si=CpyGwNuOE02yMGKk",
    instagramUrl: "",
    src: "/hobby/diving.mp4",
    poster: "/me4.jpg",
  },
  {
    title: "登山",
    description: "用雙腿走遍世界每一個大自然，用高度欣賞不一樣的世界。",
    youtubeUrl: "https://youtube.com/shorts/MkSX5SkkFeo?si=CXmw3RL7rR3axLoG",
    instagramUrl: "",
    src: "/hobby/hiking.mp4",
    poster: "/hobby/hiking.jpg",
  },
  {
    title: "3d列印",
    description: "用科技結合手繪創作獨一無二的模型作品。",
    youtubeUrl: "",
    instagramUrl: "https://www.instagram.com/reel/DXcQfUoCTD2/?cplk=MWEyZmhuNms1dTZtcg==",
    src: "/hobby/crafting.mp4",
    poster: "/hobby/crafing.jpg",
  },
  {
    title: "調酒",
    description: "用一杯酒去感受味覺、視覺、觸覺、嗅覺的技巧。",
    youtubeUrl: "https://youtube.com/shorts/uSCv4xUQ_EY?si=Gq_LXNtMsq7jOZwD",
    instagramUrl: "",
    src: "/hobby/cocktails.mp4",
    poster: "/hobby/cocktails.jpg",
  },
] as const;

function youtubeIdFromUrl(url: string) {
  if (!url) return "";
  const result = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/,
  );
  return result?.[1] ?? "";
}

function instagramEmbedSrc(url: string) {
  if (!url) return "";
  const result = url.match(/instagram\.com\/(?:reel|p|tv)\/([A-Za-z0-9_-]+)/);
  return result?.[1]
    ? `https://www.instagram.com/reel/${result[1]}/embed`
    : "";
}

function HobbyPlayer({
  youtubeUrl,
  instagramUrl,
  src,
  poster,
  title,
}: {
  youtubeUrl: string;
  instagramUrl: string;
  src: string;
  poster: string;
  title: string;
}) {
  const youtubeId = youtubeIdFromUrl(youtubeUrl);
  const instagramSrc = instagramEmbedSrc(instagramUrl);
  const isPortrait = Boolean(instagramSrc || youtubeUrl.includes("/shorts/"));

  return (
    <div
      className={`relative w-full overflow-hidden bg-slate-900 ${
        isPortrait ? "aspect-9/16 max-h-[420px]" : "aspect-video"
      }`}
    >
      {youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : instagramSrc ? (
        <iframe
          src={instagramSrc}
          title={title}
          allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          你的瀏覽器不支援影片播放。
        </video>
      )}
    </div>
  );
}

export default function HobbyPage() {
  return (
    <div className="Tanugo-font flex min-h-[50vh] w-full flex-col items-center justify-start gap-8 overflow-y-auto rounded-2xl bg-[url('/background_right.jpg')] bg-cover bg-center p-4 sm:gap-10 sm:p-8 md:min-h-[70vh]">
      <header className="Tanugo-font mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
          Hobby
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-blue-950 md:text-4xl">
          興趣
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
          潛水、登山、3D 列印與調酒。
        </p>
      </header>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {hobbies.map((item) => (
          <article
            key={item.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/80 shadow-xl backdrop-blur-md"
          >
            <HobbyPlayer
              youtubeUrl={item.youtubeUrl}
              instagramUrl={item.instagramUrl}
              src={item.src}
              poster={item.poster}
              title={item.title}
            />
            <div className="flex flex-col gap-1 p-4">
              <h2 className="text-lg font-semibold text-blue-950">{item.title}</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
