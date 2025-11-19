'use client';

import { useRef } from 'react';

const constraints = {
  video: { width: 1280, height: 720, facingMode: 'user' },
  audio: false,
};

const CameraTest = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
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

  return (
    <div>
      <button
        type="button"
        onClick={handleStartCamera}
        className="text-4xl font-bold mb-4 cursor-pointer bg-gray-100 py-2 px-4 rounded-md"
      >
        Start Camera
      </button>
      <video ref={videoRef} />
    </div>
  );
};

export default CameraTest;
