import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./ui/UserDetail";
import LottiePreloader from "./ui/preloader";
import Navbar from "./components/nav";
import MaterialButton from "./components/materialButton";
import MaterialCard from "./components/materialCard";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LottiePreloader />;
  }

  return (
    <Router>
      <div className="h-screen bg-[#fff]">
        <Navbar />
        <MaterialButton />
        <MaterialCard />

        <Routes>
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
