import {ReactNode, useEffect} from 'react';
import {createPortal} from 'react-dom';


interface IPortal {
  children: ReactNode,
  elementId: string
}
export function Portal({ children, elementId}: IPortal) {
    const mount = document.getElementById(elementId);
    const el = document.createElement('div');

    useEffect(() => {
      // добавляем свой див к искомому элементу
      if (mount) mount.appendChild(el);
      return () => {
          // удаляем элемент от искомого при завершении компоненты
          if (mount) mount.removeChild(el);
      }
    }, [ el, mount ])

    // отменяем отрисовку при отсутствии искомого элемента
    if (!mount) return null;
    // собственно, пририсовываем React-элемент в div к искомому HTML
    return createPortal(children, el);
}
