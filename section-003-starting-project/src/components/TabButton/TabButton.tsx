import React, {ReactNode} from "react";
import './TabButton.css';

export interface TabButtonInterface {
  children: ReactNode;
  onSelect: () => void;
  isSelected: boolean;
}

export const TabButton = (props: TabButtonInterface) => {

  return (
    <li>
      <button className={props.isSelected ? 'active' : undefined} onClick={props.onSelect}>
        {props.children}
      </button>
    </li>
  )
}
