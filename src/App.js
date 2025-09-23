// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Container from 'components/layout/Container';
import Login from 'pages/Login';

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Sidebar />     
    //   <Main />
    //   <Footer />
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Container />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
