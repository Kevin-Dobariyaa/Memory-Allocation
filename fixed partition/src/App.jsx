import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import BuildMem, { memForExp } from './buildMem';

import Nav from './nav'
import Algo1 from './algo1'
import Algo2 from './algo2';
import Algo3 from './algo3';
import Algo4 from './algo4';

import './App.css'

let mem;

function App() {

  return (
    <>
      {/* <h1>Fixed Partition</h1> */}
      <Nav></Nav>
      <Routes>
        <Route path='/'
          element={<BuildMem />}
        />
        <Route path='/algo1'
          element={<Algo1 />}
        />
        <Route path='/algo2'
          element={<Algo2 />}
        />
        <Route path='/algo3'
          element={<Algo3 />}
        />
        <Route path='/algo4'
          element={<Algo4 />}
        />
      </Routes>
    </>

  )
}

export default App
