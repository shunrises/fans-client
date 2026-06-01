type LiveCard = {
  author: string;
  image: string;
  title: string;
};

type FromArtistSectionProps = {
  artistName: string;
  liveCards: LiveCard[];
  verifiedIconUrl: string;
};

export function FromArtistSection({
  artistName,
  liveCards,
  verifiedIconUrl,
}: FromArtistSectionProps) {
  return (
    <section
      className="mx-auto w-full max-w-[630px] bg-bg pt-10"
      aria-label="from artist"
    >
      <h2 className="m-0 px-4 pb-5 text-xl leading-[25px] font-semibold tracking-[-0.3px] text-primary">
        From. {artistName}
      </h2>
      <div className="flex gap-2 overflow-x-auto px-4 pb-[50px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {liveCards.map((card) => (
          <article
            key={`${card.author}-${card.title}`}
            className="flex h-[165px] w-[276px] shrink-0 flex-col justify-between rounded-xl border border-outline bg-container p-[17px]"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-[13px] leading-4 font-semibold tracking-[-0.1px] text-disabled">
                <span
                  className="relative h-4 w-4 rounded-full bg-rose-capsule"
                  aria-hidden="true"
                >
                  <span className="absolute top-[7px] right-1 left-1 h-0.5 rounded-full bg-rose" />
                  <span className="absolute top-[7px] right-1 left-1 h-0.5 rotate-90 rounded-full bg-rose" />
                </span>
                종료
              </span>
              <time className="rounded-full bg-placeholder px-2 py-1 text-[13px] leading-4 tracking-[0.2px] text-disabled">
                00:00
              </time>
            </div>
            <p className="m-0 py-5 text-[15px] leading-[22px] font-semibold tracking-[-0.2px] text-primary">
              {card.title}
            </p>
            <div className="flex items-center gap-2 border-t border-divider pt-[21px]">
              <img
                className="h-6 w-6 rounded-full border border-img-line object-cover"
                src={card.image}
                alt=""
                aria-hidden="true"
              />
              <strong className="text-[15px] leading-[22px] font-semibold tracking-[-0.2px] text-primary">
                {card.author}
              </strong>
              <img
                className="h-4 w-4"
                src={verifiedIconUrl}
                alt=""
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
