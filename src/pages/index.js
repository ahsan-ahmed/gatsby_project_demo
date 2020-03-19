import React from "react"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import TesserectOcr from "../components/TesserectOcr"
import Cats from "./Cats"

export default () => {
  return (
    <Layout>
      <TesserectOcr />
      <Router>
        <Cats path="/Cats/" />
      </Router>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <div>
          <img
            src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
            alt="Group of pandas eating bamboo"
          />
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/Cats/")
            }}
          >
            Click To Redirect other page
          </button>
        </div>
      </div>
    </Layout>
  )
}
