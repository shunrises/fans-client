import Link from "next/link";

const logoUrl = "https://www.figma.com/api/mcp/asset/03a1cb89-0807-4bfb-ad72-5267c6d0ecd8";
const navIcons = [
  "https://www.figma.com/api/mcp/asset/82772cbe-d3e0-4b78-a626-0f2295df9b01",
  "https://www.figma.com/api/mcp/asset/52d9b797-5d92-4be8-9512-4e56ab27106e",
  "https://www.figma.com/api/mcp/asset/dd93d1fc-e56b-4845-b8fa-7c4d1f1dc333",
  "https://www.figma.com/api/mcp/asset/cc4509d5-bfbb-485a-8b7f-2c322313b006",
];

const dimOverlayUrl = "https://www.figma.com/api/mcp/asset/ff9cded3-b6fe-40f5-9613-1d4a7bac3c11";

function buildCommunityUrl(artistSlug: string) {
  return `/community/${artistSlug}/artist`;
}

const cards = [
  { title: "Stray Kids", slug: "StrayKids", image: "https://www.figma.com/api/mcp/asset/9f9d8f13-22d9-42e4-8915-dc6ef04e66ce" },
  { title: "Xdinary Heroes", slug: "XdinaryHeroes", image: "https://www.figma.com/api/mcp/asset/f99e3d05-5aa8-4beb-9451-2fbf4d3ae989" },
  { title: "DAY6", slug: "DAY6", image: "https://www.figma.com/api/mcp/asset/47ba376d-23ba-4601-8ccd-f3e685718bbd" },
  { title: "PARK YOONHO", slug: "PARKYOONHO", image: "https://www.figma.com/api/mcp/asset/6f980d5f-94a0-4f53-8e3e-03f841317d7d" },
  { title: "GIRLSET", slug: "GIRLSET", image: "https://www.figma.com/api/mcp/asset/649a4af2-d21c-4c57-be69-668b7a22179c" },
  { title: "dodree (도드리)", slug: "dodree", image: "https://www.figma.com/api/mcp/asset/4ae2c6e2-3024-43d0-96a2-d9d653f07d41" },
  { title: "JUN. K", slug: "JUNK", image: "https://www.figma.com/api/mcp/asset/0b15efda-874a-44a3-a50c-1a2458f1c660" },
  { title: "JANG WOOYOUNG", slug: "JANGWOOYOUNG", image: "https://www.figma.com/api/mcp/asset/b80f2882-3ae1-46fc-b715-fa18a71cbba3" },
  { title: "TWICE", slug: "TWICE", image: "https://www.figma.com/api/mcp/asset/5e786e4f-5d5f-43f3-b26f-8e00c19b077f" },
  { title: "NEXZ", slug: "NEXZ", image: "https://www.figma.com/api/mcp/asset/df1593cb-6488-4868-942f-423c22ee848c" },
  { title: "NiziU", slug: "NiziU", image: "https://www.figma.com/api/mcp/asset/bb02c0d7-5c91-4277-a701-4e31a3c0388f" },
  { title: "NICHKHUN", slug: "NICHKHUN", image: "https://www.figma.com/api/mcp/asset/cf18353d-99c5-4e42-a848-d96cc3c0f115" },
  { title: "J.Y. Park", slug: "JYPark", image: "https://www.figma.com/api/mcp/asset/c97eee42-fba7-4f22-af09-c2af482ad014" },
  { title: "ITZY", slug: "ITZY", image: "https://www.figma.com/api/mcp/asset/e6d9ce2f-cf7b-4f4c-8ae2-cab8de13f49d" },
  { title: "NMIXX", slug: "NMIXX", image: "https://www.figma.com/api/mcp/asset/b6beaee0-7e71-4440-abfe-fdf395d3798b" },
  { title: "KickFlip", slug: "KickFlip", image: "https://www.figma.com/api/mcp/asset/14a8b787-398d-43e8-b41d-525462264789" },
];

export default function Home() {
  return (
    <div className="fans-page">
      <header className="fans-topbar">
        <div className="fans-shell">
          <img className="fans-logo" src={logoUrl} alt="Fans" />
        </div>
      </header>

      <main className="fans-content">
        <div className="fans-shell">
          <section className="fans-grid" aria-label="Artist grid">
            {cards.map((card) => (
              <Link key={card.title} className="fans-card" href={buildCommunityUrl(card.slug)}>
                <img className="fans-card-image" src={card.image} alt={card.title} loading="lazy" />
                <img className="fans-card-dim" src={dimOverlayUrl} alt="" aria-hidden="true" />
                <p className="fans-card-title">{card.title}</p>
              </Link>
            ))}
          </section>
        </div>
      </main>

      <nav className="fans-bottombar" aria-label="Bottom navigation">
        <div className="fans-shell fans-navrow">
          {navIcons.map((iconUrl, index) => (
            <button key={iconUrl} type="button" className="fans-navbtn" aria-label={`Tab ${index + 1}`}>
              <img src={iconUrl} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
