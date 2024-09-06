import styled from "styled-components";


export const Container_search = styled.div`
    width: 100%;
    background-color: #2C2C2C;
    position: fixed;
    z-index: 10;
    top: 60px;

    .search {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: #2C2C2C;
        
        h2 {
            color: #aaa;
            font-size: 1.4rem;
        }

        input {
            width: 200px;
            height: 35px;
            padding-left: 15px;
            border-radius: 5px;
            border: none;
            outline: none;
            font-size: 1rem;
            color: #aaa;
            background-color: #2C2C2C;
            box-shadow: inset -2px -2px 6px rgba(180, 180, 180, 0.2) , inset 4px 4px 6px rgba(0, 0, 0, 0.5);

            &::placeholder {
                color: #aaa;
                text-align: center;
            }
        }
    }

    .menu_categorias {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;

        ol {
            display: flex;
            width: 100%;
            justify-content: ;
            align-items: center;
            gap: 20px;
            padding: 20px 40px;
            box-shadow: inset -2px -2px 10px rgba(180, 180, 180, 0.2) , inset 4px 4px 10px rgba(0, 0, 0, 0.5);
            overflow-x: auto;
            

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1rem;
                color: #aaa;
                font-weight: bolder;
                text-transform: uppercase;
                min-width: 200px;
                height: 50px;
                cursor: pointer;
                box-shadow: inset -4px -4px 10px rgba(180, 180, 180, 0.2) , inset 4px 4px 10px rgba(0, 0, 0, 0.6);
                background-color: #2C2C2C;
                border-radius: 15px;
                cursor: pointer;
                trasition: all 0.3s ease;

                &:hover {
                    color: #e7ac09;
                }
            }
        }
    }

`