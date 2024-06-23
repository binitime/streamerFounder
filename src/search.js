import React, { useState } from 'react';
import './index.css';

import searchButtonImg from
'./images/searchButton.png';
import logoImg from
'./images/logo.png';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

  return (
    <div>
      <p className="logo">
      <img src={logoImg} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </p>
<main>
        <section className="search-box">
      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          placeholder="방송인, 스트리머, BJ 검색"
          aria-label="Search"
        />
        <button type="submit" className="search-button">
        <img src={searchButtonImg} alt="검색" />
        </button>
      </form>
    <div>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index}>
              <p>{result.name}</p> {/* 결과 구조에 따라 이름 필드 조정 */}
              <p>{result.description}</p> {/* 추가 정보 표시 */}
            </div>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>

        </section>
      </main>      
      <footer>
        <p>© 2024 방송 채널 검색 포탈. 모든 권리 보유.</p>
      </footer>
    </div> 
    );
};

export default Search;
