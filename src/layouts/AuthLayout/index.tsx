/** @format */

import { Outlet } from "react-router-dom";
import { Mail } from "lucide-react";
import { assets } from "@/assets/assets";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AuthLayout = () => {
  return (
    <div className="h-screen flex">
      {/* Left part */}
      <div className="w-1/2 flex flex-col">
        {/* logo container */}
        <div className="h-24 pl-5 flex items-center">
          <img src={assets.akibalogo} alt="akiba logo" className="h-full" />
        </div>

        {/* Main content (information is subjective to change) */}
        <div className="flex-1 flex items-center justify-center">
          <Outlet />
        </div>

        {/* Footer at bottom */}
        <footer className="w-full text-gray-600 font-inter font-light">
          <div className="flex justify-between p-6 px-15 text-sm font-400 text-inter ">
            {/* <p>© Akiba Pamoja 2025</p> */}
            <p className="flex items-center gap-1 font-400 text-inter text-xs">
              <Mail /> <span>Akiba Pamoja 2025</span>
            </p>
            <p className="flex items-center gap-1 font-400 text-inter text-gray-600 text-xs">
              <Mail /> <span>info@spaceyatech.com</span>
            </p>
          </div>
        </footer>
      </div>

      {/* Right Part Image Carousel */}
      <div className="w-1/2 h-full relative rounded-tl-[40px] rounded-bl-[40px] overflow-hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full h-full rounded-tl-[40px] rounded-bl-[40px] overflow-hidden"
          opts={{ loop: true }}
        >
          <CarouselContent>
            <CarouselItem className="w-full h-full">
              <div className="relative w-full h-full transition-opacity durtion-500 ease-in-out">
                <img
                  src={assets.wamama}
                  alt="carousel"
                  className="w-full h-screen object-cover"
                />

                <div
                  className="absolute bottom-0 right-0 flex flex-col w-full h-fit pt-13 pb-9.5 pl-10 rounded-bl-[40px] gap-3"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(120, 120, 120, 0.00) 0%, rgba(54, 54, 54, 0.80) 58.17%)",
                  }}
                >
                  <q className="text-white text-3xl">
                    Siku hizi kupata message ni instant juu ya Akiba Pamoja.
                  </q>
                  <div className="font-inter text-white font-semibold">
                    <p className="text-lg  leading-7">Esther Kazdo</p>
                    <p className="text-sm leading-9.5 font-light">
                      Secretary, Kaya Women’s Group
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full h-full">
              <div className="relative w-full h-full transition-opacity duration-500 ease-in-out">
                <img
                  src="/carousel2.png"
                  alt="carousel"
                  className="w-full h-screen object-cover"
                />

                <div
                  className="absolute bottom-0 right-0 flex flex-col w-full h-fit pt-13 pb-9.5 pl-10 rounded-bl-[40px] gap-3"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(120, 120, 120, 0.00) 0%, rgba(54, 54, 54, 0.80) 58.17%)",
                  }}
                >
                  <q className="text-white text-3xl">
                    Tulikuwa tukitumia Whatsapp group but it was so hectic. Hii
                    app vitu ni rahisi sana
                  </q>
                  <div className="font-inter text-white ">
                    <p className="text-lg  leading-7 font-semibold">
                      DeKUT Bodachama
                    </p>
                    <p className="text-sm leading-9.5 font-semibold">
                      Nyeri County
                    </p>
                    <p className="text-base font-light w-55 lg:w-fit">
                      Bodachama is a chama of 56 riders from
                      <br /> DeKUT zone in Nyeri County, Kenya.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Carousel Buttons - bottom */}
          <div className="absolute bottom-15 right-18 flex flex-col gap-2">
            <CarouselPrevious className="bg-transparent p-2 rounded-full cursor-pointer border border-white/50 text-white font-extrabold size-10" />
            <CarouselNext className="bg-transparent p-2 rounded-full cursor-pointer border border-white/50 text-white font-extrabold size-10" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AuthLayout;
