import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EarthPage from "./Components/EarthPage/EarthPage";
import MarsPage from "./Components/MarsPage/MarsPage";
import SpacePage from "./Components/SpacePage/SpacePage";
import Menu from "./shared/components/Menu";
import { PrivateRoute, PublicRoute } from "../src/shared/components/ProtectedRoute";
import ErrorBoundary from "./shared/components/ErrBoundry";
import SignInPage from "./shared/functions/SignIn";
import FavoritesPage from "./Components/FavoritesPage/FavoritesPage";

function App() {
    return (
        <>
            <Router>
                {/* <ErrorBoundary /> */}
                <Menu />

                <Routes>
                    <Route path="/earth" element=<EarthPage />></Route>
                    <Route path="/mars" element=<MarsPage />></Route>
                    <Route path="/space" element=<SpacePage />></Route>
                    <Route path="/signin" element=<SignInPage />></Route>
                    <Route
                        path="/favorites"
                        element={<PrivateRoute component={<FavoritesPage />} />}
                    ></Route>
                    <Route path="*" element={<Navigate to="/earth" />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
