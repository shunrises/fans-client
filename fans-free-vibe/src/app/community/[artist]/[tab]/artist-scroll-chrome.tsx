"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ArtistScrollChromeProps = {
  activeTab: string;
  artist: string;
  artistName: string;
  backIconUrl: string;
  tabLabels: Record<string, string>;
  tabs: readonly string[];
  topProfileUrl: string;
};

export function ArtistScrollChrome({
  activeTab,
  artist,
  artistName,
  backIconUrl,
  tabLabels,
  tabs,
  topProfileUrl,
}: ArtistScrollChromeProps) {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const updatePinnedState = () => {
      const hero = document.querySelector<HTMLElement>(".artist-v2-hero");
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
    <header className={`artist-v2-chrome ${isPinned ? "is-visible" : ""}`}>
      <div className="artist-shell artist-v2-topbar-inner">
        <button type="button" className="artist-v2-iconbtn" aria-label="go back">
          <img src={backIconUrl} alt="" aria-hidden="true" className="artist-v2-icon" />
        </button>
        <h1 className="artist-v2-title">{artistName}</h1>
        <div className="artist-v2-actions">
          <span className="artist-v2-profile">
            <img src={topProfileUrl} alt="" aria-hidden="true" />
          </span>
        </div>
      </div>

      <nav className="artist-shell artist-v2-tabs" aria-label="community tabs">
        {tabs.map((tabName) => (
          <Link
            key={tabName}
            href={`/community/${artist}/${tabName}`}
            className={`artist-v2-tab ${activeTab === tabName ? "is-active" : ""}`}
          >
            {tabLabels[tabName]}
          </Link>
        ))}
      </nav>
    </header>
  );
}
