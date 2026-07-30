import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { gallery } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Gallery
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]">
            Inside our manufacturing world
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              direction="scale"
              delay={(i % 4) * 70}
              className={cn(
                'group relative overflow-hidden rounded-2xl',
                item.span === 'tall' && 'row-span-2',
                item.span === 'wide' && 'col-span-2',
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-sm font-semibold text-white">{item.alt}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
