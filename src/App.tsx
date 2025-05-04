import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Navigation from './components/Navigation';
import { textForButton, translationsH1FirstPage, textForH2, textForP } from './text/text';
import H1 from './components/H1';
import './header.css';
import './index.css';
import './main.css';
import Main from './components/Main';
import PageFirst from './components/PageHtml';
import PageSecond from './components/PageCss';
import PageThird from './components/PageJavaScript';
import PageFourth from './components/PageReact';
import PageFifth from './components/PageTypeScript';

function App() {
  const [lang, setLang] = useState<'ru' | 'az' | 'en'>('ru');

  return (
    <>
      <header className='headerCont'>
        <div>
          {textForButton.map(item => (
            <Button
              className={lang === item.lang ? 'buttonActive' : 'button'}
              key={item.id}
              onClick={() => setLang(item.lang)}
              buttonText={item.buttonText}
            />
          ))}
        </div>
        <H1 text={translationsH1FirstPage[lang]} />
        <Navigation currentLang={lang} />
      </header>
      <Routes>
        <Route path="/" element={<Main textForH2={textForH2[lang]} textForP={textForP[lang]} styleForMain='mainCont' />} />
        <Route path="/html" element={<PageFirst lang={lang} />} />
        <Route path="/css" element={<PageSecond lang={lang} />} />
        <Route path="/javascript" element={<PageThird lang={lang} />} />
        <Route path="/react" element={<PageFourth lang={lang} />} />
        <Route path="/typescript" element={<PageFifth lang={lang} />} />
      </Routes>
    </>
  );
}

export default App;