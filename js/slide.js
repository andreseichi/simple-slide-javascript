export const Slide = () => {
  const slide = document.querySelector('.slide');
  const slideWrapper = document.querySelector('.slide-wrapper');

  const dist = {
    finalPosition: 0,
    startX: 0,
    movement: 0,
    movePosition: 0,
  };

  const moveSlide = (distX) => {
    dist.movePosition = distX;
    slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  };

  const updatePosition = (clientX) => {
    dist.movement = (dist.startX - clientX) * 1.4;
    return dist.finalPosition - dist.movement;
  };

  const onMove = (event) => {
    const finalPosition = updatePosition(event.clientX);
    moveSlide(finalPosition);
  };

  const onStart = (event) => {
    event.preventDefault();
    dist.startX = event.clientX;
    slideWrapper.addEventListener('mousemove', onMove);
  };

  const onEnd = () => {
    slideWrapper.removeEventListener('mousemove', onMove);
    dist.finalPosition = dist.movePosition;
  };

  slideWrapper.addEventListener('mousedown', onStart);
  slideWrapper.addEventListener('mouseup', onEnd);
};
