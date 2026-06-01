"use client";

import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

type ArtistCommunityHeroProps = {
  artistName: string;
  backIconUrl: string;
  heroImageUrl: string;
  heroLogoUrl: string;
  topProfileUrl: string;
};

export function ArtistCommunityHero({
  artistName,
  backIconUrl,
  heroImageUrl,
  heroLogoUrl,
  topProfileUrl,
}: ArtistCommunityHeroProps) {
  const router = useRouter();

  return (
    <section
      data-artist-community-hero
      className="relative h-[min(658px,104.45vw)] overflow-hidden"
    >
      <img
        src={heroImageUrl}
        alt={artistName}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-hero-dim-top to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-hero-dim-bottom" />

      <header className="absolute inset-x-0 top-0 z-[3] text-white">
        <div className="mx-auto flex h-12 w-full max-w-[630px] items-center text-primary">
          <button
            type="button"
            className="grid h-[34px] w-[34px] place-items-center rounded-full border-0 bg-transparent text-lg text-inherit"
            aria-label="go back"
            onClick={() => {
              router.back();
            }}
          >
            <Image
              width={20}
              height={20}
              src={backIconUrl}
              alt="Back icon"
              aria-hidden="true"
            />
          </button>
          <div className="ml-auto flex items-center gap-0.5">
            <span className="mr-2.5 ml-1.5 h-6 w-6 overflow-hidden rounded-full border border-white/45 bg-white/20">
              <img
                className="h-full w-full object-cover"
                src={topProfileUrl}
                alt=""
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </header>

      <div className="absolute bottom-8 left-1/2 z-[2] w-full max-w-[630px] -translate-x-1/2 text-center text-white">
        <div className="flex w-full flex-col items-center">
          <img
            src={heroLogoUrl}
            alt=""
            className="h-[66px] w-[230px] object-cover"
          />
          <div className="mt-[18px] flex items-center justify-center gap-6">
            <span className="inline-block h-2.5 w-2.5 rounded-full border border-white/40 bg-transparent" />
            <span className="inline-block h-2.5 w-2.5 rounded-full border border-white/40 bg-transparent" />
            <span className="inline-block h-2.5 w-2.5 rounded-full border border-white/40 bg-transparent" />
            <span className="ml-2 rounded-full border border-white/40 bg-black/30 px-[7px] py-0.5 text-[13px] backdrop-blur">
              +2
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
