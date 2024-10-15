"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

type Language = "mongolian" | "english";

interface TranslationContent {
  greeting: string;
  invitation: string;
  venue: string;
  program: string;
  programItems: string[];
  featuredEvents: string;
  carouselItems: string[];
  moreInfo: string;
  rights: string;
}

interface Translations {
  mongolian: TranslationContent;
  english: TranslationContent;
}

const translations: Translations = {
  mongolian: {
    greeting: "Эрхэм хүндэт таныг",
    invitation:
      "UFE 100 жилийн ойн баярын хүндэтгэлийн арга хүлээн авалтанд хүрэлцэн ирэхийг урья.",
    venue: 'Шангри-ла \n"Их танхим"',
    program: "Хөтөлбөр",
    programItems: [
      "Зочдыг угтах үйл ажиллагаа",
      "Нээлтийн ажиллагаа",
      "Санхүүчдийн ундраа шинэчилсэн клип",
      "Эдийн засаг, санхүүгийн тайлбар толийн нээлт",
      '"Мөнгөн ирвэс" шагнал гардуулах ёслол',
      "UFE CENTURY FUND",
      "Чөлөөт арга хэмжээ",
    ],
    featuredEvents: "Онцлох арга хэмжээ",
    carouselItems: [
      "Санхүүчдын ундраа",
      "Санхүү эдийн засгийн тайлбар толь",
      "Эдийн засаг, санхүүгийн тайлбар толийн нээлт",
      "UFE Century fund",
    ],
    moreInfo: "Дэлгэрэнгүй мэдээлэл",
    rights: "All rights reserved, UFE © 2024",
  },
  english: {
    greeting: "Dear honored guest",
    invitation:
      "We invite you to attend the UFE 100th anniversary celebration reception.",
    venue: 'Shangri-La \n"Grand Ballroom"',
    program: "Program",
    programItems: [
      "Guest reception",
      "Opening ceremony",
      "Premiere of the updated Financiers' Anthem clip",
      "Launch of the Economics and Finance Explanatory Dictionary",
      '"Silver Snow Leopard" award ceremony',
      "UFE CENTURY FUND",
      "Free networking event",
    ],
    featuredEvents: "Featured Events",
    carouselItems: [
      "Financiers' Anthem",
      "Economics and Finance Explanatory Dictionary",
      "Launch of the Economics and Finance Explanatory Dictionary",
      "UFE Century Fund",
    ],
    moreInfo: "For more information",
    rights: "All rights reserved, UFE © 2024",
  },
};

const Home: React.FC = () => {
  const [language, setLanguage] = useState<Language>("mongolian");

  const toggleLanguage = (): void => {
    setLanguage(language === "mongolian" ? "english" : "mongolian");
  };

  const t: TranslationContent = translations[language];

  return (
    <>
      <div className="container max-w-[400px] h-screen m-auto flex flex-col justify-start items-center gap-10 overflow-x-hidden bg-white">
        <div className="flex justify-between items-center w-full px-4 pt-6">
          <Image
            src="/img/image.png"
            alt="ufe logo"
            width={40}
            height={40}
            className="object-cover"
          />
          <Button
            onClick={toggleLanguage}
            className="bg-[#062365] text-white hover:bg-bg-[#062365] cursor-pointer"
          >
            {language === "mongolian" ? "EN" : "MN"}
          </Button>
        </div>
        <video
          src="/banner.mp4"
          autoPlay
          loop
          muted
          width={400}
          height={600}
          className="rounded-xl"
        >
          Your browser does not support the video tag.
        </video>
        <div className="text-[#062365] font-bold text-center p-2 grid gap-3 bg-white">
          <p>{t.greeting}</p>
          <p>{t.invitation}</p>
        </div>
        <div className="flex gap-2 w-full">
          <Link
            href="#"
            className="px-2 py-6 flex text-center items-center justify-center bg-[#062365] rounded-xl w-[50%]"
          >
            <h5 className="text-lg font-bold text-center text-white shadow-2xl">
              {t.venue}
            </h5>
          </Link>
          <Link
            href="#"
            className="w-[50%] flex flex-col items-center justify-between px-2 py-3 bg-white rounded-xl shadow-2xl border"
          >
            <h5 className="flex items-center justify-center text-center text-lg font-bold text-[#062365]">
              2024.11.02
            </h5>
            <h5 className="flex items-center justify-center text-center text-lg font-bold text-[#062365]">
              17:00
            </h5>
          </Link>
        </div>
        <div className="p-6 bg-white w-full rounded-lg flex flex-col gap-4 text-[#3d4466]">
          <p className="text-[#3d4466] font-bold text-xl uppercase py-3">
            {t.program}
          </p>
          <div className="pl-2 grid gap-4">
            {t.programItems.map((item: string, index: number) => (
              <span
                key={index}
                className={
                  index < t.programItems.length - 1 ? "border-b pb-3" : "pb-4"
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="text-[#3d4466] font-bold text-2xl uppercase">
          {t.featuredEvents}
        </div>
        <div className="flex justify-center w-full gap-2 p-2 border-b pb-5 border-b-[#3d4466] text-[#3d4466]">
          <Carousel className="w-full h-[160px]">
            <CarouselContent>
              {t.carouselItems.map((item: string, index: number) => (
                <CarouselItem key={index}>
                  <div className="w-full h-[160px] border border-gray-800 rounded-2xl flex items-center justify-center text-center p-2">
                    {item}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <footer className="flex flex-col pb-10 gap-3 items-center">
          <p className="text-[#3d4466] font-medium text-xs">{t.moreInfo}</p>
          <p className="text-[#3d4466] text-3xl font-bold">10000-2000</p>
          <div className="mt-5">
            <Image
              src="/img/logo.png"
              alt="background"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <p className="text-[#3d4466] text-xs">{t.rights}</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
