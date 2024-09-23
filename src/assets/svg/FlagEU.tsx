import React from 'react';

export const FlagEu: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" {...props}>
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="12" fill="#003399"/>
      <g fill="#FFCC00">
        <circle cx="8" cy="6" r="0.4" transform="rotate(30 8 6)" />
        <circle cx="6.2" cy="3.2" r="0.4" />
        <circle cx="3.8" cy="3.2" r="0.4" />
        <circle cx="2.0" cy="6" r="0.4" />
        <circle cx="3.8" cy="8.8" r="0.4" />
        <circle cx="6.2" cy="8.8" r="0.4" />
        <circle cx="8" cy="6" r="0.4" transform="rotate(60 8 6)" />
        <circle cx="9.8" cy="3.2" r="0.4" />
        <circle cx="12.2" cy="3.2" r="0.4" />
        <circle cx="14" cy="6" r="0.4" />
        <circle cx="12.2" cy="8.8" r="0.4" />
        <circle cx="9.8" cy="8.8" r="0.4" />
      </g>
    </svg>
  </svg>
);
