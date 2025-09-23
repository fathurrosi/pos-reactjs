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
import Sidebar from 'components/layout/SideBar';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Main from "components/layout/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />     
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
export default App;
