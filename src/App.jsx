import { Toaster } from "@/components/ui/toaster"
// 1. Import HashRouter instead of BrowserRouter
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import GitHubTestUrl from './pages/GitHubTestUrl';
import P2 from './pages/P2';

function App() {
  return (
    // 2. This now uses HashRouter safely
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<GitHubTestUrl />} />
        <Route path="/" element={<P2 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
