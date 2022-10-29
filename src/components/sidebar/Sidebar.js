import React from 'react'
import styled from 'styled-components'

const Sidebar = ({ width }) => {
    return (
        <>
            <SidebarMain width={width}>
                <SidebarInside>
                    <Brand><h1>DIKSHANT</h1></Brand>
                    <NavLinks>
                        <ul>
                            <Lis>HOME</Lis>
                            <Lis>PORTFOLIO</Lis>
                            <Lis>CONTACT</Lis>
                        </ul>
                    </NavLinks>
                    <Footer>
                        <About>
                            <button>ABOUT ME</button>
                        </About>
                        <Developer>
                            <h3>Dummy Text for Lorem Ipsum</h3>
                        </Developer>
                    </Footer>
                </SidebarInside>
            </SidebarMain>
        </>
    )
}

const SidebarMain = styled.div`
    font-family: jost;
    letter-spacing: 1px;
    color: white;
    background-color: black;
    width: 300px;
    display: ${props => props.width < 1100 ? "none" : ''};
    transition: 0.5s ease;
    height: 100vh;
    position: fixed;
    top: 0;
`

const SidebarInside = styled.div`
    height: 90vh;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Brand = styled.div`
    flex: 1;
    width: 200px;
    text-align: center;
    h1 {
        font-weight: 300;
        font-size: 24px;
        letter-spacing: 5px;
    }
`
const NavLinks = styled.div`
    flex: 4;
    ul {
        display: flex;
        height: 8vh;
        justify-content: space-between;
        flex-direction: column;
        li {
            cursor: pointer;
            text-align: center;
            font-size: 13px;
            font-weight: 300;
            letter-spacing: 3px;
            list-style: none;
        }
    }
`
const Footer = styled.div`
    flex: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        font-weight: 200;
    }

`
const Lis = styled.li``
const About = styled.div`
    text-align: center;
    button {
        background-color: white;
        padding: 12px 20px;
        border-radius: 30px;
        letter-spacing: 2px;
        font-size: 12px;
    }
`
const Developer = styled.div`
    width: 150px;
    font-family: jost;
    font-size: 10px;
    font-weight: 300;
    text-align: center;
`

export default Sidebar