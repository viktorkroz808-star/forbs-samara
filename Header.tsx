
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          <span className="text-amber-400">Forbes</span> Samara
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-medium text-slate-300">
          Топ-10 самых богатых инженеров Самары
        </p>
      </div>
    </header>
  );
};

export default Header;
