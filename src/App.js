import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EarthPage from "./Components/EarthPage";
import MarsPage from "./Components/MarsPage";
import SpacePage from "./Components/SpacePage";
import NewDateDisplay from "./shared/components/NewDateDisplay";
import Menu from "./shared/components/Menu";
import { PrivateRoute, PublicRoute } from "../src/shared/components/ProtectedRoute";
import LandingPage from "./Components/LandingPage";
import ErrorBoundary from "./shared/components/ErrBoundry";

function App() {
    return (
        <>
            <Router>
                <ErrorBoundary />
                <Menu />

                <Routes>
                    <Route
                        path="/newdate"
                        element={<PrivateRoute component={<NewDateDisplay />} />}
                    ></Route>
                    <Route
                        path="/landing"
                        element={<PublicRoute component={<LandingPage />} />}
                    ></Route>
                    <Route
                        path="/earth"
                        element={<PrivateRoute component={<EarthPage />} />}
                    ></Route>
                    <Route
                        path="/mars"
                        element={<PrivateRoute component={<MarsPage />} />}
                    ></Route>
                    <Route
                        path="/space"
                        element={<PrivateRoute component={<SpacePage />} />}
                    ></Route>
                    <Route path="*" element={<Navigate to="/earth" />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
