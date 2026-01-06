'use client'; // Essential for accessing window/document
import { useEffect } from 'react';
import Shery from 'sheryjs';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // If using scroll effects

// Register ScrollTrigger if you use scroll-based effects
gsap.registerPlugin(ScrollTrigger);

const SheryEffects = () => {
  useEffect(() => {
    // Determine if code is running on client to avoid SSR errors
    if (typeof window !== 'undefined') {
      
      // 1. Mouse Follower
      Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
      Shery.imageMasker(".mask-target" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Shery",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

      // 2. Magnet Effect
      Shery.makeMagnet(".magnet-target", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
      
      // Cleanup function (optional but recommended for single-page apps)
      return () => {
        // Remove mouse follower element if component unmounts
        const follower = document.querySelector('.mousefollower');
        if (follower) follower.remove();
      };
    }
  }, []);

  return null; // This component doesn't render UI, just effects
};

export default SheryEffects;