function VoteChart({ votes }) {
  const total = votes?.reduce((acc, v) => acc + v.count, 0);
  return (
    <div
      style={{
        marginBottom: "40px",
        border: "1px solid black",
        width: "fit-content",
        padding: "20px",
      }}
    >
      <div>Vote Chart</div>
      {votes?.map((vote) => (
        <div style={{ padding: "20px" }}>
          <div>
            {vote.name} - {vote.count} votes
          </div>
          <div style={{ width: "800px" }}>
            <div
              style={{
                background: "green",
                color: "white",
                textAlign: "start",
                width: `${Math.floor((vote.count * 100) / total) || 0}%`,
                borderRadius: "10px",
                overflow: "hidden",
                transition: "width 2s ease-in",
              }}
            >
              <span style={{ paddingLeft: "10px" }}>
                {Math.floor((vote.count * 100) / total) || 0}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default VoteChart;
