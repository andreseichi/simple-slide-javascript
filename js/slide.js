export const Slide = () => {
  const slide = document.querySelector('.slide');
  const slideWrapper = document.querySelector('.slide-wrapper');

  const onMove = () => {
    console.log('movendo');
  };

  const onStart = (event) => {
    event.preventDefault();
    slideWrapper.addEventListener('mousemove', onMove);
  };

  const onEnd = () => {
    slideWrapper.removeEventListener('mousemove', onMove);
  };

  slideWrapper.addEventListener('mousedown', onStart);
  slideWrapper.addEventListener('mouseup', onEnd);
};
