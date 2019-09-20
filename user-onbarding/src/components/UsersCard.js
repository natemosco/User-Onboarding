import React from "react";
import styled from "styled-components";

const StyledUserCardContainer= styled.div`
    width:100vw;
    height:auto;
    min-height:80vh;
    background-color: peachpuff;
    display:flex;
    flex-wrap:wrap;
    align-items:start;
`;
const StyledUserCard = styled.div`
    width:32%;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    border: dashed 1px grey;
    border-radius: 30px;
    overflow:hidden;
    overflow-wrap:break-word;
    .top{height:100px;
        background-color: dodgerblue;
        h3{
            font-family: helvetica;
            color: WHITE;
        }
    }
`;

export const UsersCard = (props) =>{
    const card = props.user.map(user =>{
        return (
            <StyledUserCard key={user.id}>
                <div className="top">
                    <h3>{user.username}</h3>
                </div>
                <i>{user.email}</i>
                <p>password:{"*".repeat(user.password.length)}</p>
            </StyledUserCard>
        )   
        })
    return(
        <StyledUserCardContainer>
            {card}
        </StyledUserCardContainer>
    )
} 