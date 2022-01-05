import React, {useEffect, useState} from 'react';
import {getStorybyIds} from '../services/news.Api';
import {Story} from '../components/Story';
import {StoryHeading, StoryWrapper} from '../styles/Styles'

export const StoriesContainer = () => {

    // storyIds is initiazlied to an empty array
    const[storyIds, setStoryIds] = useState([]);

    // useEffect is watching the storyIds
    useEffect(() => {
        getStorybyIds().then(newsdata => setStoryIds(newsdata));
        console.log('Use effect function');
    }, []);

return(

   <StoryHeading>
   
    <h1>Hacker News Stories</h1>   
    
    
    {storyIds.map(storyId => ( <Story key = {storyId} storyId = {storyId}/>))}
    </StoryHeading>
    
);
};