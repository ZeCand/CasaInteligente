"use client"

import { Button } from "@/components/ui/button";
import { CirclePlay, Download } from "lucide-react";
import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { XIcon } from "lucide-react";



type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}



const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};









export default function HomeIoPage ({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];




  return (
    // Adicione 'relative' à div principal para que os elementos posicionados absolutamente funcionem corretamente dentro dela
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative" id="HomeIO">
      {/* Imagem de fundo posicionada absolutamente, a ocupar todo o espaço */}
      <img
        src="HomeIO.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0" // z-0 para ficar por baixo
      />

      {/* Conteúdo da página, agora numa camada superior (z-10) */}
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0 relative z-10"> {/* z-10 para ficar por cima */}
        <div className="my-auto   p-4 rounded-[20px]">
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight text-green-400">
            Home I/O
          </h1>
          <p className="mt-6 max-w-[60ch] font-bold text-2xl text-neutral-100">
            Simulation of a smart house and surrounding environment
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button
              size="lg"
              className="rounded-full text-base"
              onClick={() => {
                // Trigger file download
                const link = document.createElement("a");
                link.href = "/Save.XML";
                link.download = "Nossa_Casa.XML";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Nossa Casa <Download className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
              onClick={() => setIsVideoOpen(true)}
            >
              <CirclePlay className="!h-5 !w-5" /> Preview
            </Button>
          </div>
        </div>
        {/* Este div está vazio agora, pois a imagem foi movida para fora do grid */}
        <div className="hidden lg:block"></div> 
      </div>

    <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
            >
              <motion.button className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black">
                <XIcon className="size-5" />
              </motion.button>
              <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white">
                <iframe
                  src={videoSrc}
                  className="size-full rounded-2xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};
