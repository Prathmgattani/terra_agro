import Image from 'next/image'
import { Compass, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Counter } from '@/components/counter'
import { coreValues } from '@/lib/site-data'

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 lg:py-32">
      {/* Part 1: Image Left, About Details Right */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 mb-24">
          <Reveal direction="left" className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dehydrated-Onion.png-plfb0L05yKvVUBbmvagwpadD8EWOCy.webp"
                alt="Dehydrated vegetables including red onions, white onions, and pink onions in wooden bowls"
                width={720}
                height={860}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 rounded-2xl border border-border bg-card p-6 shadow-xl sm:right-8">
              <p className="font-display text-4xl font-extrabold text-primary">
                <Counter value={100} suffix="%" />
              </p>
              <p className="mt-1 max-w-[8rem] text-sm text-muted-foreground">
                Natural, additive-free ingredients
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                About Terra Agro Food&apos;s
              </span>
              <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]">
                A trusted name in dehydrated food ingredient manufacturing
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Based in Kannad, Maharashtra, Terra Agro Food&apos;s manufactures and exports a
                complete range of dehydrated vegetables, fruit and vegetable powders, herbs, spices
                and flakes. We combine farm-fresh sourcing with advanced processing to serve food
                processing industries, FMCG brands, exporters and institutional buyers across the
                globe.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {coreValues.map((value, i) => (
                <Reveal
                  key={value.title}
                  delay={i * 90}
                  className="border-l-2 border-brand-light/60 pl-4"
                >
                  <h4 className="font-display text-sm font-bold text-foreground">{value.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Part 2: Mission & Vision Left, Image Right */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h3 className="font-display text-2xl leading-tight font-extrabold text-balance sm:text-3xl">
                Our Mission & Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We are committed to delivering premium quality dehydrated ingredients while maintaining
                the highest standards of food safety and sustainability.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-1">
              <Reveal delay={80} className="rounded-2xl border border-border bg-card p-6">
                <Target className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To deliver consistent, export-quality dehydrated ingredients that help our partners
                  build safe, natural and successful products.
                </p>
              </Reveal>
              <Reveal delay={160} className="rounded-2xl border border-border bg-card p-6">
                <Compass className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To be a globally preferred manufacturing partner for dehydrated foods, recognised
                  for quality, integrity and reliability.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal direction="right" className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/r-k-dihytion-shukrawar-peth-pune-dehydrated-vegetable-manufacturers-cw41e7bqsr-xyrxKIM5F8BEFgjC8ZrYe8NAhKXWiC.jpg"
                alt="Glass jars containing various dehydrated vegetables, herbs, and leafy greens"
                width={720}
                height={860}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
