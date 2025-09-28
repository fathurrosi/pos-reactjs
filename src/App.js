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
