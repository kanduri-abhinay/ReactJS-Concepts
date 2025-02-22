function CommentBox(props) {
  return (
    <div>
      {props.data.map((comment) => (
        <div
          style={{
            paddingLeft: "20px",
            borderLeft: "2px solid black",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <img
              src="https://www.w3schools.com/images/w3schools_green.jpg"
              alt="W3Schools.com"
              style={{ borderRadius: "50%", height: "24px", width: "24px" }}
            />
            <div>
              <div>{comment.userName}</div>
              <div>{comment.comment}</div>
            </div>
          </div>
          {comment?.replies?.length > 0 && (
            <CommentBox data={comment.replies} />
          )}
        </div>
      ))}
    </div>
  );
}
export default CommentBox;
