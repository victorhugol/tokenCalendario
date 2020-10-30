import styled from 'styled-components';


export const CadastroStyle = styled.div`

    /* background-color:  #f1f1f1; */
    height: 100vh;
    display : flex;
    justify-content: center;
    align-items : center;
    position : relative;
    bottom : 150px;
    form{
        /* background-color: black; */
        height : 15vh;
        display : flex;
        flex-direction: column;
        justify-content : center;
        align-items : center;
        input[type="text"]{
            margin : 10px;
            /* background: none; */
        }
        input[type="submit"]{
            margin-bottom : 10px;
        }
        a{
            text-decoration: none;
            color : #808080;
        }
    }
    h1{
        display : flex;
        justify-content: center;
        align-items: center;
    }
`