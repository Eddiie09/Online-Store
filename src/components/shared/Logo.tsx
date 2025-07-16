// src/components/shared/Logo.jsx
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/"
     className={`text-2xl font-bold tracking-tighter transition-all`}>
      {/* Desktop: Texto completo */}
      <p className="hidden lg:block">
        Celulares
        <span className="text-cyan-600">Baratos</span>
      </p>

      {/* Mobile: Abreviatura */}
      <p className="flex text-3xl lg:hidden">
        <span className="-skew-x-6">C</span>
        <span className="text-cyan-600 skew-x-6">B</span>
      </p>
    </Link>
  );
};

