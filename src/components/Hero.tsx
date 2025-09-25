import { ChevronDown, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="westfield-hero relative h-screen overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/herosection_vid.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-4">
        <button onClick={togglePlay} className="text-white">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button onClick={toggleMute} className="text-white">
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white animate-bounce">
          <ChevronDown className="w-6 h-6 mb-2" />
          <span className="text-sm font-medium">scroll to explore</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#dc2626,#dc2626_10px,#b91c1c_10px,#b91c1c_20px)]"></div>
    </section>
  );
};

export default Hero;