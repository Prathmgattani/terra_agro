import { AtSign, Globe, Leaf, Send, Share2 } from 'lucide-react'
import { company, navLinks, products } from '@/lib/site-data'

const socials = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: AtSign, label: 'Email us', href: `mailto:${company.email}` },
  { icon: Send, label: 'WhatsApp', href: `https://wa.me/${company.whatsapp}` },
  { icon: Share2, label: 'Share', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-[#0e2410] text-white/80">
      <div className="border-b border-white/10">
        <iframe
          title="Terra Agro Food's location map"
          src="https://maps.google.com/maps?q=Kannad%20Chhatrapati%20Sambhajinagar%20Maharashtra&t=&z=11&ie=UTF8&iwloc=&output=embed"
          className="h-64 w-full grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-extrabold text-white">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary">
                <Leaf className="size-5" aria-hidden="true" />
              </span>
              Terra Agro Food&apos;s
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Premium manufacturer and global exporter of dehydrated vegetables, fruit powders,
              vegetable powders, herbs, spices and flakes.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-white uppercase">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-lime">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-white uppercase">
              Products
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <a href="#products" className="transition-colors hover:text-lime">
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-white uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>{company.location}</li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-lime">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone}`} className="transition-colors hover:text-lime">
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-white/50 sm:flex-row sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} Terra Agro Food&apos;s. All rights reserved.
          </p>
          <p>Manufacturer · Bulk Supplier · Exporter · OEM</p>
        </div>
      </div>
    </footer>
  )
}
