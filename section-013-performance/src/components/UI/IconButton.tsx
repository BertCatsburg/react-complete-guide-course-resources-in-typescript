import {log} from '../../log.js';
import React, {ReactNode, memo} from 'react'

interface IconButtonInterface {
  children: ReactNode
  icon: (props: any) => React.JSX.Element
  onClick: () => void
}

export const IconButton = memo(({children, icon, ...props}: IconButtonInterface) => {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon"/>
      <span className="button-text">{children}</span>
    </button>
  );
})
