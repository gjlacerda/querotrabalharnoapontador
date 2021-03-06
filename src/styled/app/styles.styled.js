import styled from 'styled-components';
import media from 'styled/app/media.styled';

export const Row = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 5px;
`;

export const Box = styled.div`
    background-color: #fff;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 15px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
    
    ${media.tablet`
        padding: 15px;
    `}
`;