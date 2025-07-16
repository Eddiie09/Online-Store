import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// src/constants/links.js
export const NavbarLinks = [
  { id: 1, title: 'Inicio', href: '/' },
  { id: 2, title: 'Celulares', href: '/celulares' },
  { id: 3, title: 'Nosotros', href: '/nosotros' },
];



export const socialLinks = [
  { id: 1, title: 'Facebook', href: 'https://www.facebook.com', icon: <FaFacebook /> },
  { id: 2, title: 'Instagram', href: 'https://www.instagram.com', icon: <FaInstagram /> },
  { id: 3, title: 'Twitter', href: 'https://www.twitter.com', icon: <FaTwitter /> },
  { id: 4, title: 'LinkedIn', href: 'https://www.linkedin.com', icon: <FaLinkedin /> },
];
