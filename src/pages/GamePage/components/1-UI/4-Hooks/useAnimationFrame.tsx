import { useCallback, useLayoutEffect, useRef } from "react";
import {
  RefNumberNullType,
  RefNumberType,
} from "../../../shared/Types/RefTypes";

type AnimationFrameCallback = (
  deltaTime: number,
  totalElapsedTime: number,
) => void;

const useAnimationFrame = (callback: AnimationFrameCallback) => {
  const requestRef: RefNumberNullType = useRef(null);
  const lastTimeRef: RefNumberType = useRef(performance.now());
  const elapsedTimeRef: RefNumberType = useRef(0);

  const animate = useCallback(() => {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTimeRef.current;
    elapsedTimeRef.current += deltaTime;
    lastTimeRef.current = currentTime;
    callback(deltaTime, elapsedTimeRef.current);
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useLayoutEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]); // Make sure the effect only runs once
};

export default useAnimationFrame;
