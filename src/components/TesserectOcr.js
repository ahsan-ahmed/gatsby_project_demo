import React, { useEffect, useState } from "react"
import { createWorker } from "tesseract.js"
import ImageCnic from "./../assets/images/drivingLicense.jpg"

function TesserectOcr() {
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
    } = await worker.recognize(ImageCnic)
    // console.log(text, "--->")
    setOcr(text)
  }
  const [ocr, setOcr] = useState("Recognizing...")
  useEffect(() => {
    doOCR()
  })
  return (
    <div className="TesserectOcr">
      <p>{ocr}</p>
    </div>
  )
}
export default TesserectOcr
