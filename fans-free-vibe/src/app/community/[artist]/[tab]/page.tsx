import Link from "next/link";

const tabs = ["artist", "fan", "live", "media", "notice", "event"] as const;
const heroImageUrl =
  "https://www.figma.com/api/mcp/asset/f149ab2e-da8f-47cd-a24e-eff143ca3485";
const heroLogoUrl =
  "https://www.figma.com/api/mcp/asset/3b9f8922-af67-44e8-825e-7251da301454";
const backIconUrl =
  "https://www.figma.com/api/mcp/asset/ea593c81-5d4b-40f4-8a5a-e00c29e92f2d";
const topSearchIconUrl =
  "https://www.figma.com/api/mcp/asset/1e90136c-e996-4e23-89a0-cf4df938616f";
const topAlarmIconUrl =
  "https://www.figma.com/api/mcp/asset/1f123e1d-f98c-49e5-92d3-683b6a9c2452";
const topProfileUrl =
  "https://www.figma.com/api/mcp/asset/91b39fc1-30c0-4db3-8914-84f399bfa896";
const bottomNavIcons = [
  "https://www.figma.com/api/mcp/asset/82772cbe-d3e0-4b78-a626-0f2295df9b01",
  "https://www.figma.com/api/mcp/asset/52d9b797-5d92-4be8-9512-4e56ab27106e",
  "https://www.figma.com/api/mcp/asset/dd93d1fc-e56b-4845-b8fa-7c4d1f1dc333",
  "https://www.figma.com/api/mcp/asset/cc4509d5-bfbb-485a-8b7f-2c322313b006",
] as const;

const tabLabels: Record<(typeof tabs)[number], string> = {
  artist: "아티스트",
  fan: "팬",
  live: "라이브",
  media: "미디어",
  notice: "공지",
  event: "이벤트",
};
const memberThumbs = [
  topProfileUrl,
  "https://www.figma.com/api/mcp/asset/f149ab2e-da8f-47cd-a24e-eff143ca3485",
  "https://www.figma.com/api/mcp/asset/91b39fc1-30c0-4db3-8914-84f399bfa896",
  "https://www.figma.com/api/mcp/asset/f149ab2e-da8f-47cd-a24e-eff143ca3485",
  topProfileUrl,
  "https://www.figma.com/api/mcp/asset/91b39fc1-30c0-4db3-8914-84f399bfa896",
];

function formatArtistName(slug: string) {
  if (slug === "StrayKids") return "Stray Kids";
  return slug;
}

export default async function ArtistTabPage({
  params,
}: {
  params: Promise<{ artist: string; tab: string }>;
}) {
  const { artist, tab } = await params;
  const activeTab = tabs.includes(tab as (typeof tabs)[number])
    ? (tab as (typeof tabs)[number])
    : "artist";
  const artistName = formatArtistName(artist);

  return (
    <div className="artist-v2-page">
      <section className="artist-v2-hero">
        <img
          src={heroImageUrl}
          alt={artistName}
          className="artist-v2-hero-image"
        />
        <div className="artist-v2-hero-topfade" />
        <div className="artist-v2-hero-bottomfade" />

        <header className="artist-v2-topbar">
          <div className="artist-shell artist-v2-topbar-inner">
            <button
              type="button"
              className="artist-v2-iconbtn"
              aria-label="go back"
            >
              <img
                src={backIconUrl}
                alt=""
                aria-hidden="true"
                className="artist-v2-icon"
              />
            </button>
            <h1 className="artist-v2-title">{artistName}</h1>
            <div className="artist-v2-actions">
              <button
                type="button"
                className="artist-v2-iconbtn"
                aria-label="search"
              >
                <img
                  src={topSearchIconUrl}
                  alt=""
                  aria-hidden="true"
                  className="artist-v2-icon"
                />
              </button>
              <button
                type="button"
                className="artist-v2-iconbtn"
                aria-label="alarm"
              >
                <img
                  src={topAlarmIconUrl}
                  alt=""
                  aria-hidden="true"
                  className="artist-v2-icon"
                />
              </button>
              <span className="artist-v2-profile">
                <img src={topProfileUrl} alt="" aria-hidden="true" />
              </span>
            </div>
          </div>
        </header>

        <div className="artist-shell artist-v2-hero-logo-wrap">
          <img src={heroLogoUrl} alt="" className="artist-v2-hero-logo" />
          <div className="artist-v2-hero-dots">
            <span className="artist-v2-dot" />
            <span className="artist-v2-dot" />
            <span className="artist-v2-dot" />
            <span>+2</span>
          </div>
        </div>
      </section>

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

      <section className="artist-shell artist-v2-members-wrap" aria-label="members">
        <div className="artist-v2-members-row">
          {memberThumbs.map((thumb, index) => (
            <span key={`${thumb}-${index}`} className="artist-v2-member">
              <img src={thumb} alt="" aria-hidden="true" />
            </span>
          ))}
        </div>
        <button type="button" className="artist-v2-fab" aria-label="add">
          +
        </button>
      </section>

      <nav className="fans-bottombar" aria-label="Bottom navigation">
        <div className="fans-shell fans-navrow">
          {bottomNavIcons.map((iconUrl, index) => (
            <button
              key={iconUrl}
              type="button"
              className="fans-navbtn"
              aria-label={`Tab ${index + 1}`}
            >
              <img src={iconUrl} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
