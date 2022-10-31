import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearDate } from "../redux/slices/dateSlice";

const Menu = ({ date, clearDate }) => {
    return (
        <nav>
            {!date && <NavLink className="link" to="/landing"></NavLink>}
            {date && (
                <>
                    <NavLink className="link" to="/earth">
                        Earth
                    </NavLink>
                    <NavLink className="link" to="/mars">
                        Mars
                    </NavLink>
                    <NavLink className="link" to="/space">
                        Space
                    </NavLink>
                </>
            )}
        </nav>
    );
};

// export default Menu;

const mapDispatchToProps = () => ({
    clearDate: () => clearDate(),
});

const mapStateToProps = (state) => ({ date: state.date });

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
