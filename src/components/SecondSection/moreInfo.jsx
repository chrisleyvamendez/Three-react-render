import styled from 'styled-components';

export default function Info() {
    return (
        <>
        <Wrapper>
            <h1 className="about">about me</h1>
        </Wrapper>
        </>
    )


}

export function CardInfo(){
    return (
        <>
        <div className="header">
            <h1>engineer with a passion for building with new tech</h1>


        </div>

        </>
    )
}


const Wrapper = styled.div`
margin: auto;
text-align: center;
.about {
    font-size: 4rem; 

    @media(max-width: 450px){
        font-size: 2rem;
  }

}


`;