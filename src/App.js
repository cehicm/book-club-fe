import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Home></Home>
      <BookList />
    </div>
  );
}

export default App;
