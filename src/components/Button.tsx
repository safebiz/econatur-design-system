import type { ReactNode } from 'react'

type Variant = 'ink' | 'accent' | 'outline' | 'brand'

/** Butoane dreptunghiulare, colț 12px — NU pastilă. Înălțime minimă 44px.
 *  ink     = negru plin, acțiunea principală a secțiunii („Vezi produsele", Coș)
 *  accent  = verde text-sigur #4A6844 („Caută", „Adaugă")
 *  outline = contur negru, a doua acțiune
 *  brand   = verdele siglei cu text negru — DOAR pentru drumul firmelor */
export function Button({
  children,
  variant = 'ink',
  href = '#',
}: {
  children: ReactNode
  variant?: Variant
  href?: string
}) {
  return (
    <a className={'btn btn--' + variant} href={href}>
      {children}
    </a>
  )
}
