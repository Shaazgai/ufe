import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "iconsax-react";
import { Globe } from "lucide-react";
import Link from "next/link";

const Footer = ({
  moreInfo = "Дэлгэрэнгүй мэдээлэл авах бол:",
  rights = "Бүх эрх хуулиар хамгаалагдсан © 2024",
}) => {
  const socialLinks = [
    {
      icon: <Facebook size={26} />,
      href: "https://www.facebook.com/@ufe.edu.mn",
      label: "Facebook",
    },
    {
      icon: <Instagram size={26} />,
      href: "https://www.instagram.com/ufe.edu.mn",
      label: "Instagram",
    },
    {
      icon: <Youtube size={28} />,
      href: "https://www.youtube.com/@UFE",
      label: "Youtube",
    },
    {
      icon: <Globe size={28} />,
      href: "https://www.ufe.edu.mn",
      label: "Website",
    },
  ];

  return (
    <footer className="flex flex-col pb-10 gap-3 items-center border-t border-t-black w-full pt-6">
      <p className="text-black font-medium text-xs">{moreInfo}</p>
      <p className="text-[#0f2091] text-3xl font-bold">7777-1100</p>

      <div className="flex gap-5 mt-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#1a32d4] transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="mt-5">
        <Image
          src="/img/logo.png"
          alt="UFE Logo"
          width={80}
          height={80}
          className="object-cover"
        />
      </div>
      <div className="text-[#0f2091] flex font-medium mt-2 gap-1">
        <p className="text-black">UFE 100:</p>
        <Link
          href="https://100.ufe.mn"
          className="hover:text-[#1a32d4] transition-colors"
        >
          UFE centennial
        </Link>
      </div>

      <p className="text-black text-xs">{rights}</p>
    </footer>
  );
};

export default Footer;
