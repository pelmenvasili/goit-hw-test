import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Tweets from '../Tweets/Tweets';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
