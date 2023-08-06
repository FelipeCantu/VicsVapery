import React from 'react'
import styled from 'styled-components'
import Baceliquids from '../assets/baceliquids.webp'
import Bacvape from '../assets/bacvape.webp'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <Navi>
            <Link to='/Eliquids'>
                <div>
                    <h1>E-liquids</h1>
                    <img src={Baceliquids} alt='' />
                </div>
            </Link>
            <Link to='/Disposables'>
                <div>
                    <h1>Disposables</h1>
                    <img src={Bacvape} alt='' />
                </div>
            </Link>
        </Navi>
    )
}

const Navi = styled.div`
    div {
        display: inline-block;
        border: 1px solid;
        width: 35%;
        margin-right: 15px;
        height: 200px;
        color: black;
    }
    h1 {
        float: left;
        padding: 10px;
    }
    img {
        object-fit: cover;
        width: 200px;
        height: 200px;
        float: right;
        margin-right: 80px;
    }
`
export default Navigation