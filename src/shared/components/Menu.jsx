import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearDate } from "../redux/slices/dateSlice";
import { Nav } from "../styled/Nav";
import { MenuLink } from "../styled/NavLink";

const Menu = ({ date }) => {
    return (
        <Nav>
            {!date && <MenuLink className="link" to="/landing"></MenuLink>}
            {date && (
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
                    <MenuLink className="link" to="/newdate">
                        New Search
                    </MenuLink>
                </>
            )}
        </Nav>
    );
};

const mapDispatchToProps = () => ({
    clearDate: () => clearDate(),
});

const mapStateToProps = (state) => ({ date: state.date });

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
