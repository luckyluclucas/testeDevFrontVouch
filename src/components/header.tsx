"use client";
import Link from "next/link";
import ThemeChanger from "./themeChanger";

export default function Header() {
  const navMenuItens = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contato",
      href: "/",
    },
    {
      title: "Quem Somos",
      href: "/",
    },
  ];
  return (
    <header
      suppressHydrationWarning
      className="sticky bg-background z-100 top-0 w-full shadow-md border-b border-border content-center"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vouch</h1>
        <ul className="hidden md:flex md:flex-row gap-12 mx-4 ">
          {navMenuItens.map((item) => (
            <Link key={item.title} href={item.href}>
              <li className="hover:scale-101 hover:accent transition-all ease-in-out duration-600">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <ThemeChanger />
      </div>
    </header>
  );
}
