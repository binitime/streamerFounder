import React, { useState } from 'react';
import './index.css';

import searchButtonImg from
'./images/searchButton.png';
import logoImg from
'./images/logo.png';

const App = () => {
  const [channelName, setChannelName] = useState('');
  const [results, setResults] = useState(null); 

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ channelName })
      });
      const data = await response.json();
      console.log(data);
      setResults(data.items);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <p className="logo">
      <img src={logoImg} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </p>
      <main>
        <section className="search-box">
        <form onSubmit={handleSearch}>
          <input type="text"  value={channelName}
              onChange={(e) => setChannelName(e.target.value)} placeholder="방송인, 스트리머, BJ 검색" aria-label="Search" />
          <button type="submit" className="search-button">
            <img src={searchButtonImg} alt="검색" />          
          </button>
          </form>
        </section>
      </main>
      <footer>
        <p>© 2024 방송 채널 검색 포탈. 모든 권리 보유.</p>
      </footer>
    </div>
  );
};

export default App;
