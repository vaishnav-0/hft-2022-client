import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Webcam from 'react-webcam'
import ImageCapture from 'react-image-capture'

export default function Camera ()  {
  const webcamRef = useRef(null)
  const imageCaptureRef = useRef(null)
  const [image, setImage] = useState(null)

  const capture = () => {
    const webcam = webcamRef.current;
    const imageSrc = webcam.getScreenshot();
    setImage(imageSrc);
    console.log(image);
  }

  return (
    <div className="flex flex-col items-center">
      <Webcam
  audio={false}
  ref={webcamRef}
  className="w-full h-64 invisible"
/>
      <ImageCapture
  ref={imageCaptureRef}
  className="hidden"
  takePicture={capture}
/>
      
      
        <img src={image} alt="Captured" className="w-full h-64 object-cover overflow-auto" />
      
      <Link to="/">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mt-4">
          Back
        </button>
      </Link>
    </div>
  )
}

