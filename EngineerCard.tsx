import React from 'react';
import type { Engineer } from '../types';

interface EngineerCardProps {
  engineer: Engineer;
}

const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M18.97 1.97a.75.75 0 011.06 0l1.5 1.5a.75.75 0 01-1.06 1.06L19 3.06l-1.5 1.5a.75.75 0 01-1.06-1.06l1.5-1.5zM3.97 1.97a.75.75 0 011.06 0l1.5 1.5a.75.75 0 01-1.06 1.06L4 3.06l-1.5 1.5a.75.75 0 01-1.06-1.06l1.5-1.5zM11.25 1.5A.75.75 0 0112 2.25v3.75a.75.75 0 01-1.5 0V2.25A.75.75 0 0111.25 1.5z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M3 8.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 8.25zM4.5 10.5a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zm1.21 2.26a.75.75 0 01.28.53v5.44l1.19-1.18a.75.75 0 011.06 1.06l-2.25 2.25a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 011.06-1.06l1.19 1.18v-5.44a.75.75 0 01.78-.53zm9.58 0a.75.75 0 01.78.53v5.44l1.19-1.18a.75.75 0 111.06 1.06l-2.25 2.25a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.19 1.18v-5.44a.75.75 0 01.28-.53z" clipRule="evenodd" />
    </svg>
);


const EngineerCard: React.FC<EngineerCardProps> = ({ engineer }) => {
  const isFirstPlace = engineer.rank === 1;

  const cardClasses = `
    relative flex flex-col sm:flex-row items-center bg-slate-800/50 rounded-lg shadow-lg 
    border border-slate-700 transition-all duration-300 ease-in-out h-full
    ${isFirstPlace 
      ? 'p-6 sm:p-8 border-amber-400 shadow-amber-500/10' 
      : 'p-4 sm:p-6 hover:border-slate-500 hover:shadow-xl hover:scale-105'
    }
  `;

  return (
    <div className={cardClasses}>
      {isFirstPlace && (
        <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-900 rounded-full p-2 shadow-lg">
            <CrownIcon className="w-6 h-6"/>
        </div>
      )}
      <div className={`flex-shrink-0 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 ${isFirstPlace ? 'w-32 sm:w-48' : 'w-24 sm:w-32'}`}>
        <p className={`font-black ${isFirstPlace ? 'text-6xl sm:text-7xl text-amber-400' : 'text-5xl sm:text-6xl text-slate-500'}`}>
          #{engineer.rank}
        </p>
        <img
          src={engineer.imageUrl}
          alt={engineer.name}
          className={`rounded-full object-cover ml-4 border-2 ${isFirstPlace ? 'w-24 h-24 sm:w-32 sm:h-32 border-amber-400' : 'w-20 h-20 border-slate-600'}`}
        />
      </div>
      <div className="text-center sm:text-left">
        <h2 className={`font-bold text-white ${isFirstPlace ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>{engineer.name}</h2>
        <p className={`font-semibold mt-1 ${isFirstPlace ? 'text-xl sm:text-2xl text-amber-300' : 'text-lg sm:text-xl text-slate-300'}`}>
          {engineer.netWorth}
        </p>
        <p className="text-sm text-slate-400 mt-2">
          <span className="font-semibold">Источник богатства:</span> {engineer.source}
        </p>
      </div>
    </div>
  );
};

export default EngineerCard;