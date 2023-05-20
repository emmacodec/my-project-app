const Book = (props) => {
    const {img, title, author, number} = props;
    //console.log(props);
    console.log(number);
    return  (
    <article className='book'>
       <img src={img} alt={title} />
       <h2>{title.toUpperCase()}</h2>
       <h4>{author.toUpperCase()}</h4>
       <span className='number'>{`# ${number + 1}`}</span>
       
       </article>
    );
};

export default Book;