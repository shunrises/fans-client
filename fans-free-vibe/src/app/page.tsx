import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import dimOverlay from "@/assets/images/dim.png";
import twopm from "@/assets/images/2pm.png";
import day6 from "@/assets/images/day6.jpg";
import girlSet from "@/assets/images/girlset.png";
import kickFlip from "@/assets/images/kickflip.png";
import nexz from "@/assets/images/nexz.png";
import niziu from "@/assets/images/niziu.png";
import strayKids from "@/assets/images/straykids.png";
import twice from "@/assets/images/twice.png";
import xdinaryHeroes from "@/assets/images/xd.jpg";
import itzy from "@/assets/images/itzy.png";
import nmixx from "@/assets/images/nmixx.png";

function buildCommunityUrl(artistSlug: string) {
  return `/community/${artistSlug}/artist`;
}

const cards = [
  {
    title: "Stray Kids",
    slug: "StrayKids",
    image: strayKids,
  },
  {
    title: "KickFlip",
    slug: "KickFlip",
    image: kickFlip,
  },
  {
    title: "Xdinary Heroes",
    slug: "XdinaryHeroes",
    image: xdinaryHeroes,
  },
  {
    title: "DAY6",
    slug: "DAY6",
    image: day6,
  },
  {
    title: "TWICE",
    slug: "TWICE",
    image: twice,
  },
  {
    title: "NEXZ",
    slug: "NEXZ",
    image: nexz,
  },
  {
    title: "ITZY",
    slug: "ITZY",
    image: itzy,
  },
  {
    title: "NMIXX",
    slug: "NMIXX",
    image: nmixx,
  },
  {
    title: "GIRLSET",
    slug: "GIRLSET",
    image: girlSet,
  },
  {
    title: "NiziU",
    slug: "NiziU",
    image: niziu,
  },
  {
    title: "2PM",
    slug: "2PM",
    image: twopm,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen isolate bg-bg">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-transparent bg-glass backdrop-blur-[16px] backdrop-saturate-[1.15] transform-gpu">
        <div className="mx-auto w-full max-w-[630px]">
          <Image className="h-20 w-auto" height={80} src={logo} alt="Fans" />
        </div>
      </header>

      <main className="pt-[80px] pb-[calc(50px+env(safe-area-inset-bottom))]">
        <div className="mx-auto w-full max-w-[630px]">
          <section
            className="grid grid-cols-2 gap-px bg-glass-border min-[631px]:grid-cols-3"
            aria-label="Artist grid"
          >
            {cards.map((card) => (
              <Link
                key={card.title}
                className="relative block aspect-square overflow-hidden bg-placeholder text-inherit no-underline"
                href={buildCommunityUrl(card.slug)}
              >
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  width={160}
                  height={160}
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                />
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  width={160}
                  height={160}
                  src={dimOverlay}
                  alt="Dim overlay"
                  aria-hidden="true"
                />
                <p className="absolute right-4 bottom-4 left-4 m-0 truncate text-[18px] leading-[1.278] font-semibold tracking-[-0.2px] text-white">
                  {card.title}
                </p>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
