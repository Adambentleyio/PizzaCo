import React from 'react';

export default function Footer() {
  return (
    <footer className="center">
      <p>&copy; Pizza Co. {new Date().getFullYear()}</p>
    </footer>
  );
}
