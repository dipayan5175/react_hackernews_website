import styled  from "styled-components";



export const StoryHeading = styled.h3`
    font-style: system-ui;
    color: darkcyan; 
`


export const StoryWrapper = styled.section`
    
    padding-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid #cccccc;


    &: first-of-type{
        border-top:0;
    }

    &: last-of-type{
        margin-bottom: 0;
        padding-bottom: 0;
    }

`;

export const StoryTitle = styled.h3`
    margin-bottom: 10 px;
    font-size: 10 px;
    line-height: 1.8;
    margin: 0;
    text-decoration: auto; 

    a{
        color: cadetblue;
        text-decoration: underline;
    }
`;

export const StoryMeta = styled.div`

    font-style: Open Sans;
    color: cadetblue;
    .story__meta-bold{
        font-weight: bold;
    }

`;

export const StoryMetaElement = styled.span`
    font-weight: bold;
    color: ${props => props.color || 'black'}

`;