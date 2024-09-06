import styled from "styled-components";

export const Container_header = styled.header`

    position: relative;
    padding-bottom: 60px;
    background-color: #b91616;
    z-index: 113;
  
  .header_area {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background-color: #e7ac09;
    position: fixed;
    z-index: 113;
    top: 0;

    .iconToogle {
      height: 40px;
      width: 40px;
      left: 10px;
      top: 12px;
      transition: all 0.3s ease;
      z-index: 100;
      cursor: pointer;
    }
  }

  .carrinho {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    position: relative;

    span {
      position: absolute;
      top: 22px;
      left: 55%;
      transform: translate(-50%, -50%);
      font-size: 1rem;
      font-weight: bolder;
      font-weight: 600;
    }

    .iconCart{
      position: absolute;
      color: #000;
      height: 45px;
      width: 55px;
      cursor: pointer;
    }
  }



`
