import styled from 'styled-components';


export function FirstCard(){
  return (
    <>
    <Box>
      <p>This is my room,<br/> I <span>designed</span> it on blender</p>
    </Box>
    

    </>
  )
}

export default function TextSection() {
    return (
        <Wrapper>
            <Title>Chris Leyva</Title>
            <Desc><span>junior</span> software engineer</Desc>
        </Wrapper>
    )
}

const Box = styled.div`

  transition: ease-out cubic-bezier(0.165, 0.84, 0.44, 1);
  pointer-events: none;
  background-color: #1982FC;
  position: absolute;
  left: auto;
  right:auto; 
  z-index: 2;

  bottom: 39rem;
  left: 0; 
  right: -10rem; 
  margin-left: auto; 
  margin-right: auto; 
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);



  cursor: pointer;
  max-width: 10rem;
  border-radius: 20px;
  p {
    font-weight: 400;
    padding: 13px;
    span{

      font-weight: 600;
    }
  }

  @media(min-width: 480px){
    font-size: 20px;
    max-width: fit-content;
    bottom: 9rem;
    
  }

  @media(min-width: 800px){
    bottom: 56rem;
    right: -29rem;
  }



`;



const Wrapper = styled.div`

  position: relative;
  width: fit-content; 
  margin: auto;
  text-align: center;
  pointer-events: none;
  font-family: -Arial, Helvetica, sans-serif ;
  z-index: 0;
  z-index: 20;  @media (max-width: 768px) {
    position: absolute;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  

`;

const Title = styled.h1`

  position: relative;
  z-index: 10;
  padding-top: 2rem;
  pointer-events: none;
  font-size: 4rem;
  font-style: normal;
  font-weight: bold; 
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  position: relative; 
  z-index: 12;
  color: #839788;
  font-style: normal; 
  margin-top: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  word-spacing: 3px;


 

  span{
    color: #D88C9A;
     
  }
`;