import Link from "next/link";
import { ArtistScrollChrome } from "./artist-scroll-chrome";

const tabs = ["artist", "fan", "live", "media", "notice", "event"] as const;
const heroImageUrl =
  "https://www.figma.com/api/mcp/asset/a8d5bf24-fdcb-4c09-a1ec-cb2d2a06e3b4";
const heroLogoUrl =
  "https://www.figma.com/api/mcp/asset/3b9f8922-af67-44e8-825e-7251da301454";
const backIconUrl =
  "https://www.figma.com/api/mcp/asset/ea593c81-5d4b-40f4-8a5a-e00c29e92f2d";
const topProfileUrl =
  "https://www.figma.com/api/mcp/asset/91b39fc1-30c0-4db3-8914-84f399bfa896";
const defaultMemberIconUrl =
  "https://www.figma.com/api/mcp/asset/d285abd7-692c-488f-8bd2-e54533a6b474";
const verifiedIconUrl =
  "https://www.figma.com/api/mcp/asset/ed11513a-6ca7-48c4-825f-63787f77e2a4";
const onlyIconUrl =
  "https://www.figma.com/api/mcp/asset/86b18cf6-87b6-4d77-840a-3bf9e320a4dd";
const translateIconUrl =
  "https://www.figma.com/api/mcp/asset/338d7d6c-34df-4a77-8718-2149076edffd";
const likeIconUrl =
  "https://www.figma.com/api/mcp/asset/f0ca00d1-e4f7-4b12-98e3-dd973fc96b21";
const commentIconUrl =
  "https://www.figma.com/api/mcp/asset/49da537d-47ba-485a-ad75-75b5eb48eef0";
const moreIconUrl =
  "https://www.figma.com/api/mcp/asset/4ead5d84-e6fa-4dc4-81fc-5cba808c20c1";
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
const members = [
  {
    name: "필릭스",
    image:
      "https://www.figma.com/api/mcp/asset/6b45bd37-557b-4fbb-ab45-52c2801d03e2",
  },
  {
    name: "현진",
    image:
      "https://www.figma.com/api/mcp/asset/338923ac-824c-45cf-ae5c-33ebd7accda2",
  },
  { name: "승민", image: defaultMemberIconUrl },
  {
    name: "한",
    image:
      "https://www.figma.com/api/mcp/asset/34a02dca-f8f7-4efb-a413-419b4e7768ba",
  },
  {
    name: "방찬",
    image:
      "https://www.figma.com/api/mcp/asset/b009cfc3-fffb-43a9-a18b-48d6cd7a0232",
  },
  {
    name: "리노",
    image:
      "https://www.figma.com/api/mcp/asset/b2e75957-d284-4d8a-9de8-1d8c0b791ced",
  },
  {
    name: "아이엔",
    image:
      "https://www.figma.com/api/mcp/asset/24c99c33-f720-4089-9676-3c85d61b7629",
  },
  {
    name: "창빈",
    image:
      "https://www.figma.com/api/mcp/asset/fbc2e5f3-fc03-4279-b774-fc845e42e4a7",
  },
];

const liveCards = [
  {
    title: "마지막",
    author: "LEE KNOW",
    image:
      "https://www.figma.com/api/mcp/asset/5b41f616-84ed-406c-bddf-80c3b1837322",
  },
  {
    title: "밸겜3",
    author: "LEE KNOW",
    image:
      "https://www.figma.com/api/mcp/asset/5b41f616-84ed-406c-bddf-80c3b1837322",
  },
  {
    title: "밸겜2",
    author: "LEE KNOW",
    image:
      "https://www.figma.com/api/mcp/asset/5b41f616-84ed-406c-bddf-80c3b1837322",
  },
  {
    title: "밸런스게임",
    author: "LEE KNOW",
    image:
      "https://www.figma.com/api/mcp/asset/5b41f616-84ed-406c-bddf-80c3b1837322",
  },
  {
    title: "8강 라운드 3",
    author: "BANG CHAN",
    image:
      "https://www.figma.com/api/mcp/asset/d4638a7d-2b33-41b5-af47-1fdea844315b",
  },
];

