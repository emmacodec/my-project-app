import React from 'react';
import  ReactDOM  from 'react-dom/client';

import './index.css';
const books = [
 {
    author: 'Robert Kiyosaki',
    title: 'Rich Dad Poor Dad',
    img: '/images/book-1.jpg',
 },
{
    author: 'Dr. Myles Munroe',
    title: 'Maximizing Your Potential',
    img: 'https://believersportal.com/wp-content/uploads/2016/09/Myles-Munroe-book.jpg',
},

];

const BookList =() => {
    return (
    <section className='booklist'>
        {books.map((book)=>{
            const {img, title, author} = book
            return <Book img={img} title={title} author={author} />
        })} 
    </section>
    );
};

const Book = (props) => {
    const {img, title, author} = props;
    console.log(props);
    return  (
    <article className='book'>
       <img src={img} alt={title} />
       <h2>{title.toUpperCase()}</h2>
       <h4>{author.toUpperCase()}</h4>
       
       </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);