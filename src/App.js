import React, { Fragment, useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import './App.css';
import logo from './logo.svg';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: '16MevfF7ba_NvMveIFMy8xd1zGeNqCa0yJY3Zfo-fvsE',
      simpleSheet: true
    }).then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="App">
      {data.map((item, i) => (
        <Fragment key={i}>
          <p>Tên sản phẩm -- {item.name}</p>
        </Fragment>))
      }
    </div>
  );
}

export default App;
