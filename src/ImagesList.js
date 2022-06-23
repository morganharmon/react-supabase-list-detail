import ImageRender from './ImageRender.js';

export default function ImageList({ images }) {
  return (
    <div>
      {
        images.map((image, i) => <ImageRender key={image.url + i} image={ image } />)
      }
    </div>
  );
}