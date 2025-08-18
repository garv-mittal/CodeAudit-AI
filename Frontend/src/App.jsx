import { useState } from "react"
import CodeEditor from "./components/codeEditor"
import ReviewPanel from "./components/ReviewPanel"
import API from "./api"
import "./App.css"

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`)
  const [review, setReview] = useState("")

  async function reviewCode() {
    try {
      const response = await API.post("/ai/get-review", { code })
      setReview(response.data)
    } catch (error) {
      setReview("❌ Error fetching review")
    }
  }

  return (
    <main className="app-container">
      <div className="left">
        <CodeEditor code={code} setCode={setCode} onReview={reviewCode} />
      </div>

      <div className="right">
        <ReviewPanel review={review} />
      </div>
    </main>
  )
}

export default App
