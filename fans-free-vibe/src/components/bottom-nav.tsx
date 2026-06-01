import Image from "next/image";
import Link from "next/link";
import activeHome from "@/assets/icons/active-home.svg";
import activeMy from "@/assets/icons/active-my.svg";
import inactiveHome from "@/assets/icons/inactive-home.svg";
import inactiveMy from "@/assets/icons/inactive-my.svg";

type BottomNavItemId = "home" | "my";

type BottomNavProps = {
  activeItem?: BottomNavItemId;
};

const bottomNavItems: Array<{
  activeIcon: string;
  href: string;
  icon: string;
  id: BottomNavItemId;
  label: string;
}> = [
  {
    activeIcon: activeHome,
    href: "/",
    icon: inactiveHome,
    id: "home",
    label: "Home",
  },
  {
    activeIcon: activeMy,
    href: "/my",
    icon: inactiveMy,
    id: "my",
    label: "My",
  },
];

export function BottomNav({ activeItem = "home" }: BottomNavProps) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-20 border-t border-glass-border bg-glass pb-[env(safe-area-inset-bottom)] backdrop-blur-lg backdrop-saturate-[1.15] transform-gpu"
      aria-label="Bottom navigation"
    >
      <div className="mx-auto h-[50px] w-full max-w-[630px] flex flex-row self-center items-center">
        {bottomNavItems.map((item) => {
          const iconUrl = activeItem === item.id ? item.activeIcon : item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="flex-row w-full flex items-center justify-center gap-1 pb-0.5"
              aria-label={item.label}
            >
              <Image
                className="h-6 w-6"
                src={iconUrl}
                alt=""
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
