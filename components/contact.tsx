'use client'

import { useState, type FormEvent } from 'react'
import { CircleCheckBig, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

export function Contact() {
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const next: Errors = {}
    if (name.length < 2) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.'
    if (message.length < 10) next.message = 'Please add a few more details.'

    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
      form.reset()
    }
  }

  const details = [
    { icon: MapPin, label: 'Address', value: company.location },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
  ]

  return (
    <section id="contact" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-xl lg:grid-cols-2">
          {/* Info panel */}
          <div className="relative bg-primary p-8 text-primary-foreground sm:p-12">
            <span className="text-sm font-semibold tracking-[0.2em] text-lime uppercase">
              Get In Touch
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl">
              Request a quote or product sample
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Tell us about your requirement and our team will respond within one business day with
              specifications and pricing.
            </p>

            <ul className="mt-10 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="size-5 text-lime" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-primary-foreground/60 uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="mt-1 block font-medium hover:text-lime">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="p-8 sm:p-12">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <CircleCheckBig className="size-14 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl font-extrabold">Thank you!</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Your inquiry has been received. Our team will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <Field label="Full Name" name="name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className={inputClass(!!errors.name)}
                  />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className={inputClass(!!errors.email)}
                    />
                  </Field>
                  <Field label="Company" name="company" optional>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className={inputClass(false)}
                    />
                  </Field>
                </div>
                <Field label="Message" name="message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Which products and quantities are you interested in?"
                    className={cn(inputClass(!!errors.message), 'resize-none')}
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-brand-light"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20',
    hasError ? 'border-destructive' : 'border-border',
  )
}

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string
  name: string
  error?: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {optional && <span className="ml-1 text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  )
}
