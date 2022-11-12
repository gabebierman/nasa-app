import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EarthPage from "./Components/EarthPage/EarthPage";
import MarsPage from "./Components/MarsPage/MarsPage";
import SpacePage from "./Components/SpacePage/SpacePage";
import Menu from "./shared/components/Menu";
import { PrivateRoute, PublicRoute } from "../src/shared/components/ProtectedRoute";
import ErrorBoundary from "./shared/components/ErrBoundry";

function App() {
    return (
        <>
            <Router>
                {/* <ErrorBoundary /> */}
                <Menu />

                <Routes>
                    <Route
                        path="/earth"
                        element={<PrivateRoute component={<EarthPage />} />}
                    ></Route>
                    <Route
                        path="/mars"
                        element={
                            // <ErrorBoundary>
                            <PrivateRoute component={<MarsPage />} />
                            // </ErrorBoundary>
                        }
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
