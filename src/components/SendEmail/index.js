import React, { useState } from "react"
import emailjs from "emailjs-com"

export default function() {
  const [text, setText] = useState("")
  const [from, setFrom] = useState("ahsanahmed0124@gmail.com")
  const [sendTo, setSendTo] = useState("ahsanahmed0124@gmail.com")

  const handleSubmit = event => {
    event.preventDefault()
    const templateId = "template_sVNqLTt7"
    const templateParams = {
      text,
      from,
      sendTo,
    }
    const user_id = "user_NNcdtpFlqSPWXejWWE015"
    
    emailjs.send("gmail", templateId, templateParams, user_id).then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text)
      },
      function(error) {
        console.log("FAILED...", error)
      }
    )
  }

  return (
    <div>
      <form className="test-mailing" onSubmit={handleSubmit}>
        <h1>Composing Email</h1>
        <textarea
          id="test-mailing"
          name="test-mailing"
          onChange={event => setText(event.target.value)}
          placeholder="Write any message here..."
          required
          value={text}
          style={{ width: "100%", height: "150px" }}
        />
        <button value="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </div>
  )
}
