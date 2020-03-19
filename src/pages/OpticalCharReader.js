import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import OcrPreview from "../components/OcrPreview"
import { createWorker } from "tesseract.js"
import "./../styles/styles.scss"

export default () => {
  const [tesseractImage, setTesseractImage] = useState(
    "https://cdn2.vectorstock.com/i/1000x1000/17/61/select-image-vector-11591761.jpg"
  )
  const [otherImage, setOtherImage] = useState(
    "https://cdn2.vectorstock.com/i/1000x1000/17/61/select-image-vector-11591761.jpg"
  )
  const [ocr, setOcr] = useState("Recognizing...")
  const worker = createWorker({
    logger: m => {
      // console.log(m)
    },
  })
  const doOCR = async () => {
    await worker.load()
    await worker.loadLanguage("eng")
    await worker.initialize("eng")
    const {
      data: { text },
    } = await worker.recognize(tesseractImage)
    // console.log(text, "--->")
    setOcr(text)
  }
  const handleChange = event => {
    setTesseractImage(URL.createObjectURL(event.target.files[0]))
  }
  useEffect(() => {
    doOCR()
  })
  return (
    <Layout>
      <div>
        <h3>TesseractJS OCR Preview</h3>
        <OcrPreview
          image={tesseractImage}
          ocr={ocr}
          handleChange={handleChange}
        />
      </div>
      {/* <div>
        <h3>Otherv Image OCR Preview</h3>
        <OcrPreview
          image={otherImage}
          ocr={ocr}
          handleChange={handleChange}
        />
      </div> */}
    </Layout>
  )
}
