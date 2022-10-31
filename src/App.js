import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EarthPage from "./Components/EarthPage";
import MarsPage from "./Components/MarsPage";
import SpacePage from "./Components/SpacePage";
import NewDateDisplay from "./shared/components/NewDateDisplay";
import Menu from "./shared/components/Menu";

function App() {
    return (
        <>
            <NewDateDisplay />
            <Router>
                <Menu />
                <Routes>
                    <Route path="/earth" element=<EarthPage />></Route>
                    <Route path="/mars" element=<MarsPage />></Route>
                    <Route path="/space" element=<SpacePage />></Route>
                    <Route path="*" element={<Navigate to="/earth" />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
