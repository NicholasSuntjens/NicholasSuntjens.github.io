function matchImageHeights() {
  document.querySelectorAll('.project-images-two, .project-images-three, .project-images-four').forEach(group => {

    const images = [...group.querySelectorAll('img')];

    if (!images.length) return;

    // reset images to their natural size
    images.forEach(img => {
      img.style.height = 'auto';
      img.style.width = '100%';
      img.style.objectFit = 'initial';
    });

    // determine the height of the smallest image
    const minHeight = Math.min(
      ...images.map(img => img.getBoundingClientRect().height)
    );

    // refit all images to the smallest height
    images.forEach(img => {

      const ratio = img.naturalWidth / img.naturalHeight;

      img.style.height = `${minHeight}px`;
      img.style.width = `${minHeight * ratio}px`;
      img.style.objectFit = 'initial';
      img.style.justifySelf = 'center';

    });
  });
}

window.addEventListener('load', matchImageHeights);
window.addEventListener('resize', matchImageHeights);
