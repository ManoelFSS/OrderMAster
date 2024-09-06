import styled from "styled-components";

export const Container_Card_Product = styled.section`
    width: 290px;
    height: 200px;
    background-color: #fff;   
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    .top_card {
        display: flex;
        width: 100%;
    }

    .top_card .top_sections:nth-child(1) {
        flex: 1;
        height: 100px;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .top_card .top_sections:nth-child(2) {
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 8px;

            h3 {
                font-size: 1.1rem;
                font-weight:bolder;
                color: #e7ac09;
                text-transform: uppercase;
            }

            .price {
                display: flex;
                align-items: center;
                gap: 20px;

                h5 {
                    font-size: 1rem;
                    font-weight: 600;
                }

                p {
                    font-size: 1rem;
                    font-weight: bolder;
                    color: #aaa;
                    
                }
            }

            .status {
                display: flex;
                align-items: center;
                width: 100%;
                gap: 20px;
                padding: 5px 0px;

                h4 {
                    font-size: 1rem;
                    font-weight: 600;
                }

                span {
                    font-size: 1.2rem;
                    font-weight: bolder;
                }
            }
    }

    .card_bottom {
        h3 {
            font-size: 1.2rem;
            font-weight: bolder;
            text-align: center;
            padding: 5px;
            width: 100%;
        }

        p {
            font-size: 0.8rem;
            text-align: center;
            padding: 5px;
            width: 100%;
            border-top: solid 3px #e7ac09;
        }
    }

`