type ArtistPost = {
  author: string;
  body: string;
  comments: string;
  likes: string;
};

type ArtistPostListProps = {
  commentIconUrl: string;
  likeIconUrl: string;
  moreIconUrl: string;
  onlyIconUrl: string;
  posts: ArtistPost[];
  translateIconUrl: string;
  verifiedIconUrl: string;
};

const postAvatarUrl =
  "https://www.figma.com/api/mcp/asset/89dd69a0-3835-4809-8f2a-d12711221853";

export function ArtistPostList({
  commentIconUrl,
  likeIconUrl,
  moreIconUrl,
  onlyIconUrl,
  posts,
  translateIconUrl,
  verifiedIconUrl,
}: ArtistPostListProps) {
  return (
    <section
      className="mx-auto flex w-full max-w-[630px] flex-col gap-5 px-4 pb-[calc(88px_+_env(safe-area-inset-bottom))]"
      aria-label="artist posts"
    >
      {posts.map((post, index) => (
        <article key={`${post.author}-${index}`} className="p-0">
          <header className="flex items-start justify-between gap-2">
            <div className="flex min-w-0 flex-1 items-start gap-2">
              <img
                className="h-9 w-9 shrink-0 rounded-full border border-img-line object-cover"
                src={postAvatarUrl}
                alt=""
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <strong className="text-[15px] leading-[22px] font-semibold tracking-[-0.2px] text-primary">
                    {post.author}
                  </strong>
                  <img
                    className="h-4 w-4"
                    src={verifiedIconUrl}
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="flex items-center gap-2 text-[13px] leading-4 tracking-[-0.1px] text-tertiary">
                  <span>한 달 전</span>
                  <span className="inline-flex items-center gap-0.5 text-xs leading-4 text-rose">
                    <img
                      className="h-2 w-2"
                      src={onlyIconUrl}
                      alt=""
                      aria-hidden="true"
                    />
                    ONLY
                  </span>
                </div>
              </div>
            </div>
            <img
              className="h-5 w-5 shrink-0"
              src={translateIconUrl}
              alt=""
              aria-hidden="true"
            />
          </header>
          <div className="relative mt-3.5 rounded-xl bg-rose-soft px-4 py-5">
            <span
              className="absolute -top-3 left-3 h-3 w-3 bg-rose-soft [clip-path:polygon(50%_0,0_100%,100%_100%)]"
              aria-hidden="true"
            />
            <p className="m-0 text-[15px] leading-[22px] tracking-[-0.2px] text-primary">
              {post.body}
            </p>
            <footer className="mt-4 flex items-center gap-2.5">
              <span className="inline-flex w-[60px] items-center gap-0.5 text-[13px] leading-4 tracking-[-0.1px] text-tertiary">
                <img
                  className="h-5 w-5"
                  src={likeIconUrl}
                  alt=""
                  aria-hidden="true"
                />
                {post.likes}
              </span>
              <span className="inline-flex w-[60px] items-center gap-0.5 text-[13px] leading-4 tracking-[-0.1px] text-tertiary">
                <img
                  className="h-5 w-5"
                  src={commentIconUrl}
                  alt=""
                  aria-hidden="true"
                />
                {post.comments}
              </span>
              <button
                className="ml-auto h-6 w-6 border-0 bg-transparent p-0"
                type="button"
                aria-label="more"
              >
                <img
                  className="h-5 w-5"
                  src={moreIconUrl}
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </footer>
          </div>
        </article>
      ))}
    </section>
  );
}
