import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import Loading from './Loading';
import { fetchHackerNews } from '../lib/fetchHackerNews';

export default class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
        status: 'unset'
    };
  }

  getNews = async () => {
    this.setState({
      status: 'loading'
    })

    const hackerNews = await fetchHackerNews()
    console.log(hackerNews);
    
    this.setState({
      hackerNews,
      status: 'complete'
    })
  }
  render() {
        const { hackerNews, status } = this.state;
        if (status === 'unset'){
          return <center><Button onClick={this.getNews}>Fetch News</Button></center>
        } else if (status === 'loading') {
            return <Loading />
        } else if (status === 'complete') {
           return (
            <ListGroup flush>
              { hackerNews.map(article => 
                <ListGroupItem 
                  key={article.id} 
                  tag='a' 
                  href={article.url ? article.url : `https://news.ycombinator.com/item?id=${article.id}`}>
                    {article.title}
                </ListGroupItem>
              )}
              </ListGroup>
           )
        }
    } 
}
