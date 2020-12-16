import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"


import { siteShortTitle } from "../../config"
import { siteIcon } from "../../config"

const StyledLogo = styled.div`
  position: relative;
  z-index: 13;

  font-size: ${({ size }) => (size ? size : "1.75rem")};
  font-weight: 900;
  color: ${({ theme, color }) => theme.colors[color] || color};

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const Logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    {siteShortTitle} 
  </StyledLogo>
)

// const Logo = () => (
//   <Img
//   className="avatar"
//   fluid={siteIcon}
//   />
// )

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo
