import React from 'react';
import { Navbar, NavbarNav, NavItem, NavLink, Fa } from 'mdbreact';
import './navbar.css';



class NavbarFeatures extends React.Component {



    render() {
        return (






            <Navbar dark color="black" expand fixed="bottom">


                <NavbarNav center="true">

                    <NavItem>
                        <NavLink to="/">
                            <Fa icon="map-marker" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/search">
                            <Fa icon="binoculars" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/saved">
                            <Fa icon="list" />
                        </NavLink>
                    </NavItem>


                </NavbarNav>


            </Navbar>




        );
    }
}

export default NavbarFeatures;