
import React, { useState } from 'react';
import MyCard from './myCard';
import {
    Container, Navbar,
    NavbarToggler, Collapse, NavbarBrand, Nav, NavItem,

} from 'reactstrap'
import {Link} from 'react-router-dom'
export default function Navi(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div>
            <Container>
                <Navbar className='mt-2 shadow-sm' color="light" light expand="md">
                    <NavbarBrand href="/">
                        Menu
                    </NavbarBrand>
                    <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/" className='text-dark underline-none'>Anasayfa </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Nav>
                        <NavItem>
                            <MyCard RemoveCard={props.RemoveCard} sepet={props.sepet}></MyCard>
                        </NavItem>
                    </Nav>

                </Navbar>
            </Container>
        </div>
    )
}
