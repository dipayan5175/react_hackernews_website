import axios from 'axios';


// Make variables for the urls - root is baseurl 

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newsUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`

export const getStory = async(StoryId) => {
    const result = await axios.get(`${storyUrl + StoryId}.json`).then(({data}) => data);

    return result;
}


// async - Block rendering of UI 
export const getStorybyIds = async() => {
    
    // Promise is storing the value for some time 
    const result = await axios.get(newsUrl).then(({data}) => data); 
    return result;
} 