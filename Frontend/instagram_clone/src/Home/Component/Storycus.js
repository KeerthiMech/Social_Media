import "./Storycus.css";

export default function StoryCus(props) {
  return (
    <div className="stories-container">
      <div className={`circle_color_${props.friendly}`}>
        <div className="story">
          <img src={props.userprofile}></img>
        </div>
      </div>
      <p>{props.username}</p>
    </div>
  );
}
