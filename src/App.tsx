
import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import IndexSEO from "./pages/IndexSEO";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route path="/" element={<IndexSEO />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default App;
