"use client";

import { usePathname } from "next/navigation";
import { BottomNav } from "./bottom-nav";

export function BottomNavAuto() {
  const pathname = usePathname();
  const activeItem = pathname.startsWith("/my") ? "my" : "home";
  return <BottomNav activeItem={activeItem} />;
}
