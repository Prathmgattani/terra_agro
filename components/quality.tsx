import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { qualityPoints } from '@/lib/site-data'

export function Quality() {
  return (
    <section id="quality" className="scroll-mt-20 py-24 lg:py-32" style='display:none'>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Quality Assurance
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]">
              Quality you can measure in every batch
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From incoming raw material to the final sealed pack, our quality systems are built on
              rigorous testing, hygiene and international compliance.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-5">
            {qualityPoints.map((point, i) => (
              <Reveal key={point.title} as="li" delay={i * 70} className="flex gap-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display font-bold">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal direction="right" className="relative">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/quality-lab.png"
              alt="Terra Agro Food's quality control laboratory testing ingredient samples"
              width={720}
              height={840}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -left-4 top-8 rounded-2xl border border-border bg-card px-6 py-4 shadow-xl sm:left-8">
            <p className="font-display text-sm font-bold text-primary">Batch-level testing</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Moisture · Microbial · Pesticide · Colour
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
