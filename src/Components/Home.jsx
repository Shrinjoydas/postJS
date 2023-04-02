import React, { useEffect, useState } from 'react';
import Row from './Row';
import axios from 'axios';

function Home() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchtexts = async () => {
      try {
        const { data } = await axios.get('https://dummyjson.com/posts');
        setTexts(data.posts);
      } catch (error) {}
    };
    fetchtexts();
  }, []);
  return (
    <section className="home">
      <div className="row_all">
        {texts.map(i => (
          <Row
           title={i.title} body={i.body} key={i.id} />
        ))}
      </div>

      <div className="genreBox"></div>
    </section>
  );
}

export default Home;
