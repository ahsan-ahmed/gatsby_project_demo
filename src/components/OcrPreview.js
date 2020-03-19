import React from "react"
import "./../styles/styles.scss"

export default ({ image, ocr, handleChange }) => {
  return (
    <div className="ocr-container">
      <div className="ocr-image-root">
        <img src={image} className="image-display" />
        <input type="file" className="image-pickup" onChange={handleChange} />
      </div>
      <textarea value={ocr} cols={40} rows={10} />
    </div>
  )
}
