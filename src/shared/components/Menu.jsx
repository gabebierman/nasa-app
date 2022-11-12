import React, { useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase.config";
import { clearDate, setDate } from "../redux/slices/dateSlice";
import { FlexContainer } from "../styled/FlexContainer";
import { LowerNav } from "../styled/LowerNav";
import { Nav } from "../styled/Nav";
import { MenuLink } from "../styled/NavLink";
import signIn from "../functions/SignIn";

const Menu = ({ setDate }) => {
    const [searchDate, setSearchDate] = useState(
        moment().subtract(2, "days").format("YYYY-MM-DD")
    );

    return (
        <>
            <Nav>
                <>
                    <>
                        <MenuLink className="link" to="/earth">
                            Earth
                        </MenuLink>
                        <MenuLink className="link" to="/mars">
                            Mars
                        </MenuLink>
                        <MenuLink className="link" to="/space">
                            Space
                        </MenuLink>
                        {!auth.currentUser && (
                            <MenuLink className="link" onClick={() => signIn()}>
                                Sign In
                            </MenuLink>
                        )}
                        {auth.currentUser && (
                            <MenuLink className="link" to="/favorites">
                                Favorites
                            </MenuLink>
                        )}
                    </>
                </>
            </Nav>
            <LowerNav>
                <div style={{ margin: "0px 5px" }}>
                    <label>Enter a new date to search:</label>
                </div>
                <div style={{ margin: "0px 5px" }}>
                    <input
                        type="date"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                        min="2015-09-01"
                        max={`${moment().subtract(2, "days").format("YYYY-MM-DD")}`}
                    ></input>
                </div>
                <div style={{ margin: "0px 5px" }}>
                    <button
                        onClick={() => {
                            setDate(searchDate);
                            console.log(searchDate);
                        }}
                    >
                        search
                    </button>
                </div>
            </LowerNav>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearDate: () => clearDate(),
    setDate: (dateAll) => dispatch(setDate(dateAll)),
    // setUser: (user) => dispatch(setUser(user)),
});

const mapStateToProps = (state) => ({ date: state.date, user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
