import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container max-w-[400px] h-screen m-auto flex flex-col justify-start items-center gap-10 overflow-x-hidden bg-[#e6eef2]">
        {/* <h1>Hello world</h1> */}
        <video
          src="/banner.mp4"
          autoPlay
          loop
          muted
          // playsInline
          // controls
          width="400"
          height="600"
        >
          Your browser does not support the video tag.
        </video>
        <div className="text-gray-600">Урилганы текст </div>
        <div className="flex gap-2 w-full">
          <Link
            href="#"
            className="px-2 py-6 flex  text-centeritems-center justify-center bg-[#3d4466] rounded-lg w-[50%]"
          >
            <h5 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
              Шангрила Хүлээн авалтын танхим
            </h5>
          </Link>
          <Link
            href="#"
            className="w-[50%] flex items-center justify-center px-2 py-6 bg-[#e6eef2] rounded-lg shadow-2xl border"
          >
            <h5 className="flex items-center justify-center text-center text-2xl font-bold text-[#3d4466]">
              2024.11.02
            </h5>
          </Link>
        </div>
        <div className="p-6 bg-white w-full rounded-lg flex flex-col gap-4 text-[#3d4466]">
          <p className="text-[#3d4466] font-bold text-xl uppercase py-3">
            Хөтөлбөр
          </p>
          <span className="border-b pb-3">Зочдыг угтах үйл ажиллагаа </span>
          <span className="border-b pb-3">Нээлтийн ажиллагаа </span>
          <span className="border-b pb-3">
            Санхүүчдийн ундраа шинэчилсэн клип{" "}
          </span>
          <span className="border-b pb-3">
            Эдийн засаг, санхүүгийн тайлбар толийн нээлт{" "}
          </span>
          <span className="border-b pb-3 flex gap-1">
            <p className="font-bold">&quot;Мөнгөн ирвэс&quot;</p> шагнал
            гардуулах ёслол{" "}
          </span>
          <span className="border-b pb-3">UFE CENTURY FUND</span>
          <span className="pb-4">Чөлөөт арга хэмжээ </span>
        </div>
        <div className="text-[#3d4466] font-bold text-2xl uppercase">
          Онцлох арга хэмжээ{" "}
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 border-b pb-5 border-b-[#3d4466] text-[#3d4466]">
          <div className="w-[170px] h-[160px] border border-gray-800 rounded-xl">
            Санхүүчдын ундраа{" "}
          </div>
          <div className="w-[170px] h-[160px] border border-gray-800 rounded-xl">
            Санхүү эдийн засгийн тайлбар толь{" "}
          </div>
          <div className="w-[170px] h-[160px] border border-gray-800 rounded-xl">
            Эдийн засаг, санхүүгийн тайлбар толийн нээлт{" "}
          </div>
          <div className="w-[170px] h-[160px] border border-gray-800 rounded-xl">
            UFE Century fund{" "}
          </div>
        </div>
        {/* <div className="bg-black w-full h-1"/> */}
        <footer className="flex flex-col pb-10 gap-3 items-center">
          <p className="text-[#3d4466]  font-medium text-xs">
            Дэлгэрэнгүй мэдээлэл
          </p>
          <p className="text-[#3d4466] text-3xl font-bold">10000-2000</p>
          <div className="mt-5">
            {" "}
            <Image
              src={"/img/logo.png"}
              alt="background"
              width={80}
              height={80}
              // sizes="100%"
              className="object-cover"
            />
          </div>
          <p className="text-[#3d4466] text-xs">
            All rights reserved, UFE © 2024
          </p>
        </footer>
      </div>
    </>
  );
}
