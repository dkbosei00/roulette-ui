import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    &.active {
    color: #000000;
    }
`

