import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Homepage from './homepage/Homepage';
import Settings from './settings/Settings';

export interface ColorThemeInterface{
    first: string, 
    second: string,
    third: string,
    fourth: string
}

export default function App() {
  const [colorTheme, setColorTheme] = React.useState<ColorThemeInterface>({first: "#3c3f4d", second: "#e8b343", third: "#b75957", fourth: "#f8ffea"})

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage colorTheme={colorTheme} />}></Route>
        <Route path='/home' element={<Homepage colorTheme={colorTheme} />}></Route>
        <Route path='/settings' element={<Settings colorTheme={colorTheme}/>}></Route>
      </Routes>
    </Router>
    );
}