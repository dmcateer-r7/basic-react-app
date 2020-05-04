import fetch from 'isomorphic-fetch'

export const fetchHackerNews = async () => {
    let allArticles = []
    const topArticleIds = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    const topArticleIdsResponse = await topArticleIds.json();
    
    for(let i=0; i<topArticleIdsResponse.slice(0, 10).length; i++){
        const news = await fetch(`https://hacker-news.firebaseio.com/v0/item/${topArticleIdsResponse[i]}.json?print=pretty`)
        allArticles.push(news.json());
    }
    
    return Promise.all(allArticles);
};