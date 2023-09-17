import React from 'react';
import BookForm from './BookForm';
import { useNavigate } from 'react-router-dom';

const AddBook = ({ books, setBooks }) => {
  const history = useNavigate();
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history('/');
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;