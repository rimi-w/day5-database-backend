import { Button, TextareaAutosize } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useCommentStore } from "../store";
import { useState } from "react";

export default function Comment(props) {
  const [newComment, setNewComment] = useState(``);
  const [isEdit, setIsEdit] = useState(false);
  const { customer, content } = props.comment;
  const commentId = props.comment.comment_id;
  const postId = props.comment.post_id;
  const firstName = customer.first_name;
  const lastName = customer.last_name;
  const commentor = firstName + " " + lastName;
  const { updateComment, deleteComment, getComments } = useCommentStore();

  return (
    <Box sx={{ mb: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {commentor}
          </Typography>
          <Typography variant="body2">
            <div>
              {content}
              <div>
                {!isEdit && (
                  <Button
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                )}
                {isEdit && (
                  <div>
                    <TextareaAutosize
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      minRows={3}
                      style={{
                        flex: "1 0 0",
                        width: "100%",
                      }}
                    ></TextareaAutosize>
                    <Button
                      onClick={() => {
                        updateComment(commentId, postId, newComment);
                        setIsEdit(false);
                      }}
                    >
                      Update
                    </Button>
                  </div>
                )}
                <Button
                  onClick={() => {
                    deleteComment(commentId, postId);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
