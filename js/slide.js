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
    const pointerPosition =
      event.type === 'mousemove'
        ? event.clientX
        : event.changedTouches[0].clientX;
    const finalPosition = updatePosition(pointerPosition);
    moveSlide(finalPosition);
  };

  const onStart = (event) => {
    let moveType;
    if (event.type === 'mousedown') {
      event.preventDefault();
      dist.startX = event.clientX;
      moveType = 'mousemove';
    } else {
      dist.startX = event.changedTouches[0].clientX;
      moveType = 'touchmove';
    }
    slideWrapper.addEventListener(moveType, onMove);
  };

  const onEnd = (event) => {
    const moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove';
    slideWrapper.removeEventListener(moveType, onMove);
    dist.finalPosition = dist.movePosition;
  };

  slideWrapper.addEventListener('mousedown', onStart);
  slideWrapper.addEventListener('touchstart', onStart);
  slideWrapper.addEventListener('mouseup', onEnd);
  slideWrapper.addEventListener('touchend', onEnd);
};
