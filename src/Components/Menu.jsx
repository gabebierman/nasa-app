import React from "react";
// import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <NavLink className="link" to="/earth">
                Earth
            </NavLink>
            <NavLink className="link" to="/mars">
                Mars
            </NavLink>
            <NavLink className="link" to="/space">
                Space
            </NavLink>
            {/* <NavLink className="link" to="/login">
                Logout
            </NavLink> */}
        </nav>
    );
};

export default Menu;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     clearState: () => {
//       dispatch(clearUser());
//       dispatch(clearFavorites());
//       dispatch(clearSearch());
//     },
//   };
// };
// const mapStateToProps = (state) => ({ user: state.user });

// export default connect(mapStateToProps, mapDispatchToProps)(Menu);
