import CommentBox from "./CommentBox";

const data = [
  {
    userName: "abhinay",
    comment: "hello abhinay",
    replies: [
      {
        userName: "abhinay",
        comment: "r1",
        replies: [
          {
            userName: "abhinay",
            comment: "r3",
          },
          {
            userName: "abhinay",
            comment: "hello abhinay",
            replies: [
              {
                userName: "abhinay",
                comment: "r1",
                replies: [
                  {
                    userName: "abhinay",
                    comment: "r3",
                  },
                ],
              },
              {
                userName: "abhinay",
                comment: "r2",
              },
            ],
          },
        ],
      },
      {
        userName: "abhinay",
        comment: "r2",
      },
    ],
  },
  {
    userName: "kanduri",
    comment: "kanduri",
    replies: [
      {
        userName: "abhinay",
        comment: "r6",
        replies: [
          {
            userName: "abhinay",
            comment: "r4",
          },
        ],
      },
      {
        userName: "abhinay",
        comment: "r5",
      },
    ],
  },
];
function Comments() {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
}
export default Comments;
