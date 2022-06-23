import { getSingleImage } from './services/fetch-utils.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ImageDetail() {
  const [image, setImage] = useState({});
  let { id } = useParams();

  useEffect(() => {
    async function fetch() {
      const image = await getSingleImage(id);
      setImage(image);
    }
    fetch();
  }, [id]);

  return (
    <div>
      This is the image detail page.
      <h3>Author: {image.author}</h3>
      <img src={`${image.download_url}`}></img>
    </div>
  );
}