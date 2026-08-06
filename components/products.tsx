import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { products } from '@/lib/site-data'

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Product Categories
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]">
              A complete range of dehydrated ingredients
            </h2>
          </Reveal>
          {/* <Reveal delay={100}>
              <p className="max-w-sm text-muted-foreground">
              Every category is produced to precise, customer-defined specifications and available
              for bulk and OEM supply.
            </p>  
          </Reveal> */}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal
              key={product.slug}
              direction="scale"
              delay={(i % 3) * 90}
              as="article"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[32px]  font-bold">{product.name}</h3>
                <p className="mt-3 flex-1 text-[18px] leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-brand-light"
                >
                  Learn More
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}

          <Reveal
            direction="scale"
            delay={180}
            className="flex flex-col justify-center rounded-3xl bg-primary p-8 text-primary-foreground"
          >
            <h3 className="font-display text-2xl font-extrabold text-balance">
              Need a custom formulation?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
              We develop bespoke blends, mesh sizes and packaging for your exact application and
              market.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
            >
              Talk to our team
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
