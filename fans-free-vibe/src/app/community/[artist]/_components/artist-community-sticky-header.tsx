"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ArtistCommunityStickyHeaderProps = {
  activeTab: string;
  artist: string;
  artistName: string;
  backIconUrl: string;
  tabLabels: Record<string, string>;
  tabs: readonly string[];
  topProfileUrl: string;
};

export function ArtistCommunityStickyHeader({
  activeTab,
  artist,
  artistName,
  backIconUrl,
  tabLabels,
  tabs,
  topProfileUrl,
}: ArtistCommunityStickyHeaderProps) {
  const [isPinned, setIsPinned] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const updatePinnedState = () => {
      const hero = document.querySelector<HTMLElement>(
        "[data-artist-community-hero]",
      );
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setIsPinned(window.scrollY >= heroBottom - 1);
    };

    updatePinnedState();
    window.addEventListener("scroll", updatePinnedState, { passive: true });
    window.addEventListener("resize", updatePinnedState);

    return () => {
      window.removeEventListener("scroll", updatePinnedState);
      window.removeEventListener("resize", updatePinnedState);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 z-30 w-[min(100%,630px)] bg-glass-strong backdrop-blur-lg backdrop-saturate-[1.12] transition-[opacity,transform] duration-150 ease-out ${
        isPinned
          ? "-translate-x-1/2 translate-y-0 opacity-100"
          : "pointer-events-none -translate-x-1/2 -translate-y-2 opacity-0"
      }`}
    >
      <div className="mx-auto flex h-12 w-full max-w-[630px] items-center text-primary">
        <button
          type="button"
          className="grid h-[34px] w-[34px] place-items-center rounded-full cursor-pointer border-0 bg-transparent text-lg text-inherit"
          aria-label="go back"
          onClick={() => {
            router.back();
          }}
        >
          <img
            src={backIconUrl}
            alt=""
            aria-hidden="true"
            className="block h-5 w-5 brightness-0"
          />
        </button>
        <h1 className="m-0 text-lg leading-[1.2] font-semibold tracking-[-0.2px]">
          {artistName}
        </h1>
        <div className="ml-auto flex items-center gap-0.5">
          <span className="mr-2.5 ml-1.5 h-6 w-6 overflow-hidden rounded-full border border-img-line bg-sub-container">
            <img
              className="h-full w-full object-cover"
              src={topProfileUrl}
              alt=""
              aria-hidden="true"
            />
          </span>
        </div>
      </div>

      <nav
        className="mx-auto flex h-[38px] w-full max-w-[630px] overflow-x-auto border-b border-glass-border px-1.5 scrollbar-none [&::-webkit-scrollbar]:hidden"
        aria-label="community tabs"
      >
        {tabs.map((tabName) => (
          <Link
            key={tabName}
            href={`/community/${artist}/${tabName}`}
            className={`flex items-start whitespace-nowrap border-b-2 px-2.5 pt-2.5 text-[11px] leading-none tracking-normal no-underline ${
              activeTab === tabName
                ? "border-tab-active font-medium text-tab-active"
                : "border-transparent text-tab-off"
            }`}
          >
            {tabLabels[tabName]}
          </Link>
        ))}
      </nav>
    </header>
  );
}
