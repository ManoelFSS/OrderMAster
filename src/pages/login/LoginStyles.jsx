import styled from "styled-components";


export const Container = styled.div`


    display: flex;
    flex-direction: column;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(360deg, #000, #000, #000 , #e7ac09 90%);
    gap: 60px;


.logo{
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: none;
    transition: all 0.3s;
    background-color: #e7ac09;
}

.login-btn {

    width: 280px;
    height: 50px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.5s;
    border: solid 2px #fff;
    color:#fff;

    .google {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }

    &:hover, h3 {
        border: solid 2px #e7ac09;
        color: #e7ac09;
    }
}


`