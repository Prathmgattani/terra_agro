import {
  Beer,
  Cake,
  ChefHat,
  Factory,
  HeartPulse,
  Hotel,
  Pill,
  Salad,
  UtensilsCrossed,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { industries } from '@/lib/site-data'

const icons = [Factory, Cake, Beer, Hotel, UtensilsCrossed, Pill, HeartPulse, ChefHat, Salad]

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Industries We Serve
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]">
            Trusted across the food value chain
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={industry}
                delay={(i % 3) * 80}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-light/50 hover:shadow-md"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-display font-bold text-balance">{industry}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
