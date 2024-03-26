import styled from 'styled-components';

const CardWrapper = styled.div`
    text-align: left;
    padding: 2%;
    background: #ef92e1;
    border-radius: 5px;
    margin-bottom: 2%;
    @media screen and (max-width: 768px) {
        background: #9494ec;
    }

`;

const Title = styled.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    color: #2842ef;
    border-bottom: 1px solid #1df5bc;
    font-size:calc(15px + 2vmin)
    

`;

const Count = styled.span`
    color: black;
    font-size:calc(2px + 2vmin)
`;
const Info=styled.span`
    display:flex;
    color:black;
    padding:4px;
`;
const Titulo=styled.span`
    color: #2842ef;
    font-weight: 700;
    padding:3px;
`;

function Card({ title, views, answers,score,link,lastActivity,creation,tags}) {
    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Count>
                {`Views: ${views} | Answers: ${answers} | Score : ${score}`}
                <br />

                <br/>
                {`Link: ${link}`}
                <br/>
                <br/>
            </Count>
            <Info>

                <Titulo>
                {`Date information`}
                    <br/>
                </Titulo>
                <br/>
                {`Creation Date: ${creation}`}
                <br/>
                {`Last Activity: ${lastActivity}`}
            </Info>
            <Titulo>
                {`Tags: ${tags}`}
            </Titulo>


        </CardWrapper>
    );
}
export default Card;
