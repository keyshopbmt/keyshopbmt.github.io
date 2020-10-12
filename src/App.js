import React, { Fragment, useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import './App.css';
import logo from './logo.svg';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';


const App = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    let shouldCancel = false;
    let call = async () => {
      let response = await axios.get('https://keyshopbmt-photos.glitch.me/LzDPihcy68dcgpVC8');
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(response.data.map(url => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`
        })));
      }
    }
    call();
    return () => shouldCancel = true;
  }, []);

  return images ? <ImageGallery items={images} /> : null;
}


// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     Tabletop.init({
//       key: '16MevfF7ba_NvMveIFMy8xd1zGeNqCa0yJY3Zfo-fvsE',
//       simpleSheet: true
//     }).then((data) => setData(data))
//       .catch((err) => console.warn(err));
//   }, []);

//   return (
//     <div className="App">
//       {data.map((item, i) => (
//         <Fragment key={i}>
//           <p>Tên sản phẩm -- {item.name}</p>
//         </Fragment>))
//       }
//     </div>
//   );
// }

export default App;
