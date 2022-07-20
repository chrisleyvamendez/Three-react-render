import styled from 'styled-components';

export default function TextSection() {
    return (
      <div className="name-container">
        <h2>Christian Leyva</h2>
        <h3>Software Engineer</h3>
        

      </div>
    )
}

const Wrapper = styled.div`
  width: fit-content;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  z-index: 20;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  width: fit-content;
  font-size: 6rem;
  font-style: normal;
  font-weight: bold; 
  color: #BDBBB6;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #839788;
  font-style: normal; 
  margin: 0;
  font-weight: bold;
  font-size: 2rem;
  word-spacing: 3px;
`;