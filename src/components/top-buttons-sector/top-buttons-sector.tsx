import { ReactNode } from 'react';

export function TopButtonSector ({children}: {children: ReactNode}) {
  return (
    <div className="sort-form__group">{children}</div>
  )
}
