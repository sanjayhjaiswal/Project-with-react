import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Sharing/Header';
import Footer from './Components/Sharing/Footer';
import Home from './Components/Home';
import Blogs from './Components/Blogs'
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import Stocks from './Components/Stocks';
import Response from './Components/Respone';
import RegistrationForm from './Components/registrationFormTest';
function App() {
  return (
    <div className="App">
      
      
        <Header />
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="stocks" element={<Stocks />} />
            <Route path="response" element={<Response />} />
            <Route path="registrationForm" element={<RegistrationForm />} />
            <Route path="*" element={<NoPage />} />
          </Route>          
        </Routes>
        
      
      {/* All the routes would be registererd in App.js */}
      <Footer />

    </div>
  );
}

export default App;
