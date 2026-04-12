import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    src: "/project/outsidein.jpg",
    alt: "看一下",
    title: "心理之夜",
    description:
      "結合心理學結合舞台劇的年度大型活動。在透過感性敘事引發觀眾對心靈議題的共鳴與反思。",
      href:"https://www.youtube.com/watch?v=w53gB4Unv0U",
      linkLable:"觀看心理之夜"
  },
  {
    src: "/project/spaceaccount.jpg",
    alt: "太空號",
    title: "太空號",
    description:
      "澳門初成立的網片群體，以簡單的故事帶出澳門目前的社會縮影。",
   
    href: "https://www.youtube.com/watch?v=8p31JneBhSg&t=5s",
    linkLabel: "觀看太空號",
  },
  {
    src: "/project/birthday.jpg",
    alt: "作品三預覽",
    title: "台灣心理學壽宴",
    description: "台灣心理學老師250壽宴。",
  },
] as const;

type Item = (typeof portfolioItems)[number];

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function PortfolioCard({ item }: { item: Item }) {
  const href = "href" in item ? item.href : undefined;
  const linkLabel = "linkLabel" in item ? item.linkLabel : "預覽";

  const shellClass =
    "Tanugo-font group relative flex flex-col overflow-hidden rounded-2xl border border-white/25 bg-white/65 shadow-xl shadow-slate-900/10 outline-none backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-white/55 hover:shadow-2xl hover:shadow-slate-900/25 focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:translate-y-0 active:scale-[1.01] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100";

  const inner = (
    <>
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/55 via-slate-950/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <span className="translate-y-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-950 opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {href ? linkLabel : "預覽"}
          </span>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 p-4 text-slate-800 transition-colors duration-300 group-hover:bg-white/80">
        <h2 className="text-lg font-semibold tracking-wide text-blue-950 transition-colors duration-300 group-hover:text-blue-900">
          {item.title}
        </h2>
        <p className="text-sm leading-relaxed text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
          {item.description}
        </p>
        {href ? (
          <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-blue-800 underline-offset-2 group-hover:underline">
            {linkLabel}
            <span aria-hidden>↗</span>
          </span>
        ) : null}
      </div>
    </>
  );

  if (href && isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${shellClass} cursor-pointer`}
        aria-label={`${item.title}（另開新分頁）`}
      >
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={`${shellClass} cursor-pointer`}>
        {inner}
      </Link>
    );
  }

  return (
    <article className={`${shellClass} cursor-default`} tabIndex={0}>
      {inner}
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center gap-10 overflow-y-auto rounded-2xl bg-[url('/background_right.jpg')] bg-cover bg-center p-6">
      <header className="Tanugo-font mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
          Portfolio
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-blue-950 md:text-4xl">
          作品集
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
          以下為代表性作品摘要
        </p>
      </header>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
