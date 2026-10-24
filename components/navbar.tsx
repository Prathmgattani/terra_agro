'use client'

import { useEffect, useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import { company, navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="/#home"
          className={cn(
            'flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight transition-colors',
            scrolled ? 'text-foreground' : 'text-white',
          )}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-none" style={{ fontSize: "32px", fontWeight: "700" }}>
            Terra Agro Food&apos;s
           {/*  <span className="block text-[0.65rem] font-medium tracking-[0.22em] text-brand-light uppercase">
              Food&apos;s
            </span> */}
          </span>
        </a>

        <ul
          className={cn(
            'hidden items-center gap-8 text-sm font-medium lg:flex',
            scrolled ? 'text-foreground/80' : 'text-white/85',
          )}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-brand-light after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-brand-light after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-brand-light hover:shadow-md sm:inline-flex"
          >
            Request Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-lg transition-colors lg:hidden',
              scrolled || open ? 'text-foreground' : 'text-white',
            )}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-border bg-background transition-[max-height] duration-500 ease-out lg:hidden',
          open ? 'max-h-[32rem] border-b' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Request Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
