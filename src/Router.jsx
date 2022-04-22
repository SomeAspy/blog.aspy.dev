// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { lazy } from 'solid-js';
import { Routes, Route, Router } from 'solid-app-router';

const Home = lazy(() => import('./pages/home.jsx'));
const About = lazy(() => import('./pages/about.jsx'));
const Y2022 = lazy(() => import('./pages/2022/2022.jsx'));
const Y2022April = lazy(() => import('./pages/2022/april/april.jsx'));
const Y2022April3 = lazy(() => import('./pages/2022/april/3.mdx'));
const Y2022April7 = lazy(() => import('./pages/2022/april/7.mdx'));
const Y2022April14 = lazy(() => import('./pages/2022/april/14.mdx'));
const Y2022April15 = lazy(() => import('./pages/2022/april/15.mdx'));

const DevArticle = lazy(() => import('./components/article.jsx'));
const DevLayouts = lazy(() => import('./components/layouts.jsx'));

export default function () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={Home} />
                <Route path='/about' element={About} />
                <Route path='/dev'>
                    <Route path='/article' element={DevArticle} />
                    <Route path='/layouts' element={DevLayouts} />
                </Route>
                <Route path='/2022' element={Y2022}>
                    <Route path='/april' element={Y2022April}>
                        <Route path='/3' element={Y2022April3} />
                        <Route path='/7' element={Y2022April7} />
                        <Route path='/14' element={Y2022April14} />
                        <Route path='/15' element={Y2022April15} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}
