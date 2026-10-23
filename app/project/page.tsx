import Image from "next/image";
import Link from "next/link";

type Project = {
  category: string;
  title: string;
  description: string;
  tags: readonly string[];
  href?: string;
  linkLabel?: string;
} & (
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "short";
      videoUrl: string; // 統一名稱，兼具 YouTube 與 Instagram
      youtubeUrl?: string; // 保持向後相容
    }
);

const projects: readonly Project[] = [
  // 第一行
  {
    type: "image",
    src: "/project/glass.png",
    alt: "玻璃心人格分析預覽",
    category: "網頁與互動",
    title: "玻璃心人格分析",
    description:
      "本研究透過「玻璃心量表」評估受試者在心理韌性與挫折耐受度上的表現。",
    tags: ["人格特質測量", "情緒韌性分析", "心理計量與評估"],
    href: "https://forms.gle/y7cngVNCDKiGXrPc8",
    linkLabel: "前往玻璃心量表",
  },
  {
    type: "image",
    src: "/project/breezy222.jpg",
    alt: "Breezy 產品設計預覽",
    category: "使用者經驗",
    title: "Breezy",
    description:
      "整合「智能行事曆、階層式通訊、雲端檔案永存」三大核心功能，專為追求極簡管理與高效溝通的你而生。",
    tags: ["UI 排版", "產品架構設計"],
    href: "https://breezy2025.framer.website/",
    linkLabel: "前往 Breezy",
  },
  {
    type: "image",
    src: "/project/outlook.jpg",
    alt: "外貌吸引力與面試研究預覽",
    category: "人事心理學",
    title: "外表吸引 & 面試",
    description: "本研究探討「外貌吸引力」在招募面試中的影響力。",
    tags: ["社會認知與偏見", "人事選才心理學"],
  },

  // 第二行：替換成你的 Shorts 網址與介紹
// 第二行
{
  type: "short",
  videoUrl: "https://youtube.com/shorts/-3iO75cCLcY?si=Gz59KneiK6IxRhzb",
  category: "組織心理學",
  title: "什麼是組織心理學",
  description: "用簡單幽默方式介紹組織心理學",
  tags: ["輕快劇場", "短影音剪輯"],
},
{
  type: "short",
  videoUrl: "https://www.instagram.com/reel/DJwU-0vvuZz/?dlrf=djlnaW5oazgxOGNv",
  category: "心理之夜",
  title: "Out Psy in 心理之夜",
  description: "「我們不是站在台前，但每一場精彩都由我們默默撐起。」",
  tags: ["專案成果", "舞台劇"],
},
  {
    type: "short",
    // 放入你的 Instagram Reels 網址
    videoUrl: "https://www.instagram.com/reel/DZ6TkuoJGXx/?utm_source=ig_web_copy_link",
    category: "More Dive",
    title: "More Dive",
    description: "一些小ig reels分享",
    tags: ["水肺潛水", "IG Reels"],
  },


];

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

// 判斷影片平台與取得 embed 資訊
function getVideoEmbedInfo(urlInput: string) {
  if (!urlInput?.trim()) return null;
  const rawUrl = urlInput.trim();

  try {
    const url = new URL(rawUrl);
    const hostname = url.hostname.toLowerCase();

    // 1. 判斷是否為 Instagram (Reel 或 Post)
    if (hostname.includes("instagram.com")) {
      const segments = url.pathname.split("/").filter(Boolean);
      // 網址路徑如 /reel/DZ6TkuoJGXx/ 或 /p/DZ6TkuoJGXx/
      if (segments[0] === "reel" || segments[0] === "p") {
        const shortcode = segments[1];
        if (shortcode) {
          return {
            platform: "instagram" as const,
            embedUrl: `https://www.instagram.com/reel/${shortcode}/embed/`,
            watchUrl: `https://www.instagram.com/reel/${shortcode}/`,
            label: "在 Instagram 觀看",
          };
        }
      }
    }

    // 2. 判斷是否為 YouTube (Shorts, Watch, youtu.be)
    let ytId: string | null = null;
    if (hostname === "youtu.be") {
      ytId = url.pathname.split("/").filter(Boolean)[0] ?? null;
    } else if (["youtube.com", "www.youtube.com", "m.youtube.com"].includes(hostname)) {
      const segments = url.pathname.split("/").filter(Boolean);
      if (segments[0] === "shorts" || segments[0] === "embed") {
        ytId = segments[1] ?? null;
      } else if (url.pathname === "/watch") {
        ytId = url.searchParams.get("v");
      }
    }

    if (ytId && /^[A-Za-z0-9_-]{11}$/.test(ytId)) {
      return {
        platform: "youtube" as const,
        embedUrl: `https://www.youtube-nocookie.com/embed/${ytId}`,
        watchUrl: `https://www.youtube.com/shorts/${ytId}`,
        label: "在 YouTube 觀看",
      };
    }

    return null;
  } catch {
    return null;
  }
}

