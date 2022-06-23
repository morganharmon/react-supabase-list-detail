import { useEffect, useState } from 'react';
import ImageRender from './ImageRender.js';
import { getImages } from './services/fetch-utils';

export default function ImagesPage() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 40;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const list = await getImages(from, to);
      setImages(list);
    }
    fetch();
  }, [page]);

  return (
    <div>
      You are viewing page {page}.
      <button disabled={ page <= 1 } onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      {
        images.map((image, i) => <ImageRender key={image.url + i} image={ image } />)
      }
    </div>
  );
}