import {useState} from 'react';

function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);
  const handleSubmit= (event)=>{
      event.preventDefault();
      onSubmit(book.id, title);
  }

  const handleChange = (event) =>{
      setTitle(event.target.value);
  }; 

  return <div className="book-Edit">
      <form onSubmit = {handleSubmit}>
          <label>Title</label>
          <input className="input" value = {title} onChange = { handleChange }/>
          <button className="button is-promary"> save </button>
      </form>
  </div>
}; 

export default BookEdit;