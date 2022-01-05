import React, {useState, useEffect} from 'react';
import { getStory, storyUrl } from '../services/news.Api';
import { StoryWrapper, StoryTitle, StoryMetaElement, StoryMeta} from '../styles/Styles';
import {mapTime} from '../mappers/map.timer'

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, [])
    
    return story && story.url ? (
       <StoryWrapper data-testid="story">
        <StoryTitle>
        <StoryMetaElement color = "#000"> Story:</StoryMetaElement> <a href = {story.url}>{story.title}</a>
       </StoryTitle>
        <StoryMeta> 

            <span data-testid="story-by">
                <StoryMetaElement color = "#000">By: </StoryMetaElement>{story.by}
            </span>
        </StoryMeta>
        <StoryMeta>
            <span data-testid="story-time">
                <StoryMetaElement color = "#000">Time: </StoryMetaElement> {``}
                {mapTime(story.time)}
            </span>
        </StoryMeta>
    </StoryWrapper>
    ): null;
};