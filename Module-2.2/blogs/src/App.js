import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import Blogs from './components/Blogs'
import NewBlog from './components/NewBlog';
import styles from './css/styles.css';
import QAPics from './components/QAPics';

// Main app Component
function App() {
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Blogs />}> </Route>
        <Route path="/pics/:id" element={<QAPics />}> </Route>
        <Route path="/new" element={<NewBlog />}> </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;