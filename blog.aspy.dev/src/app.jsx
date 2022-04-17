// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Routes, Route, Router } from 'solid-app-router';

const Home = lazy(() => import('./pages/home.jsx'));
const About = lazy(() => import('./pages/about.jsx'));
const Y2022 = lazy(() => import('./pages/2022/2022.jsx'));

render(
    () => (
        <Router>
            <Routes>
                <Route path='/' element={Home} />
                <Route path='/about' element={About} />
                <Route path='/2022' element={Y2022} />
            </Routes>
        </Router>
    ),
    document.getElementById('root'),
);
