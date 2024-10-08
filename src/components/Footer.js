import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center py-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} tjsyte. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
