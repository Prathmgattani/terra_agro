import Image from 'next/image'
import { ArrowRight, Leaf } from 'lucide-react'
import { Counter } from '@/components/counter'
import { heroStats } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Assortment of premium dehydrated vegetables and fruit powders"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0e2410]/92 via-[#122c14]/78 to-[#0e2410]/55"
        aria-hidden="true"
      />

      {/* Floating organic leaves */}
      <Leaf
        className="absolute top-32 right-[12%] -z-10 size-16 rotate-12 text-brand-light/25 [animation:float_7s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <Leaf
        className="absolute bottom-40 right-[28%] -z-10 size-10 -rotate-12 text-lime/25 [animation:float_9s_ease-in-out_infinite]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-lime" />
            Manufacturer · Bulk Supplier · Exporter
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold text-balance text-white sm:text-5xl lg:text-6xl">
            Premium Manufacturer &amp; Global Supplier of Dehydrated Vegetables, Fruit Powders &amp; Flakes
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/80">
            Delivering export-quality dehydrated ingredients with consistent quality, advanced
            processing, hygienic manufacturing and reliable bulk supply solutions.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-black/20 transition-all hover:bg-brand-light hover:shadow-xl"
            >
              Explore Products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
            >
              Request Quote
            </a>
          </div>
        </div>

        {/* Floating statistics */}
        {/* <dl className="mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-white/5 px-6 py-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </dl> */}
      </div>
    </section>
  )
}
