import React from "react"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";

function ReviewPanel({ review }) {
  return (
    <div className="review-panel">
      <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
    </div>
  )
}

export default ReviewPanel
