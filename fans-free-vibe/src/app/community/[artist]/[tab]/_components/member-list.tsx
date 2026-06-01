type Member = {
  image: string;
  name: string;
};

type MemberListProps = {
  members: Member[];
};

export function MemberList({ members }: MemberListProps) {
  return (
    <section
      className="relative mx-auto w-full max-w-[630px] border-b-8 border-divider-thick bg-bg px-[11px] py-7"
      aria-label="members"
    >
      <div className="flex gap-2 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        {members.map((member) => (
          <span
            key={member.name}
            className="flex w-[74px] shrink-0 flex-col items-center"
          >
            <span className="block h-16 w-16 overflow-hidden rounded-full border border-img-line bg-placeholder">
              <img
                className="block h-full w-full object-cover"
                src={member.image}
                alt=""
                aria-hidden="true"
              />
            </span>
            <span className="max-w-[74px] truncate pt-1.5 text-sm leading-[19px] font-semibold tracking-[-0.2px] text-primary">
              {member.name}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
