import React  from 'react';
import './App.css';
import Counter from './features/counter/Counter'
import { Outlet,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
      <Counter/>
    </div>
  );
}

export default App;
