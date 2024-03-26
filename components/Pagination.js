import styled from 'styled-components';
import Link from 'next/link';

const PaginationContainer=styled.div`
    display:flex;
    justify-content: center;

`;

const PaginationLink=styled.a`
    padding: 5px 5px;
    margin: 1%;
    background: ${(props) => (!props.disabled ? '#1df5bc' : '#05f5b6')};
    pointer-events: ${(props) => (!props.disabled ? 'all' : 'none')};
    cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
    color: #1c37ea;
    text-decoration: none;
    border-radius: 10px;
    font-size: calc(10px + 2vmin);
`;

export default function Pagination({currentPage,hasMore}){
    return(
        <PaginationContainer>
            <Link href={`?page=${parseInt(currentPage)-1}`}>
                <PaginationLink disabled={currentPage <=1}>
                    Previous
                </PaginationLink>
            </Link>
            <Link href={`?page=${parseInt(currentPage)+1}`}>
                <PaginationLink disabled={!hasMore}>
                    Next
                </PaginationLink>
            </Link>
        </PaginationContainer>
    )
}