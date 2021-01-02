import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

// import { siteIcon } from "../../config"
import Favicon from "../../content/index/logo.png"


const ImgLogo = ({ height }) => (
  <img src={Favicon} height={height} alt="AE"  />
)


export default ImgLogo
