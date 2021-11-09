import React from 'react';

export default function Styleguide() {
  return (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-primary)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-primary-light)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-secondary)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-tertiary)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-font-paragraph)',
            borderRadius: '50%',
          }}
        ></div>
      </div>
      <h1>Heading 1</h1>
      <span style={{ color: 'var(--color-primary)' }}>CTA simple text</span>
      <span style={{ color: 'var(--color-secondary)' }}>
        CTA secondary simple text
      </span>
      <span style={{ color: 'var(--color-secondary-light)' }}>
        No documents available
      </span>
      <div
        style={{
          width: '10rem',
          height: '3rem',
          background: 'var(--color-primary)',
          borderRadius: '15rem',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <span style={{ color: 'var(--color-font-light)' }}>CTA</span>
      </div>
      <p style={{ color: 'var(--color-font-paragraph)' }}>Paragraph</p>
    </div>
  );
}
