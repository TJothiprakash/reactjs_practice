import React, { useState } from "react";

function CommentList() {
  const [comments, setComments] = useState([
    { id: 1, text: "This is the first comment.", replies: [] },
    { id: 2, text: "This is the second comment.", replies: [] },
  ]);
  const [newComment, setNewComment] = useState("");
  const [replyText, setReplyText] = useState({});

  const addComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment, replies: [] },
      ]);
      setNewComment("");
    }
  };

  const addReply = (commentId) => {
    if (replyText[commentId]?.trim()) {
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  { id: Date.now(), text: replyText[commentId] },
                ],
              }
            : comment
        )
      );
      setReplyText({ ...replyText, [commentId]: "" });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>Post Comment</button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <ul>
              {comment.replies.map((reply) => (
                <li key={reply.id}>{reply.text}</li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Reply..."
              value={replyText[comment.id] || ""}
              onChange={(e) =>
                setReplyText({ ...replyText, [comment.id]: e.target.value })
              }
            />
            <button onClick={() => addReply(comment.id)}>Reply</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
