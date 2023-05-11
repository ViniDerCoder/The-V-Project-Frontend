import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './homepage/Homepage';
import Settings from './settings/Settings';
import Games from './games/Games';

export interface ColorThemeInterface{
    first: string, 
    second: string,
    third: string,
    fourth: string
}

export default function App() {
  const [colorTheme, setColorTheme] = React.useState<ColorThemeInterface>({first: "#3c3f4d", second: "#e8b343", third: "#b75957", fourth: "#f8ffea"})
  const [sidebarActive, setSidebarActive] = React.useState(false)

  const handleMenuButtonClick = () => {
    setSidebarActive(!sidebarActive)
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage colorTheme={colorTheme} sidebarActive={sidebarActive} handleMenuButtonClick={handleMenuButtonClick} />}></Route>
        <Route path='/home' element={<Homepage colorTheme={colorTheme} sidebarActive={sidebarActive} handleMenuButtonClick={handleMenuButtonClick} />}></Route>
        <Route path='/settings' element={<Settings colorTheme={colorTheme}/>}></Route>
        <Route path='/games' element={<Games colorTheme={colorTheme} sidebarActive={sidebarActive} handleMenuButtonClick={handleMenuButtonClick} />}></Route>
      </Routes>
    </Router>
    );
}