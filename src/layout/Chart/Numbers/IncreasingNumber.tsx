import { useEffect, useRef } from "react";
import { countAnimate } from "./countAnimate";

function IncreasingNumber({ children }: { children: number }) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    countAnimate(spanRef.current as HTMLSpanElement, children, 4000)
  }, [children])

  return <span ref={spanRef}></span>;
}

export default IncreasingNumber;
