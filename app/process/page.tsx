import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowDown, ArrowRight, Check, Droplets, Gauge, Layers3, Leaf, PackageCheck,
  ShieldCheck, Sparkles, Thermometer, Wind, Zap,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/reveal'
import { processSteps, products } from '@/lib/site-data'

export const metadata: Metadata = {
  title: { absolute: 'Our Process & Heat Pump Drying Technology | Terra Agro Foods' },
  description: 'Explore Terra Agro Foods’ manufacturing process, heat pump drying technology and approach to quality dried fruit, vegetable and food ingredients.',
}

const benefits = [
  { icon: Thermometer, title: 'Controlled Temperature', text: 'Managed drying temperatures can help reduce excessive heat exposure for suitable ingredients.' },
  { icon: Leaf, title: 'Colour and Appearance', text: 'Appropriate drying conditions can help maintain the natural appearance of fruits, vegetables and herbs.' },
  { icon: Sparkles, title: 'Flavour and Nutrient Considerations', text: 'Gentler drying conditions may help retain certain heat-sensitive flavour compounds and nutrients. Actual retention depends on the ingredient and drying parameters.' },
  { icon: Zap, title: 'Energy Efficiency', text: 'Heat pump systems recover and reuse heat, which can reduce energy consumption compared with less efficient drying systems under suitable operating conditions.' },
  { icon: Gauge, title: 'Consistent Drying', text: 'Managed temperature, airflow and humidity can support repeatable processing and more uniform moisture removal.' },
  { icon: Layers3, title: 'Product Versatility', text: 'Suitable heat pump drying parameters can be developed for different fruits, vegetables, herbs and other food ingredients.' },
]

const comparison = [
  ['Drying principle', 'Heated air is passed through the product to remove moisture.', 'Uses a heat pump system to provide controlled drying conditions, commonly with heat recovery.'],
  ['Temperature control', 'Operating temperature depends on the equipment and process settings.', 'Can support controlled, relatively low-temperature drying.'],
  ['Drying time', 'Depends on temperature, airflow, product thickness and moisture.', 'Depends on the same product factors and the system’s operating conditions.'],
  ['Colour and appearance', 'Excessive heat can cause colour changes.', 'Suitable lower-temperature conditions can help retain colour.'],
  ['Flavour and nutrients', 'Heat-sensitive compounds may degrade under excessive heat exposure.', 'Gentler conditions may help preserve selected heat-sensitive compounds.'],
  ['Energy consumption', 'Varies with heater type, system efficiency and operating conditions.', 'Heat recovery can improve efficiency and reduce energy demand under suitable conditions.'],
  ['Product consistency', 'Depends on airflow distribution, temperature and process control.', 'Managed drying conditions can support uniformity and repeatability.'],
  ['Operating costs', 'Depend on energy prices, equipment efficiency and maintenance.', 'Potential savings depend on the system, operating profile, product and local energy costs.'],
  ['Best application', 'Suitable for many conventional drying applications.', 'Worth considering when controlled, relatively low-temperature drying and energy efficiency are priorities.'],
]

