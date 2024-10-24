"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  ArrowRight2,
  Calendar,
  Location,
  VolumeCross,
  VolumeHigh,
} from "iconsax-react";
import Footer from "@/components/footer/footer";

type Language = "mongolian" | "english";

interface ProgramItem {
  time: string;
  content: string;
}

interface TranslationContent {
  greeting: string;
  invitation: string;
  venue: string;
  program: string;
  programItems: ProgramItem[];
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
      { time: "17:00", content: "Зочдын угталт" },
      { time: "18:00", content: "Нээлтийн ёслол" },
      {
        time: "18:15",
        content: '"Санхүүчдийн ундраа" сүлд дууны клипний нээлт',
      },
      {
        time: "18:30",
        content: "Эдийн засаг, санхүүгийн тайлбар толь бичгийн нээлт",
      },
      { time: "19:30", content: '"Мөнгөн ирвэс" шагнал гардуулах ёслол' },
      { time: "20:00", content: "UFE Century сангийн нээлт" },
      { time: "20:10", content: "Азтан шалгаруулах" },
      { time: "20:40", content: "UFE next 100 дууны клипний нээлт" },
      { time: "21:00", content: "Нэтворкинг" },
      { time: "23:00", content: "Хаалт" },
    ],
    featuredEvents: "Онцлох арга хэмжээ",
    carouselItems: [
      '"Санхүүчдийн ундраа" сүлд дууны клипний нээлт',
      "Эдийн засаг, санхүүгийн тайлбар толь бичгийн нээлт",
      '"Мөнгөн ирвэс" шагнал гардуулах ёслол',
      "UFE Century сангийн нээлт",
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
      "Celebrate our grand anniversary with excitement, as we embark on this journey together.",
    venue: 'Shangri-La \n"Grand Ballroom"',
    program: "Agenda",
    programItems: [
      { time: "17:00", content: "Welcoming guests" },
      { time: "18:00", content: "Opening ceremony" },
      {
        time: "18:15",
        content: 'Premiere of the "Sanhuuchdiin Undraa" Theme Song Video',
      },
      {
        time: "18:30",
        content: "Launch of the Economic and Financial Dictionary",
      },
      { time: "19:30", content: '"Mungun Irves" Award Ceremony' },
      { time: "20:00", content: "Inauguration of the UFE Century Fund" },
      { time: "20:10", content: "Prize Draw" },
      { time: "20:40", content: 'Premiere of the "UFE Next 100" Song Video' },
      { time: "21:00", content: "Networking Session" },
      { time: "23:00", content: "Closing Ceremony" },
    ],
    featuredEvents: "Featured Event",
    carouselItems: [
      'Premiere of the "Sanhuuchdiin Undraa" Theme Song Video',
      "Launch of the Economic and Financial Dictionary",
      '"Mungun Irves" Award Ceremony',
      "Inauguration of the UFE Century Fund",
    ],
    moreInfo: "For more information",
    rights: "All rights reserved, UFE © 2024",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },
};

const carouselBackgrounds: { [key: string]: string } = {
  '"Санхүүчдийн ундраа" сүлд дууны клипний нээлт': "bg-content1",
  "Эдийн засаг, санхүүгийн тайлбар толь бичгийн нээлт": "bg-content2",
  '"Мөнгөн ирвэс" шагнал гардуулах ёслол': "bg-content3",
  "UFE Century сангийн нээлт": "bg-content4",
  'Premiere of the "Sanhuuchdiin Undraa" Theme Song Video': "bg-content1",
  "Launch of the Economic and Financial Dictionary": "bg-content2",
  '"Mungun Irves" Award Ceremony': "bg-content3",
  "Inauguration of the UFE Century Fund": "bg-content4",
};

