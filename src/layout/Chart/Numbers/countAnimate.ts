//Animation
export const countAnimate = (
  //   obj: React.RefObject<HTMLSpanElement>,
  obj: HTMLSpanElement,
  lastVal: number,
  duration: number
) => {
  const initVal = 0;
  let startTime = 0;

  //pass the current timestamp to the step function
  const step = () => {
    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();
    //if the start time is null, assign the current time to startTime
    if (!startTime) {
      startTime = currentTime;
    }
    console.log("I'm working! YAY!");

    //calculate the value to be used in calculating the number to be displayed
    const progress = Math.min((currentTime - startTime) / duration, 1);

    //calculate what to be displayed using the value gotten above
    obj.innerHTML = String(
      Math.floor(progress * (lastVal - initVal) + initVal)
    ); 
    
    if (progress >= 1) obj.innerHTML = String(lastVal);

    //checking to make sure the counter does not exceed the last value (lastVal)
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };

  //start animating
  window.requestAnimationFrame(step);
};
