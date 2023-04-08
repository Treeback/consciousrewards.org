import * as React from "react"
import logo from "../assets/logo.png"
import { Flex } from "./ui"

export default function GatsbyContentfulLogo() {
  return (
    <Flex>
      <img src={logo} style={{ height: "70px" }} />
      <h3>Sadhana Freak</h3>
    </Flex>
  )
}
