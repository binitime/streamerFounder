import { render, screen } from '@testing-library/react';
import App from './App';
import { useState } from 'react';

let [a,b] = useState('남자 코트 추천');
// a는 useState 안에 있는 내용
// b는 state 변경 도와주는 함수
// 왜 쓸까? 자주 변경할 소요가 큰 변수
let [따봉, c] = useState(0);

function spanClick () {

}

return (
  <div>
    <h4><span onClick={}>좋아요</span> {따봉} </h4>    
  </div>
)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
