import { ArtistCommunityHero } from "../_components/artist-community-hero";
import { ArtistCommunityStickyHeader } from "../_components/artist-community-sticky-header";
import { ArtistCommunityTabs } from "../_components/artist-community-tabs";
import { ArtistPostList } from "./_components/artist-post-list";
import { FromArtistSection } from "./_components/from-artist-section";
import { MemberList } from "./_components/member-list";
import chevronLeft from "@/assets/icons/chevron-left.svg";

const tabs = ["artist", "fan", "event"] as const;
const heroImageUrl =
  "https://www.figma.com/api/mcp/asset/a8d5bf24-fdcb-4c09-a1ec-cb2d2a06e3b4";
const heroLogoUrl =
  "https://www.figma.com/api/mcp/asset/3b9f8922-af67-44e8-825e-7251da301454";
const backIconUrl = chevronLeft;
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
const tabLabels: Record<(typeof tabs)[number], string> = {
  artist: "아티스트",
  fan: "팬",
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
    <div className="mx-auto min-h-screen w-full max-w-[630px] isolate bg-bg pb-[50px]">
      <ArtistCommunityStickyHeader
        activeTab={activeTab}
        artist={artist}
        artistName={artistName}
        backIconUrl={backIconUrl}
        tabLabels={tabLabels}
        tabs={tabs}
        topProfileUrl={topProfileUrl}
      />
      <ArtistCommunityHero
        artistName={artistName}
        backIconUrl={backIconUrl}
        heroImageUrl={heroImageUrl}
        heroLogoUrl={heroLogoUrl}
        topProfileUrl={topProfileUrl}
      />
      <ArtistCommunityTabs
        activeTab={activeTab}
        artist={artist}
        tabLabels={tabLabels}
        tabs={tabs}
      />
      <MemberList members={members} />
      <FromArtistSection
        artistName={artistName}
        liveCards={liveCards}
        verifiedIconUrl={verifiedIconUrl}
      />
      <ArtistPostList
        commentIconUrl={commentIconUrl}
        likeIconUrl={likeIconUrl}
        moreIconUrl={moreIconUrl}
        onlyIconUrl={onlyIconUrl}
        posts={posts}
        translateIconUrl={translateIconUrl}
        verifiedIconUrl={verifiedIconUrl}
      />
    </div>
  );
}