const posts = [
  {
    author: "I.N",
    body: "오늘은 여기까지 ㅎㅎㅎ",
    likes: "5.9K",
    comments: "673",
  },
  {
    author: "I.N",
    body: "오늘은 여기까지 ㅎㅎㅎ",
    likes: "5.9K",
    comments: "673",
  },
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
      <ArtistScrollChrome
        activeTab={activeTab}
        artist={artist}
        artistName={artistName}
        backIconUrl={backIconUrl}
        tabLabels={tabLabels}
        tabs={tabs}
        topProfileUrl={topProfileUrl}
      />

      <section className="artist-v2-hero">
        <img
          src={heroImageUrl}
          alt={artistName}
          className="artist-v2-hero-image"
        />
        <div className="artist-v2-hero-topfade" />
        <div className="artist-v2-hero-bottomfade" />

        <header className="artist-v2-hero-topbar">
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
            <div className="artist-v2-actions">
              <span className="artist-v2-profile">
                <img src={topProfileUrl} alt="" aria-hidden="true" />
              </span>
            </div>
          </div>
        </header>

        <div className="artist-shell artist-v2-hero-logo-wrap">
          <div className="w-full flex flex-col items-center">
            <img src={heroLogoUrl} alt="" className="artist-v2-hero-logo" />
            <div className="artist-v2-hero-dots">
              <span className="artist-v2-dot" />
              <span className="artist-v2-dot" />
              <span className="artist-v2-dot" />
              <span>+2</span>
            </div>
          </div>
        </div>
      </section>

      <nav
        className="artist-shell artist-v2-tabs artist-v2-tabs-inline"
        aria-label="community tabs"
      >
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

      <section
        className="artist-shell artist-v2-members-wrap"
        aria-label="members"
      >
        <div className="artist-v2-members-row">
          {members.map((member) => (
            <span key={member.name} className="artist-v2-member-card">
              <span className="artist-v2-member">
                <img src={member.image} alt="" aria-hidden="true" />
              </span>
              <span className="artist-v2-member-name">{member.name}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="artist-shell artist-v2-from" aria-label="from artist">
        <h2 className="artist-v2-section-title">From. {artistName}</h2>
        <div className="artist-v2-live-row">
          {liveCards.map((card) => (
            <article
              key={`${card.author}-${card.title}`}
              className="artist-v2-live-card"
            >
              <div className="artist-v2-live-head">
                <span className="artist-v2-live-state">
                  <span aria-hidden="true" />
                  종료
                </span>
                <time className="artist-v2-live-time">00:00</time>
              </div>
              <p className="artist-v2-live-title">{card.title}</p>
              <div className="artist-v2-live-author">
                <img src={card.image} alt="" aria-hidden="true" />
                <strong>{card.author}</strong>
                <img src={verifiedIconUrl} alt="" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="artist-shell artist-v2-feed"
        aria-label="artist posts"
      >
        {posts.map((post, index) => (
          <article key={`${post.author}-${index}`} className="artist-v2-post">
            <header className="artist-v2-post-header">
              <div className="artist-v2-post-author-row">
                <img
                  className="artist-v2-post-avatar"
                  src="https://www.figma.com/api/mcp/asset/89dd69a0-3835-4809-8f2a-d12711221853"
                  alt=""
                  aria-hidden="true"
                />
                <div className="artist-v2-post-author-meta">
                  <div className="artist-v2-post-name">
                    <strong>{post.author}</strong>
                    <img src={verifiedIconUrl} alt="" aria-hidden="true" />
                  </div>
                  <div className="artist-v2-post-submeta">
                    <span>한 달 전</span>
                    <span className="artist-v2-only">
                      <img src={onlyIconUrl} alt="" aria-hidden="true" />
                      ONLY
                    </span>
                  </div>
                </div>
              </div>
              <img
                className="artist-v2-translate"
                src={translateIconUrl}
                alt=""
                aria-hidden="true"
              />
            </header>
            <div className="artist-v2-post-bubble">
              <p>{post.body}</p>
              <footer className="artist-v2-post-actions">
                <span>
                  <img src={likeIconUrl} alt="" aria-hidden="true" />
                  {post.likes}
                </span>
                <span>
                  <img src={commentIconUrl} alt="" aria-hidden="true" />
                  {post.comments}
                </span>
                <button type="button" aria-label="more">
                  <img src={moreIconUrl} alt="" aria-hidden="true" />
                </button>
              </footer>
            </div>
          </article>
        ))}
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
