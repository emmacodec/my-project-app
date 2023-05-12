import React from 'react';
import  ReactDOM  from 'react-dom/client';

const BookList =() => {
    return <section>
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
}

const Book = () => {
    return <article>
       <Image />
       <Title />
       <Author />
    </article>
}

const Image = () => <img src='https://m.media-amazon.com/images/I/51u8ZRDCVoL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' />
const Title = () => <h2>Rich Dad Poor Dad</h2>
const Author = () => {
    return <h4>Robert Kiyosaki</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);