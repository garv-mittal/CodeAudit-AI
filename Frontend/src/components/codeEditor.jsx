import { useEffect } from "react"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import "prismjs/themes/prism-tomorrow.css";
import ReviewButton from "./reviewButton"

function CodeEditor({ code, setCode, onReview }) {
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <div className="code-editor-container">
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={code =>
          prism.highlight(code, prism.languages.javascript, "javascript")
        }
        padding={10}
        className="code-editor"
      />
      {/* Button right below editor */}
      <ReviewButton onClick={onReview} />
    </div>
  )
}

export default CodeEditor
