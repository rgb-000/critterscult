import React from 'react';
import { useState } from 'react';

function Questions({ title, info }) {
    const [show, setShow] = useState(false);
    return (
        <>
            <article className='question' id="Faq">
                <header>
                    <h4>{title}</h4>
                    <button className='btn' onClick={() => setShow(!show)}>
                        {show ? '-' : '+'}
                    </button>
                </header>
                <p className='answer'>{show ? info : ''}</p>
            </article >
        </>
    )
}

export default Questions