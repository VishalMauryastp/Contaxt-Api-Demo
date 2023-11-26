// import React, { useRef, useState } from 'react';

// const temp = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [capturedImages, setCapturedImages] = useState([]);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };

//   const captureImage = () => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     // Set the canvas dimensions to match the video stream
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;

//     // Draw the current video frame onto the canvas
//     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//     // Save the captured image to the array
//     setCapturedImages((prevImages) => [...prevImages, canvas.toDataURL('image/png')]);
//   };

//   const stopCamera = () => {
//     const stream = videoRef.current.srcObject;
//     const tracks = stream.getTracks();

//     tracks.forEach((track) => track.stop());
//     videoRef.current.srcObject = null;
//   };

//   return (
//     <div>
//       <video ref={videoRef} autoPlay playsInline />
//       <button onClick={startCamera}>Start Camera</button>
//       <button onClick={captureImage}>Capture Image</button>
//       <button onClick={stopCamera}>Stop Camera</button>
//       <div>
//         {capturedImages.map((image, index) => (
//           <img key={index} src={image} alt={`Captured ${index}`} />
//         ))}
//       </div>
//       <canvas ref={canvasRef} style={{ display: 'none' }} />
//     </div>
//   );
// };

// export default temp;

// 2
import React, { useRef, useState } from "react";

const temp = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set the canvas dimensions to match the video stream
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to a Blob
    canvas.toBlob((blob) => {
      // Create a download link
      const downloadLink = document.createElement("a");
      const url = URL.createObjectURL(blob);
      downloadLink.href = url;

      // Set the filename for the downloaded image
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      downloadLink.download = `captured-image-${timestamp}.png`;

      // Trigger a click on the link to initiate the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);

      // Save the captured image to the array
      setCapturedImages((prevImages) => [...prevImages, url]);
    }, "image/png");
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
  };

  return (
    <div>
      <div className="w-fit mx-auto">
        <video ref={videoRef} autoPlay playsInline />
        <div className=" flex justify-between ">
          <button className="" onClick={startCamera}>Start Camera</button>
          <button className="" onClick={captureImage}>Capture Image</button>
          <button className="" onClick={stopCamera}>Stop Camera</button>
        </div>
        <div>
          {capturedImages.map((image, index) => (
            <img key={index} src={image} alt={`Captured ${index}`} />
          ))}
        </div>
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default temp;
