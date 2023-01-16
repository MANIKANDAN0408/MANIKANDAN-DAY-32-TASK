
import { AppBar, Button, Toolbar } from '@mui/material';

import { useEffect, useState } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { AddBook } from './AddBook';

import './App.css';
import { BooksList } from './BooksList';

import { Home } from './Home';


function App() {

  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {

    fetch("https://63c55bddf80fabd877e696eb.mockapi.io/books")
      .then((bk) => bk.json())
      .then((bks) => setBooks(bks));

  }, []);

  return (
    <div className="App">
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Button color='inherit' onClick={() => navigate("/")}>HOME</Button>
          <Button color='inherit' onClick={() => navigate("/books")}>BOOKS</Button>
          <Button color='inherit' onClick={() => navigate("/books/add")}>ADD BOOKS</Button>
        </Toolbar>

      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksList books={books} />} />
        <Route path="/books/add" element={<AddBook />} />
      </Routes>

    </div>
  );
}

export default App;