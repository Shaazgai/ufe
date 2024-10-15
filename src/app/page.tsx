// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";
// import { Calendar, Location } from "iconsax-react";

// type Language = "mongolian" | "english";

// interface TranslationContent {
//   greeting: string;
//   invitation: string;
//   venue: string;
//   program: string;
//   programItems: string[];
//   featuredEvents: string;
//   carouselItems: string[];
//   moreInfo: string;
//   rights: string;
// }

// interface Translations {
//   mongolian: TranslationContent;
//   english: TranslationContent;
// }

// const translations: Translations = {
//   mongolian: {
//     greeting: "Эрхэм хүндэт таныг",
//     invitation:
//       "UFE 100 жилийн ойн баярын хүндэтгэлийн хүлээн авалтанд хүрэлцэн ирэхийг урья.",
//     venue: 'Шангри-ла \n "Их танхим"',
//     program: "Хөтөлбөр",
//     programItems: [
//       "Зочдыг угтах үйл ажиллагаа",
//       "Нээлтийн ажиллагаа",
//       "Санхүүчдийн ундраа шинэчилсэн клип",
//       "Эдийн засаг, санхүүгийн тайлбар толийн нээлт",
//       '"Мөнгөн ирвэс" шагнал гардуулах ёслол',
//       "UFE CENTURY FUND",
//       "Чөлөөт арга хэмжээ",
//     ],
//     featuredEvents: "Онцлох арга хэмжээ",
//     carouselItems: [
//       "Санхүүчдын ундраа",
//       "Санхүү эдийн засгийн тайлбар толь",
//       "Эдийн засаг, санхүүгийн тайлбар толийн нээлт",
//       "UFE Century fund",
//     ],
//     moreInfo: "Дэлгэрэнгүй мэдээлэл",
//     rights: "All rights reserved, UFE © 2024",
//   },
//   english: {
//     greeting: "Dear honored guest",
//     invitation:
//       "We invite you to attend the UFE 100th anniversary celebration reception.",
//     venue: 'Shangri-La \n"Grand Ballroom"',
//     program: "Program",
//     programItems: [
//       "Guest reception",
//       "Opening ceremony",
//       "Premiere of the updated Financiers' Anthem clip",
//       "Launch of the Economics and Finance Explanatory Dictionary",
//       '"Silver Snow Leopard" award ceremony',
//       "UFE CENTURY FUND",
//       "Free networking event",
//     ],
//     featuredEvents: "Featured Events",
//     carouselItems: [
//       "Financiers' Anthem",
//       "Economics and Finance Explanatory Dictionary",
//       "Launch of the Economics and Finance Explanatory Dictionary",
//       "UFE Century Fund",
//     ],
//     moreInfo: "For more information",
//     rights: "All rights reserved, UFE © 2024",
//   },
// };

// const Home: React.FC = () => {
//   const [language, setLanguage] = useState<Language>("mongolian");

//   const toggleLanguage = (): void => {
//     setLanguage(language === "mongolian" ? "english" : "mongolian");
//   };

//   const t: TranslationContent = translations[language];

//   return (
//     <>
//       <div className="container max-w-[400px] h-screen m-auto flex flex-col justify-start items-center gap-10 overflow-x-hidden bg-white">
//         <div className="flex justify-between items-center w-full px-4 pt-6">
//           <Image
//             src="/img/image.png"
//             alt="ufe logo"
//             width={40}
//             height={40}
//             className="object-cover"
//           />
//           <Button
//             onClick={toggleLanguage}
//             className="bg-[#0f2091] text-white hover:bg-[#0f2091] cursor-pointer"
//           >
//             {language === "mongolian" ? "EN" : "MN"}
//           </Button>
//         </div>
//         <video
//           src="/banner.mp4"
//           autoPlay
//           loop
//           muted
//           width={400}
//           height={600}
//           className="rounded-xl"
//         >
//           Your browser does not support the video tag.
//         </video>
//         <div>
//           add timer countdown
//         </div>
//         <div className="text-[#0f2091] font-bold text-center p-2 grid gap-3 bg-white">
//           <p className="uppercase text-lg">{t.greeting}</p>
//           <p className="font-normal text-black">{t.invitation}</p>
//         </div>
//         <div className="flex gap-2 w-full">
//           <Link
//             href="#"
//             className="px-5 py-4 flex gap-2 text-center items-center justify-around bg-[#0f2091] rounded-lg shadow-xl w-[50%]"
//           >
//             <Location size="30" color="#ffffff" />
//             <h5 className="text-lg font-normal text-center text-white">
//               {t.venue}
//             </h5>
//           </Link>
//           <Link
//             href="#"
//             className="w-[50%] flex gap-2 items-center justify-around px-5 py-4 bg-[#0f2091] rounded-lg shadow-xl border"
//           >
//             <Calendar size="24" color="#ffffff" />
//             <div>
//               <h5 className="flex items-center justify-center text-center text-lg font-normal text-white">
//                 2024.11.02
//               </h5>
//               <h5 className="flex items-center justify-center text-center text-lg font-normal text-white">
//                 17:00
//               </h5>
//             </div>
//           </Link>
//         </div>
//         <div className="p-6 bg-white w-full rounded-lg flex flex-col gap-4 text-[#3d4466]">
//           <p className="text-[#0f2091] font-bold text-xl uppercase py-3">
//             {t.program}
//           </p>
//           <div className="pl-2 text-black grid gap-4">
//             {t.programItems.map((item: string, index: number) => (
//               <span
//                 key={index}
//                 className={
//                   index < t.programItems.length - 1 ? "border-b pb-3" : "pb-4"
//                 }
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="text-[#0f2091] font-bold text-xl uppercase">
//           {t.featuredEvents}
//         </div>
//         <div className="flex justify-center w-full gap-2  text-white">
//           <Carousel className="w-full relative gap-2 h-[160px] overflow-hidden">
//             <CarouselContent className="w-full">
//               {t.carouselItems.map((item: string, index: number) => (
//                 <CarouselItem
//                   key={index}
//                   className={`flex-shrink-0 ${
//                     index === 0 ? "w-[100%]" : "w-[100%]"
//                   }`}
//                 >
//                   <div
//                     className={`h-[160px] border border-gray-800 bg-[#0f2091] rounded-2xl font-bold flex items-center justify-center text-center p-2 ${
//                       index === 0 ? "w-full" : "w-[400px]"
//                     }`}
//                   >
//                     {item}
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>
//         </div>

