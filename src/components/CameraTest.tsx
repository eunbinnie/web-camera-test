'use client';

import { useRef } from 'react';

const constraints = {
  video: { facingMode: 'user' },
  audio: false,
};

const CameraTest = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const canvas = canvasRef.current;
  //   canvas!.width = 480;
  //   canvas!.height = 360;

  const handleStartCamera = async () => {
    let stream = null;

    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current!.srcObject = stream;
      videoRef.current!.onloadedmetadata = () => {
        videoRef.current!.play();
      };
    } catch (error) {
      console.error('Error starting camera:', error);
      return;
    }
  };

  const handleTakePhoto = () => {
    if (!videoRef.current || !canvas) return;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas
      .getContext('2d')!
      .drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleStartCamera}
        className="text-4xl font-bold mb-4 cursor-pointer bg-gray-100 py-2 px-4 rounded-md"
      >
        Start Camera
      </button>
      {/* {videoRef.current && ( */}
      <button
        type="button"
        onClick={handleTakePhoto}
        className="cursor-pointer ml-5 bg-gray-100 py-2 px-4 rounded-md"
      >
        촬영
      </button>
      {/* )} */}
      <div className="flex gap-10">
        <video ref={videoRef} autoPlay playsInline disablePictureInPicture />
        <canvas ref={canvasRef} className="border-2 border-gray-300" />
      </div>
    </div>
  );
};

export default CameraTest;
