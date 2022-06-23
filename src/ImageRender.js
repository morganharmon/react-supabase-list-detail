import { Link } from 'react-router-dom';

export default function ImageRender({ image }) {
  return (
    <div>
      <Link to={`/ImageDetail/${image.id}`}>
        <h2>Author: {image.author}</h2>
        <img src={`${image.download_url}`} />
      </Link>
    </div>
  );
}