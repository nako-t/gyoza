interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    label: "ホーム",
    href: "/",
  },
  {
    label: "探す",
    href: "/search",
  },
  {
    label: "作る",
    href: "/cook",
  },
];
