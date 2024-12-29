import React from 'react';

export default function LanguageIcon({ component }: { component: React.ElementType }) {
  if (!component) {
    return null;
  }

  const Component = component; // Alias for better readability
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className='size-0 absolute'>
        <linearGradient id='tech-icon-gradient'>
          <stop offset="0%" stopColor='rgb(110, 231, 183)' />
          <stop offset="100%" stopColor='rgb(56, 189, 248)' />
        </linearGradient>
      </svg>
    </>
  );
}