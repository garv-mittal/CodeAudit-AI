import React from "react"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"

function ReviewPanel({ review, loading }) {
  return (
    <div className="review-panel">
      <h2 className="review-heading">Code Review</h2>
      {loading ? (
        // 🔄 loader
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Analyzing your code...</p>
        </div>
      ) 
      : 
      (
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      )}
    </div>
  )
}

export default ReviewPanel
