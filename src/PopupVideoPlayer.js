import React from "react";
import ModalVideo from "react-modal-video";
import "./modal-video.scss";

function PopupVideoPlayer({ trailerId }) {
  const [isOpen, setOpen] = React.useState(true);


  console.log(`trailer id is : ${trailerId}`)

  return (

    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay = {"1"}
        start = {"0"}
        isOpen={isOpen}
        videoId={trailerId}
        onClose={() => setOpen(false)}
      />
    </React.Fragment>
  );
}

export default PopupVideoPlayer;
