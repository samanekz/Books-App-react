import {useState} from 'react';
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false);

    const deleteBook = () =>{
        onDelete(book.id);
    }

    const editBook = () =>{
        setShowEdit(!showEdit);
    };

    const handleSubmit=(id, newTitle)=>{
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    }

    return  <div className="book-show"> 
                <img
                    alt="books"
                    src={`https://picsum.photos/seed/${book.id}/300/200`}
                /> 
                <div>{content}</div>  
                <div className="actions">
                    <button className="edit" onClick={editBook}> Edit </button>
                    <button className="delete" onClick={deleteBook}> Delete </button>
                    
                </div>   
            </div>;
  }

  export default BookShow;