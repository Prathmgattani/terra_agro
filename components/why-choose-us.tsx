import {
  Award,
  Boxes,
  FlaskConical,
  Leaf,
  PackageCheck,
  Settings2,
  Truck,
  Workflow,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whyChooseUs } from '@/lib/site-data'

const icons = [Award, Leaf, Settings2, FlaskConical, Boxes, PackageCheck, Truck, Workflow]

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]">
            Built for demanding industrial buyers
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Everything we do is engineered around consistency, safety and dependable global supply.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={item.title}
                delay={(i % 4) * 80}
                className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-brand-light/50 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-9" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-[32px] font-bold">{item.title}</h3>
                <p className="mt-2 text-[18px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
