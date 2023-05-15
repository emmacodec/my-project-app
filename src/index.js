import React from 'react';
import  ReactDOM  from 'react-dom/client';

import './index.css';

const BookList =() => {
    return <section className='booklist'>
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
}
const author = 'Robert Kiyosaki';
const Book = () => {
    const title = 'Rich Dad Poor Dad';
    return <article className='book'>
       <img src='/images/book-1.jpg' alt='Rich Dad Poor Dad' />
       <h2>{title.toUpperCase()}</h2>
       <h4>{author.toUpperCase()}</h4>
    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);