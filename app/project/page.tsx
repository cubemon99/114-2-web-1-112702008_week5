import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    src: "/project/glass.png",
    alt: "課程專案一預覽",
    category: "網頁與互動",
    title: "玻璃心人格分析",
    description:
      "本研究透過「玻璃心量表」評估受試者在心理韌性與挫折耐受度上的表現。",
    tags: ["人格特質測量", "情緒韌性分析", "心理計量與評估"],
    href: "https://forms.gle/y7cngVNCDKiGXrPc8",
    linkLabel: "前往玻璃心量表",
  },
  {
    src: "/project/breezy222.jpg",
    alt: "課程專案二預覽",
    category: "使用者經驗",
    title: "Breezy",
    description:
      "整合「智能行事曆、階層式通訊、雲端檔案永存」三大核心功能，專為追求極簡管理與高效溝通的你而生。",
    tags: ["UI 排版", "產品架構設計"],
     href: "https://breezy2025.framer.website/",
    linkLabel: "breezy",
  },
  {
    src: "/project/outlook.jpg",
    alt: "課程專案三預覽",
    category: "人事心理學",
    title: "外表吸引&面試",
    description: "本研究探討「外貌吸引力」在招募面試中的影響力。",
    tags: ["社會認知與偏見", "人事選才心理學"],
  },
] as const;

type Project = (typeof projects)[number];

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function ProjectCard({ item }: { item: Project }) {
  const href = "href" in item ? item.href : undefined;
  const linkLabel =
    "linkLabel" in item ? item.linkLabel : "了解更多";

  const shellClass =
    "Tanugo-font group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/85 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10";

  const inner = (
    <>
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/35 via-transparent to-transparent opacity-80"
          aria-hidden
        />
        {href ? (
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <span className="translate-y-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-950 opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {linkLabel}
            </span>
          </div>
        ) : null}
      </div>

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
        {href ? (
          <p className="text-xs font-medium text-blue-800 underline-offset-2 group-hover:underline">
            {linkLabel}
            <span aria-hidden> ↗</span>
          </p>
        ) : null}
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
    </>
  );

  if (href && isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${shellClass} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:ring-offset-2`}
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
        className={`${shellClass} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:ring-offset-2`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <article className={shellClass} tabIndex={0}>
      {inner}
    </article>
  );
}

export default function ProjectPage() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col overflow-y-auto rounded-2xl bg-[url('/background_right.jpg')] bg-cover bg-center p-6 md:p-10">
      <header className="Tanugo-font mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
          Course work
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-blue-950 md:text-4xl">
          課程專案
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
          以下為代表性課程成果摘要
        </p>
      </header>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
        {projects.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
