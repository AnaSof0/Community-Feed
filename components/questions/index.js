import styled from 'styled-components';
import Card from '../../components/Card';
import Link from 'next/link';
import Pagination from '../../components/Pagination';


const QuestionsContainer = styled.div`
    display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const CardLink = styled.a`
  text-decoration: none;
    
`;
const QuestionTitle=styled.h2`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    font-family: 'Bungee Shade', sans-serif;
    font-size: calc(20px + 2vmin);
    font-weight: 100;
    text-shadow: -1px -1px black;
    color: #2842ef;
    @media screen and (max-width: 768px) {
        color: #f143d7;
    }

`;

export default function Questions({ questions, hasMore, page }) {
    return (
        <>
            <QuestionTitle>
                Questions
            </QuestionTitle>
        <QuestionsContainer>
            <div>
                {questions.map((question) => (
                    <Link key={question.question_id} href={`/questions/${question.question_id}`} passHref>
                        <CardLink>
                            <Card title={question.title} views={question.view_count} answers={question.answer_count} score={question.score}
                                  link={question.link}
                                  lastActivity={new Date(question.last_activity_date *1000).toLocaleString()}
                                  creation={new Date(question.creation_date *1000).toLocaleString()}
                                  tags={question.tags}
                                   />
                        </CardLink>
                    </Link>
                ))}
            </div>
            <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore} />
        </QuestionsContainer>
        </>
    );
}

export async function getServerSideProps(context) {
    const { page } = context.query;
    const data = await fetch(`https://api.stackexchange.com/2.2/questions?${page ? `page=${page}&` : ''}order=desc&sort=hot&tagged=reactjs&site=stackoverflow`);
    const result = await data.json();

    return {
        props: {
            questions: result.items,
            hasMore: result.has_more,
            page: page || 1,
        }
    };
}

