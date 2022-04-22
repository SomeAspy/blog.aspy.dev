// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import '../SCSS/home.scss';
import Banner from '../images/banner.webp';

export default function () {
    return (
        <>
            <div class='banner'>
                <img src={Banner} />
                Aiden's Blog
            </div>
        </>
    );
}