function ProjectCard({ item }: { item: Project }) {
  const videoInput =
    item.type === "short" ? item.videoUrl || item.youtubeUrl || "" : "";
  const videoInfo = item.type === "short" ? getVideoEmbedInfo(videoInput) : null;

  const href =
    item.href ?? (videoInfo ? videoInfo.watchUrl : undefined);

  const linkLabel =
    item.linkLabel ??
    (videoInfo ? videoInfo.label : item.type === "short" ? "觀看影片" : "了解更多");

  const shellClass =
    "Tanugo-font group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/85 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10";

  const focusClass =
    "outline-none focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:ring-offset-2";

  const details = (
    <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {item.category}
      </p>

      <h2 className="text-lg font-semibold leading-snug text-blue-950 md:text-xl">
        {item.title}
      </h2>

      <p className="text-sm leading-relaxed text-slate-600">
        {item.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );

  // 影片播放器 (支援 Shorts 與 Reels)
  if (item.type === "short") {
    return (
      <article className={shellClass}>
        <div className="bg-slate-950 px-4 py-4">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-xl bg-slate-900">
            {videoInfo ? (
              <iframe
                src={videoInfo.embedUrl}
                title={`${item.title} 播放器`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-white">
                <span aria-hidden="true" className="text-4xl">
                  ▶
                </span>
                <p className="text-sm font-medium">
                  {videoInput.trim()
                    ? "請檢查影片網址 (支援 YT Shorts / IG Reels)"
                    : "新增你的短影音網址"}
                </p>
                <p className="text-xs leading-relaxed text-slate-400">
                  可貼上 YouTube Shorts 或 Instagram Reels 連結
                </p>
              </div>
            )}
          </div>
        </div>

        {details}

        {href ? (
          <div className="px-5 pb-5 md:px-6 md:pb-6">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 rounded-sm text-sm font-medium text-blue-800 underline-offset-4 hover:underline ${focusClass}`}
              aria-label={`${item.title}：${linkLabel}（另開新分頁）`}
            >
              {linkLabel}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        ) : null}
      </article>
    );
  }

  // 圖片專案卡片
  const inner = (
    <>
      <div className="relative aspect-[4/3] min-h-[220px] w-full shrink-0 overflow-hidden bg-slate-100 md:min-h-[240px]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          priority={item.src.includes("glass") || item.src.includes("Night")}
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-80"
          aria-hidden="true"
        />

        {href ? (
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="translate-y-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold tracking-wider text-blue-950 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              {linkLabel}
            </span>
          </div>
        ) : null}
      </div>

      {details}

      {href ? (
        <p className="px-5 pb-5 text-xs font-medium text-blue-800 underline-offset-2 group-hover:underline md:px-6 md:pb-6">
          {linkLabel}
          <span aria-hidden="true"> ↗</span>
        </p>
      ) : null}
    </>
  );

  if (href && isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${shellClass} cursor-pointer ${focusClass}`}
        aria-label={`${item.title}（另開新分頁）`}
      >
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`${shellClass} cursor-pointer ${focusClass}`}
      >
        {inner}
      </Link>
    );
  }

  return <article className={shellClass}>{inner}</article>;
}

export default function ProjectPage() {
  return (
    <div className="flex min-h-[50vh] w-full flex-col overflow-y-auto rounded-2xl bg-[url('/background_right.jpg')] bg-cover bg-center p-4 sm:p-6 md:min-h-[70vh] md:p-10">
      <header className="Tanugo-font mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
          Course work & films
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-blue-950 md:text-4xl">
          課程專案與影音作品
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
          以下為代表性課程成果與短影音創作
        </p>
      </header>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}