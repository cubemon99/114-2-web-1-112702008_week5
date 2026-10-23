import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    src: "/project/outsidein.jpg",
    alt: "看一下",
    title: "心理之夜",
    description:
      "結合心理學結合舞台劇的年度大型活動。在透過感性敘事引發觀眾對心靈議題的共鳴與反思。",
    href: "https://www.youtube.com/watch?v=w53gB4Unv0U",
    linkLabel: "觀看心理之夜",
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

    href: "https://www.facebook.com/shyhnan.liou/posts/%E5%8F%B0%E5%A4%A7%E5%BF%83%E7%90%86%E7%B3%BB250%E5%A3%BD%E5%AE%B4%E5%8F%B0%E5%A4%A7%E5%BF%83%E7%90%86%E7%B3%BB%E8%8E%8A%E4%BB%B2%E4%BB%81%E6%95%99%E6%8E%8890%E9%BB%83%E6%A6%AE%E6%9D%91%E6%95%99%E6%8E%88%E8%88%87%E5%90%B3%E8%8B%B1%E7%92%8B%E6%95%99%E6%8E%88%E7%9A%8680%E5%90%88%E8%B5%B7%E4%BE%86250%E6%9D%BE%E5%A3%BD%E8%81%AF%E5%90%88%E6%85%B6%E7%94%9F%E6%95%B8%E7%99%BE%E5%B8%AB%E7%94%9F%E8%88%87%E5%AE%B6%E4%BA%BA%E6%AD%A1%E5%96%9C%E7%A5%9D%E8%B3%80-%E5%A4%A7%E5%AD%B8%E7%9A%84%E5%95%9F%E8%92%99%E4%B8%89%E4%BD%8D%E8%80%81%E5%B8%AB%E7%A2%BA%E5%AF%A6%E6%98%AF%E5%9C%A8%E6%88%91%E5%A4%A7%E5%AD%B8%E7%9A%84%E6%99%82%E5%80%99%E5%BE%88/27111953795056185/",
    linkLabel: "壽宴FB連結",
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
          <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-950 shadow-md md:translate-y-2 md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
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
    <div className="flex min-h-[50vh] w-full flex-col items-center gap-6 overflow-y-auto rounded-2xl bg-[url('/background_right.jpg')] bg-cover bg-center p-4 sm:gap-10 sm:p-6 md:min-h-[70vh]">
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
