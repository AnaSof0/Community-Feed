import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import Head from "next/head";


const QuestionDetailContainer=styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    margin:5%;
`;

export default function QuestionDetail(){
    const router = useRouter();
    const { id } =router.query;

    const [loading,setLoading] = useState(false);
    const [question,setQuestion]=useState({});

    useEffect(()=>{
        async function fetchData(){
            const data = await fetch(`https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`);

            const result = await data.json();

            if(result){
                setQuestion(result.items[0]);
                setLoading(false);
            }
        }
        id && fetchData();
        },[id]
    );

    return (
        <QuestionDetailContainer>
            {loading?(
                <span>Loading...</span>
            ):(
                <>
                    <Head>
                        <title>{question.title}</title>
                    </Head>
                <Card
                    title={question.title}
                    views={question.view_count}
                    answers={question.answer_count}

                    score={question.score}
                    link={question.link}
                    lastActivity={new Date(question.last_activity_date *1000).toLocaleString()}
                    creation={new Date(question.creation_date *1000).toLocaleString()}
                    tags={question.tags}



                />
                </>
            )}
        </QuestionDetailContainer>
    )
}