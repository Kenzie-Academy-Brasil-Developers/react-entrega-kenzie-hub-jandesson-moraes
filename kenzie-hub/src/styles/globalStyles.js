import { createGlobalStyle } from "styled-components";
import reset from "react-style-reset/string";

export const GlobalStyle = createGlobalStyle`
    ${reset};
 
    :root {

        --Color-primary: #FF577F;
        --Color-primary-Focus:#FF427F;
        --Color-primary-Negative:#59323F;
        
        --Grey-0:#F8F9FA;
        --Grey-1:#868E96;
        --Grey-2:#343B41;
        --Grey-3:#212529;
        --Grey-4:#121214;
        
        --Sucess:#3FE864;
        --Negative:#E83F5B;       

    }

    @media(min-width: 700px;) {
        :root {
            font-size: 62.5%;
        };
    };

    *{
        background-color:var(--Grey-4);
        border: none;
        background-color:transparent;
    }

    body{
        background-color: var(--Grey-4);
    }

`;