const Home: React.FC = () => {
  const [language, setLanguage] = useState<Language>("mongolian");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioLoaded, setAudioLoaded] = useState(false);

  const toggleLanguage = (): void => {
    setLanguage(language === "mongolian" ? "english" : "mongolian");
  };

  // const toggleAudio = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //       setIsPlaying(false);
  //     } else {
  //       audioRef.current
  //         .play()
  //         .then(() => setIsPlaying(true))
  //         .catch((error) => {
  //           console.error("Audio play failed:", error);
  //           alert(
  //             "Failed to play audio. Please check your browser settings and try again."
  //           );
  //         });
  //     }
  //   }
  // };
  const toggleAudio = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Only attempt to play if the audio is loaded
        if (audioLoaded) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      setIsPlaying(false);
    }
  };

  const handleAudioLoad = () => {
    setAudioLoaded(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  };

  // const handleAudioError = (error: Event) => {
  //   console.error("Audio loading error:", error);
  //   setAudioLoaded(false);
  //   setIsPlaying(false);
  // };
  const handleAudioError = (event: ErrorEvent) => {
    // Get the specific error details from the error event
    const error = (event.target as HTMLAudioElement).error;
    
    console.error("Audio loading error:", {
      code: error?.code,
      message: error?.message,
      // Common error codes:
      // 1: MEDIA_ERR_ABORTED
      // 2: MEDIA_ERR_NETWORK
      // 3: MEDIA_ERR_DECODE
      // 4: MEDIA_ERR_SRC_NOT_SUPPORTED
    });
    
    setAudioLoaded(false);
    setIsPlaying(false);
  };


  const t: TranslationContent = translations[language];

  useEffect(() => {
    const targetDate = new Date("2024-11-01T17:00:00").getTime();

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

    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      alert(
        "This page contains audio content. Audio will start playing after you dismiss this message."
      );
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Audio play failed:", error);
          alert(
            "Failed to play audio. Please check your browser settings and try again."
          );
        });
    }

    return () => {
      clearInterval(timer);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <>
      <div className="container max-w-[400px] h-screen m-auto flex flex-col justify-start items-center gap-8 overflow-x-hidden bg-white">
        <div className="flex justify-between items-center w-full px-4 pt-6">
          <Image
            src="/img/image.png"
            alt="ufe logo"
            width={40}
            height={40}
            className="object-cover"
          />
          <div className="flex gap-2">
            <Button
              onClick={toggleAudio}
              className="bg-[#0f2091] text-white hover:bg-[#0f2091] cursor-pointer"
            >
              {isPlaying ? <VolumeHigh size={20} /> : <VolumeCross size={20} />}
            </Button>
            <Button
              onClick={toggleLanguage}
              className="bg-[#0f2091] text-white hover:bg-[#0f2091] cursor-pointer"
            >
              {language === "mongolian" ? "EN" : "MN"}
            </Button>
          </div>
        </div>
        <video
          src="/hello.mp4"
          autoPlay
          loop
          muted
          width={400}
          height={600}
          className="rounded-xl"
        >
          Your browser does not support the video tag.
        </video>
        {/* <p className="text-black text-lg font-bold">Арга хэмжээ эхлэхэд</p> */}
        <div className="w-full bg-white text-white p-0 rounded-lg">
          <div className="grid grid-cols-4 gap-4 text-center">
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
            className="px-6 py-4 flex gap-2 text-center items-center justify-around bg-[#0f2091] rounded-lg shadow-xl w-[50%]"
          >
            <Location size="30" color="#ffffff" />
            <h5 className="text-sm font-normal text-center text-white">
              {t.venue}
            </h5>
          </Link>
          <Link
            href="#"
            className="w-[50%] flex gap-2 items-center justify-around px-5 py-4 bg-[#0f2091] rounded-lg shadow-xl border"
          >
            <Calendar size="24" color="#ffffff" />
            <div>
              <h5 className="flex items-center justify-center text-center text-sm font-normal text-white">
                2024.11.02
              </h5>
              <h5 className="flex items-center justify-center text-center text-sm font-normal text-white">
                17:00-23:00
              </h5>
            </div>
          </Link>
        </div>
        <div className="pl-6 pr-6 pt-6 pb-2 bg-white w-full rounded-lg flex flex-col gap-4 text-[#3d4466]">
          <p className="text-[#0f2091] font-bold text-xl text-center uppercase py-3">
            {t.program}
          </p>
          <div className="pl-2 text-black grid gap-3">
            {t.programItems.map((item, index: number) => (
              <div
                key={index}
                className={`
                flex items-center gap-4
                ${index < t.programItems.length - 1 ? "border-b pb-3" : "pb-4"}
              `}
              >
                <span className="text-[#0f2091] font-medium min-w-[50px]">
                  {item.time}
                </span>
                <span className="flex-grow items-center">{item.content}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#0f2091] font-bold text-xl uppercase">
          {t.featuredEvents}
        </div>
        <div className="flex justify-center w-full gap-2 text-white">
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
                    className={`
                    h-[160px] border border-gray-800 
                    ${carouselBackgrounds[item]} 
                    bg-cover bg-center 
                    font-bold flex items-end pb-5 justify-center 
                    rounded-3xl border-hidden text-center p-2 
                    ${index === 0 ? "w-full" : "w-[400px]"}
                    relative overflow-hidden
                  `}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('/img/${carouselBackgrounds[item]}.jpg')`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-[#0f2091]/50"></div>
                    <span className="relative z-10">{item}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <Footer />
      </div>
      <audio
        ref={audioRef}
        onLoadedData={handleAudioLoad}
        onError={(e) => handleAudioError(e as unknown as ErrorEvent)}
        loop
      >
        <source src="/img/intro.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default Home;

//old footer
{
  /* <footer className="flex flex-col pb-10 gap-3 items-center border-t border-t-black w-full pt-6">
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
        </footer> */
}
