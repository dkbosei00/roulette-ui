import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
    right: 0px;
    bottom: 0px;
    height: 100%;
    width: 100%;
    display:inline-block;
    &.active {
    color: #000000;
    }
`