//         <footer className="flex flex-col pb-10 gap-3 items-center border-t border-t-black w-full pt-6">
//           <p className="text-black font-medium text-xs">{t.moreInfo}</p>
//           <p className="text-[#0f2091] text-3xl font-bold">7777-1100</p>
//           <div className="mt-5">
//             <Image
//               src="/img/logo.png"
//               alt="background"
//               width={80}
//               height={80}
//               className="object-cover"
//             />
//           </div>
//           <p className="text-black text-xs">{t.rights}</p>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default Home;
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Calendar, Location } from "iconsax-react";

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
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface Translations {
  mongolian: TranslationContent;
  english: TranslationContent;
}

const translations: Translations = {
  mongolian: {
    greeting: "Эрхэм хүндэт таныг",
    invitation:
      "UFE 100 жилийн ойн баярын хүндэтгэлийн хүлээн авалтанд хүрэлцэн ирэхийг урья.",
    venue: 'Шангри-ла \n "Их танхим"',
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
    days: "Өдөр",
    hours: "Цаг",
    minutes: "Минут",
    seconds: "Секунд",
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
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },
};

const Home: React.FC = () => {
  const [language, setLanguage] = useState<Language>("mongolian");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const toggleLanguage = (): void => {
    setLanguage(language === "mongolian" ? "english" : "mongolian");
  };

  const t: TranslationContent = translations[language];

  useEffect(() => {
    const targetDate = new Date("2024-11-02T17:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            className="bg-[#0f2091] text-white hover:bg-[#0f2091] cursor-pointer"
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
        <div className="w-full bg-white text-white p-4 rounded-lg">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-[#0f2091] p-2 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">{t.days}</div>
            </div>
            <div className="bg-[#0f2091] p-2 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">{t.hours}</div>
            </div>
            <div className="bg-[#0f2091] p-2 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">{t.minutes}</div>
            </div>
            <div className="bg-[#0f2091] p-2 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">{t.seconds}</div>
            </div>
          </div>
        </div>
        <div className="text-[#0f2091] font-bold text-center p-2 grid gap-3 bg-white">
          <p className="uppercase text-lg">{t.greeting}</p>
          <p className="font-normal text-black">{t.invitation}</p>
        </div>
        <div className="flex gap-2 w-full">
          <Link
            href="#"
            className="px-5 py-4 flex gap-2 text-center items-center justify-around bg-[#0f2091] rounded-lg shadow-xl w-[50%]"
          >
            <Location size="30" color="#ffffff" />
            <h5 className="text-lg font-normal text-center text-white">
              {t.venue}
            </h5>
          </Link>
          <Link
            href="#"
            className="w-[50%] flex gap-2 items-center justify-around px-5 py-4 bg-[#0f2091] rounded-lg shadow-xl border"
          >
            <Calendar size="24" color="#ffffff" />
            <div>
              <h5 className="flex items-center justify-center text-center text-lg font-normal text-white">
                2024.11.02
              </h5>
              <h5 className="flex items-center justify-center text-center text-lg font-normal text-white">
                17:00
              </h5>
            </div>
          </Link>
        </div>
        <div className="p-6 bg-white w-full rounded-lg flex flex-col gap-4 text-[#3d4466]">
          <p className="text-[#0f2091] font-bold text-xl uppercase py-3">
            {t.program}
          </p>
          <div className="pl-2 text-black grid gap-4">
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
        <div className="text-[#0f2091] font-bold text-xl uppercase">
          {t.featuredEvents}
        </div>
        <div className="flex justify-center w-full gap-2  text-white">
          <Carousel className="w-full relative gap-2 h-[160px] overflow-hidden">
            <CarouselContent className="w-full">
              {t.carouselItems.map((item: string, index: number) => (
                <CarouselItem
                  key={index}
                  className={`flex-shrink-0 ${
                    index === 0 ? "w-[100%]" : "w-[100%]"
                  }`}
                >
                  <div
                    className={`h-[160px] border border-gray-800 bg-[#0f2091] rounded-2xl font-bold flex items-center justify-center text-center p-2 ${
                      index === 0 ? "w-full" : "w-[400px]"
                    }`}
                  >
                    {item}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <footer className="flex flex-col pb-10 gap-3 items-center border-t border-t-black w-full pt-6">
          <p className="text-black font-medium text-xs">{t.moreInfo}</p>
          <p className="text-[#0f2091] text-3xl font-bold">7777-1100</p>
          <div className="mt-5">
            <Image
              src="/img/logo.png"
              alt="background"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <p className="text-black text-xs">{t.rights}</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
