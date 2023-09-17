import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
        <Routes>
            <Route element={<BooksList books={books} setBooks={setBooks} />} path="/" exact={true} />
            <Route element={<AddBook books={books} setBooks={setBooks} />} path="/add" />
            <Route element={<EditBook books={books} setBooks={setBooks} />} path="/edit/:id" />
            {/* <Route component={() => <Redirect to="/" />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;