const productGroups = [
  { title: 'Fruit Powders', product: products.find((p) => p.slug === 'fruit-powders')! },
  { title: 'Vegetable Powders', product: products.find((p) => p.slug === 'vegetable-powders')! },
  { title: 'Dried Herbs', product: products.find((p) => p.slug === 'herbs')! },
  { title: 'Spice Ingredients', product: products.find((p) => p.slug === 'spices')! },
]

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#1b1b1b]">
        <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
          <Image src="/images/gallery-dehydration.png" alt="Food ingredients arranged on drying trays in a processing facility" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081a0b]/95 via-[#0b2410]/85 to-[#0b2410]/55" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.72fr]">
            <div>
              <p className="text-xs font-bold tracking-[.22em] text-[#a4d65e] uppercase">Our Process &amp; Technology</p>
              <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] font-extrabold text-balance sm:text-5xl text-white lg:text-6xl">From Farm-Fresh Produce to High-Quality Ingredients</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Discover our controlled manufacturing journey and heat pump drying technology, designed to support product quality, consistency and efficient processing.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#journey" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8cc63e] px-6 py-3.5 font-semibold text-[#102411] transition hover:bg-[#a4d65e]">Explore Our Process <ArrowDown className="size-4" /></a>
                <a href="#heat-pump" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-[#8cc63e] hover:text-[#b3e66e]">Why Heat Pump Drying? <ArrowRight className="size-4" /></a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                <Image src="/images/gallery-produce.png" alt="Fresh produce selected for ingredient processing" width={760} height={560} className="aspect-[4/3] rounded-[1.5rem] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 bg-[#f2f6f0] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-bold tracking-[.2em] text-[#a4d65e] uppercase">Nine stages, one considered process</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Our Manufacturing Journey</h2>
              <p className="mt-4 text-[#5b6b5c]">From selecting raw ingredients to preparing finished orders, each stage has a clear role in the journey.</p>
            </Reveal>
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => {
                const isDrying = step.title === 'Dehydration'
                return <Reveal as="li" key={step.title} delay={(index % 3) * 70} className={`relative rounded-2xl border p-6 shadow-sm ${isDrying ? 'border-[#8cc63e]/70 bg-[#eaf4dd] ring-1 ring-[#8cc63e]/20' : 'border-[#e2e9e2] bg-white'}`}>
                  <div className="flex items-center justify-between"><span className={`font-display text-4xl font-extrabold ${isDrying ? 'text-[#5b8d27]' : 'text-[#1b1b1b]/15'}`}>{String(index + 1).padStart(2, '0')}</span>{isDrying && <span className="rounded-full bg-[#8cc63e] px-3 py-1 text-[10px] font-bold tracking-wider text-[#102411] uppercase">Core technology</span>}</div>
                  <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b6b5c]">{step.description}</p>
                </Reveal>
              })}
            </ol>
            <p className="mt-5 text-xs text-[#718071]">Quality inspection, packaging and dispatch reflect the stages listed on our existing website.</p>
          </div>
        </section>

        <section id="heat-pump" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[.78fr_1fr] lg:items-center">
              <Reveal className="relative overflow-hidden rounded-[2rem] border border-[#e2e9e2] shadow-lg">
                <Image src="/images/gallery-dehydration.png" alt="Dehydration trays holding ingredients during controlled drying" width={900} height={700} className="aspect-[4/3] h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b2410]/90 to-transparent p-7 pt-16"><p className="flex items-center gap-2 text-sm font-semibold text-[#c2ef88]"><Wind className="size-4" /> Controlled drying conditions</p></div>
              </Reveal>
              <Reveal>
                <p className="text-xs font-bold tracking-[.2em] text-[#a4d65e] uppercase">Our drying approach</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Why We Use Heat Pump Drying</h2>
                <p className="mt-5 leading-relaxed text-[#5b6b5c]">At Terra Agro Foods, heat pump drying supports a controlled approach to moisture removal. By managing drying temperature and humidity, this technology can help preserve the natural characteristics of food ingredients while improving process efficiency.</p>
                <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#8cc63e]/35 bg-[#f2f8e9] p-4 text-sm leading-relaxed text-[#405142]"><Droplets className="mt-0.5 size-5 shrink-0 text-[#5b8d27]" /> Drying outcomes vary with the ingredient, preparation, load and operating parameters. Product specifications should be confirmed for each application.</div>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={(index % 3) * 70} className="rounded-2xl border border-[#e2e9e2] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#8cc63e]/60 hover:shadow-md"><span className="flex size-11 items-center justify-center rounded-xl bg-[#eaf4dd] text-[#5b8d27]"><Icon className="size-5" aria-hidden="true" /></span><h3 className="mt-5 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#5b6b5c]">{text}</p></Reveal>)}
            </div>
          </div>
        </section>

        <section className="bg-[#f2f6f0] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold tracking-[.2em] text-[#5b8d27] uppercase">Technology comparison</p><h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Hot Air Drying vs. Heat Pump Drying</h2><p className="mt-4 text-[#5b6b5c]">Different drying technologies offer different operating characteristics. Our heat pump drying approach focuses on controlled processing, product quality and efficient heat utilisation.</p></Reveal>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-[#e2e9e2] bg-white shadow-sm">
              <div className="grid min-w-[700px] grid-cols-[minmax(160px,.65fr)_1fr_1fr] bg-[#eaf2ea] text-left text-xs font-bold uppercase tracking-wide text-[#1e3a20] sm:text-sm"><div className="p-3 sm:p-5">Consideration</div><div className="p-3 sm:p-5">Hot Air Dryer</div><div className="border-l border-[#8cc63e]/35 bg-[#e0efcf] p-3 text-[#1e3a20] sm:p-5">Heat Pump Dryer <span className="mt-1 block text-[9px] font-medium tracking-normal text-[#5b8d27] sm:text-[10px]">Terra Agro approach</span></div></div>
              {comparison.map(([label, hotAir, heatPump], i) => <div key={label} className={`grid min-w-[700px] grid-cols-[minmax(160px,.65fr)_1fr_1fr] text-xs leading-relaxed sm:text-sm ${i % 2 ? 'bg-[#f8faf8]' : 'bg-white'}`}><div className="border-t border-[#e2e9e2] p-3 font-semibold text-[#1b1b1b] sm:p-5">{label}</div><div className="border-t border-[#e2e9e2] p-3 text-[#5b6b5c] sm:p-5">{hotAir}</div><div className="border-t border-l border-[#8cc63e]/25 bg-[#f2f8e9] p-3 text-[#405142] sm:p-5">{heatPump}</div></div>)}
            </div>
            <p className="mt-4 text-center text-xs text-[#718071]">Actual performance depends on the equipment, ingredient and operating conditions. No single technology is best for every product or facility.</p>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-3xl"><p className="text-xs font-bold tracking-[.2em] text-[#5b8d27] uppercase">Made for ingredient applications</p><h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Technology That Supports Ingredient Quality</h2><p className="mt-4 text-[#5b6b5c]">Explore categories from the Terra Agro Foods catalogue.</p></Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{productGroups.map(({ title, product }, index) => <Reveal key={title} delay={index * 60}><a href="/#products" className="group block overflow-hidden rounded-2xl border border-[#e2e9e2] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#8cc63e]/60 hover:shadow-md"><div className="relative aspect-[4/3]"><Image src={product.image} alt={`${product.name} ingredient products`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="flex items-center justify-between p-5"><h3 className="font-display font-bold">{title}</h3><ArrowRight className="size-4 text-[#5b8d27] transition-transform group-hover:translate-x-1" /></div></a></Reveal>)}</div>
          </div>
        </section>

        <section className="bg-[#f2f6f0] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal><p className="text-xs font-bold tracking-[.2em] text-[#5b8d27] uppercase">Quality through every stage</p><h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Quality Begins With the Process</h2><p className="mt-5 leading-relaxed text-[#5b6b5c]">Suitable raw materials, careful handling and hygiene support a sound starting point. Controlled moisture removal and attention to consistency help prepare ingredients for their intended use, while appropriate packaging helps protect product quality during storage and transport.</p></Reveal>
              <Reveal className="grid gap-3 sm:grid-cols-2">{[['Raw materials', Leaf], ['Moisture control', Droplets], ['Hygienic handling', ShieldCheck], ['Consistent processing', Gauge], ['Suitable packaging', PackageCheck], ['Customer requirements', Check]].map(([label, Icon]) => {const IconComponent = Icon as typeof Check; return <div key={label as string} className="flex items-center gap-3 rounded-xl border border-[#e2e9e2] bg-white p-4 shadow-sm"><IconComponent className="size-5 text-[#5b8d27]" /><span className="text-sm font-medium text-[#405142]">{label as string}</span></div>})}</Reveal>
            </div>
            <div className="mt-14 rounded-3xl border border-[#8cc63e]/35 bg-gradient-to-br from-[#eaf4dd] to-white p-8 shadow-sm sm:p-12"><div className="mx-auto max-w-3xl text-center"><h2 className="font-display text-3xl font-extrabold sm:text-4xl">Looking for Quality Dried Ingredients?</h2><p className="mt-4 text-[#5b6b5c]">Talk to our team about your ingredient requirements, product specifications and bulk supply enquiries.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8cc63e] px-6 py-3.5 font-semibold text-[#102411] transition hover:bg-[#a4d65e]">Request a Quote <ArrowRight className="size-4" /></a><a href="/#products" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4dfd1] px-6 py-3.5 font-semibold text-[#1e3a20] transition hover:border-[#8cc63e]">Explore Our Products <ArrowRight className="size-4" /></a></div></div></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
