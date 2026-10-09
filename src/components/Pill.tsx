/** Pastilă: DOAR pentru termenii „Căutate des" și filtrele de regim (colț 24px).
 *  Butoanele de acțiune nu sunt pastile. */
export function Pill({ children, href = '#', tone = 'paper' }: { children: string; href?: string; tone?: 'paper' | 'white' }) {
  return (
    <a className={'pill pill--' + tone} href={href}>
      {children}
    </a>
  )
}
