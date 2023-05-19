const Book = (props) => {
    const {img, title, author} = props;
    //console.log(props);
    return  (
    <article className='book'>
       <img src={img} alt={title} />
       <h2>{title.toUpperCase()}</h2>
       <h4>{author.toUpperCase()}</h4>
       
       </article>
    );
};

export default Book;