"use client"

import React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const images = [
    { src: "https://i.ibb.co/YFbPQDxt/2-site-Foquinha-3.png", alt: "Foquinha feature" },
    { src: "https://i.ibb.co/pvFr8rkt/2-site-Foquinha-2.png", alt: "Foquinha feature" },
    { src: "https://i.ibb.co/XkM9JdDJ/2-site-Foquinha-1.png", alt: "Foquinha feature" },
]

export function AvailabilityBadge() {
    const plugin = React.useRef(
        Autoplay({ delay: 2200, stopOnInteraction: false })
    )

    return (
        <section className="bg-white py-8">
            <Carousel
                plugins={[plugin.current]}
                opts={{ loop: true, align: "center" }}
                className="w-full"
            >
                <CarouselContent className="-ml-6">
                    {images.map((img, i) => (
                        <CarouselItem key={i} className="pl-6 basis-[75%] sm:basis-[50%] md:basis-[38%]">
                            <div className="mx-auto max-w-[238px] overflow-hidden rounded-xl" style={{ maxHeight: "180px" }}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={476}
                                    height={360}
                                    className="w-full h-auto object-cover object-top"
                                    loading="lazy"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
