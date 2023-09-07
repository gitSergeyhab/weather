import { ReactNode } from 'react';

export function TopButtonSection ({children}: {children: ReactNode}) {
  return (
    <section className="sort-form weather-content__sort">
      <h2 className="visually-hidden">Форма сортировки</h2>
      <form action="#" method="GET">
        {children}
      </form>
    </section>
  )
}
