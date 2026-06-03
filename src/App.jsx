import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import GitHubTestUrl from './pages/GitHubTestUrl';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Directly map your root path to your layout preview page */}
        <Route path="/" element={<GitHubTestUrl />} />
        
        {/* Fallback for any other pages */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
