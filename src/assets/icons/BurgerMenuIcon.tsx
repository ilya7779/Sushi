import {FC, SVGProps} from 'react';

export const BurgerMenuIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
      <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};