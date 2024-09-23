import React from 'react';

export const FlagUa: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" {...props}>
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="6" fill="#0051BA"/>
      <rect y="6" width="16" height="6" fill="#FFD700"/>
    </svg>
  </svg>
);
