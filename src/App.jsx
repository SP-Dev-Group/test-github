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
        
{/* This will now correctly resolve to /test-github/ */}        
        <Route path="/" element={<GitHubTestUrl />} />
{/* 1. ADD THE ROUTE FOR P2 HERE (It will safely resolve to /test-github/p2) */}
        <Route path="/p2" element={<P2 />} />
{/* Fallback for any other pages */}   
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
