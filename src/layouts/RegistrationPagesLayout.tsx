import { Link, Outlet } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const RegistrationPagesLayout = () => {
  return (
    <div className="w-screen h-screen font-geist bg-white flex flex-col md:flex-row relative">
      <div className="flex flex-col pt-3 px-8 md:w-1/2 lg:w-3/7">
        {/* navigation on mobile */}
        <div className="md:hidden flex justify-between">
          <Button variant="ghost" size="sm" className="mr-4 p-2">
            <Link to="/">
              <ArrowLeft size={24} className="text-gray-600" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="mr-4 p-2">
            <Link to="/auth/register/display-name">
              <ArrowRight size={24} className="text-gray-600" />
            </Link>
          </Button>
        </div>
        {/* logo on desktop */}
        <div className="hidden md:block">
          <img src="/akiba_logo.png" alt="logo" className="object-cover" />
        </div>
        <div className="w-full my-auto h-full flex flex-col justify-center items-center py-20">
          <Outlet />
        </div>
      </div>

      {/* image on desktop */}
      <div className="hidden md:flex md:w-1/2 lg:w-4/7 h-screen relative">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full h-full "
          opts={{ loop: true }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full h-full">
                <img
                  src="/carousel1.png"
                  alt="carousel"
                  className="w-full h-screen object-cover rounded-l-[80px]"
                />

                <div
                  className="absolute bottom-0 right-0 flex flex-col w-full h-fit pt-13 pb-9.5 pl-10 rounded-bl-[80px] gap-3"
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
              <div className="relative w-full h-full">
                <img
                  src="/carousel2.png"
                  alt="carousel"
                  className="w-full h-screen object-cover rounded-l-[80px]"
                />

                <div
                  className="absolute bottom-0 right-0 flex flex-col w-full h-fit pt-13 pb-9.5 pl-10 rounded-bl-[80px] gap-3"
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
                    <p className="text-lg  leading-7 font-semibold">DeKUT Bodachama</p>
                    <p className="text-sm leading-9.5 font-semibold">Nyeri County</p>
                    <p className="text-base font-light w-55 lg:w-fit">
                      Bodachama is a chama of 56 riders from
                      <br /> DeKUT zone in Nyeri County, Kenya.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="bg-red-700 flex flex-col absolute bottom-15 right-18">
            <CarouselPrevious className=" bg-transparent p-2 rounded-full cursor-pointer border border-white/50 text-white font-extrabold size-10" />

            <CarouselNext className=" bg-transparent p-2 rounded-full cursor-pointer border border-white/50 text-white font-extrabold size-10" />
          </div>
        </Carousel>
      </div>
      {/* footer on mobile  */}
      <div className="md:hidden  bg-background-gray pt-4 pb-6 text-center w-screen absolute bottom-0 left-0">
        <span className="w-full text-[#4d4d4d]">
          Already belong to a chama?&nbsp;
          <span className="text-primary underline font-medium">Log in</span>
        </span>
      </div>
      {/* footer on desktop */}
      <div className="w-3/7 hidden md:flex justify-between text-gray-600 font-normal leading-5 text-sm absolute bottom-1 left-0 px-8 ">
        <p className="">&copy; Akiba Pamoja 2025</p>
        <div className="flex items-center gap-1">
          <img src="/mail.svg" alt="mail" className="inline size-4" />
          <p>info@spaceyatech.com</p>
        </div>
      </div>
    </div>
  );
};
