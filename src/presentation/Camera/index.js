import CameraIcon from "@mui/icons-material/Camera";
import HomeIcon from "@mui/icons-material/Home";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { getLocation } from "../../functions/location";
export default function Camera({ onClick }) {
  const webcamRef = useRef(null);
  const imageCaptureRef = useRef(null);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const capture = () => {
    const webcam = webcamRef.current;
    const imageSrc = webcam.getScreenshot();
    // setImage(imageSrc);
    // onClick(imageSrc)
    getLocation().then((location) => {
      console.log(imageSrc, location);
      navigate("/create", {
        state: {
          location: {
            address: location.address,
            coords: {
              latitude: location.position.coords.latitude,
              longitude: location.position.coords.longitude,
            },
          },
          img: imageSrc,
        },
      });
    });
  };
  React.useEffect(() => {
    // navigate('/create', { state: { location: "asd", img: "eeee" } });
  }, []);

  return (
    <div
      className="flex flex-col items-center h-full"
      style={{ backgroundColor: "#0A0C2B" }}
    >
      <Webcam
        audio={false}
        ref={webcamRef}
        className="w-full h-64"
        style={{ height: "100%" }}
      />
      <div className="flex gap-5 ">
        <CameraIcon onClick={capture} color="secondary" fontSize="large" />
        <Link to="/">
          <HomeIcon color="secondary" fontSize="large" />
        </Link>
      </div>

      {/* <img src={image} alt="Captured" className="w-full h-64 object-cover overflow-auto" /> */}
    </div>
  );
}
