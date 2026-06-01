import Link from "next/link";

type ArtistCommunityTabsProps = {
  activeTab: string;
  artist: string;
  tabLabels: Record<string, string>;
  tabs: readonly string[];
};

export function ArtistCommunityTabs({
  activeTab,
  artist,
  tabLabels,
  tabs,
}: ArtistCommunityTabsProps) {
  return (
    <nav
      className="mx-auto flex h-[38px] w-full max-w-[630px] overflow-x-auto border-b border-glass-border bg-bg px-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
  );
}
