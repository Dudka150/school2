import React from 'react';
import './App.css';
import ProductCard from './ProductCard';
import SkillCard from './SkillCard';

function App() {
  return (
    <div className="App">
      <div className="photo-section">
        <ProductCard imageUrl="orig.webp" />
        <div className="full-name">Дудин Иван Александрович</div>
      </div>
      <div className='Komp'>Компетенции</div>
      <div className="skills-section">
        <SkillCard title="Laravel" />
        <SkillCard title="Django" />
        <SkillCard title="C#" />
        <SkillCard title="Базы данных" />
      </div>
      <div className='Komp'>Хотелось бы изучить</div>

      <div className="skills-want">
        <SkillCard title="Product manager" />
        <SkillCard title="JS" />
        <SkillCard title="Системный анализ" />
        <SkillCard title="Еще что-то" />
        <SkillCard title="Еще что-то" />
        <SkillCard title="Еще что-то" />
        <SkillCard title="Еще что-то" />
        <SkillCard title="Еще что-то" />
        <SkillCard title="Еще что-то" />
        <SkillCard title="Еще что-то" />
      </div>
    </div>
  );
}

export default App;