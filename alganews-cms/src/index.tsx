import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './app/views/Home.view';
import Notfound from './app/views/NotFound.view';
import GlobalStyles from './core/GlobalStyles';
import EditorsList from './app/views/EditorsList.view';
import Form from './app/views/Form.view';
import EditorProfile from './app/views/EditorProfile.view';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/editores"} element={<EditorsList/>}/>
      <Route path={"/editores/:id"} element={<EditorProfile/>}/>
      <Route path={"/posts/criar"} element={<Form/>}/>
      <Route path= '*' element={<Notfound/>}/>
    </Routes >
    </BrowserRouter>
    <GlobalStyles/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
