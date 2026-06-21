"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  {
    src: "/assets/carousel/pet-shop-reception.png",
    alt: "Premium pet care shop reception and retail area",
  },
  {
    src: "/assets/carousel/pet-shop-bathing.png",
    alt: "Premium pet bathing and washing area",
  },
  {
    src: "/assets/carousel/pet-shop-grooming.png",
    alt: "Premium pet drying and grooming area",
  },
];

export function ProcessCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showSlide = (nextIndex: number) => {
    setIndex((nextIndex + slides.length) % slides.length);
  };

  return (
    <div
      className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-lg border border-line bg-paper shadow-soft"
      aria-label="Store environment carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <figure
            className="relative min-w-full overflow-hidden aspect-[16/9]"
            key={slide.src}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover"
              priority={slide.src.includes("reception")}
            />
          </figure>
        ))}
      </div>

      <button
        className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/85 text-4xl leading-none text-sage-dark shadow-soft transition hover:bg-white sm:left-5"
        type="button"
        aria-label="Previous image"
        onClick={() => showSlide(index - 1)}
      >
        <span aria-hidden="true">&lsaquo;</span>
      </button>
      <button
        className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/85 text-4xl leading-none text-sage-dark shadow-soft transition hover:bg-white sm:right-5"
        type="button"
        aria-label="Next image"
        onClick={() => showSlide(index + 1)}
      >
        <span aria-hidden="true">&rsaquo;</span>
      </button>

      <div
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2"
        aria-label="Carousel pages"
      >
        {slides.map((slide, dotIndex) => (
          <button
            className={`h-2.5 rounded-full transition-all ${
              dotIndex === index ? "w-8 bg-coral" : "w-2.5 bg-white/80"
            }`}
            type="button"
            aria-label={`Show image ${dotIndex + 1}`}
            aria-current={dotIndex === index}
            key={slide.src}
            onClick={() => showSlide(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
}
