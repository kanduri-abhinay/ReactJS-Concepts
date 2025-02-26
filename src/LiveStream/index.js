import LiveChat from "./LiveChat";
import VideoStream from "./VideoStream";
import "./style.css";

function LiveStream() {
  return (
    <div style={{ display: "flex" }}>
      <VideoStream />
      <LiveChat />
    </div>
  );
}
export default LiveStream;
