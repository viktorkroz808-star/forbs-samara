import React from 'react';
import Header from './components/Header.tsx';
import EngineerCard from './components/EngineerCard.tsx';
import { ENGINEERS_DATA } from './constants.ts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ENGINEERS_DATA.map((engineer, index) => {
            if (index === 0) {
              return (
                <div key={engineer.rank} className="md:col-span-2">
                  <EngineerCard engineer={engineer} />
                </div>
              );
            }
            return <EngineerCard key={engineer.rank} engineer={engineer} />;
          })}
        </div>
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Данные являются вымышленными и представлены в демонстрационных целях.</p>
        <p>&copy; 2024 Forbes Samara Edition. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;
