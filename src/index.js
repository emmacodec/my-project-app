import React from 'react';
import  ReactDOM  from 'react-dom/client';

import './index.css';
import { books } from './book';
import Book from './Books';

const BookList =() => {
    return (
        <>
        <h1>Daniel's best sellers</h1>
        <section className='booklist'>
        <EventExamples />
        {books.map((book, index)=>{
            return <Book {...book} key={book.id} number={index} />;
        })} 
    </section>
    </>
    );
};

const EventExamples =() => {
 return <section>
        <form>
            <h2>Typical Form</h2>
            <input 
            type='text' 
            name='product' 
            onChange={(e) => console.log(e.target.value) } 
            style={{margin: '1rem 0'}} 
            />
            <button type='submit'>
                SUBMIT
                </button>
            <div>
            <button onClick={() => console.log('click me')} type='button'>
                CLICK ME..!!
                </button>
            </div>
        </form>
    </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);