import {injectGlobal} from 'styled-components';
import {bodyBg, grayMain} from 'styled/app/colors.styled';

injectGlobal`

    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');

    body {
        background-color: ${bodyBg};
        color: ${grayMain};
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 15px;
        font-weight: 300;
    }
    
    main {
        margin-top: 20px;
    }
 
    * {
        box-sizing: border-box;
    }
`;