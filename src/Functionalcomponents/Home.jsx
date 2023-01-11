import React, { useState , useEffect}  from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from './Newsitem'

export default function Home(props) {
 
  var [articles,setarticles] = useState([])
  var [totalResults,settotalResults] = useState([])
  var [page,setpage] = useState(1)
   const getAPIData = async()=>{
   
    var response = ""
    if(props.search)
     response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=1&pageSize=20&language=${props.language}&apiKey=8c78707418c347f0ad95e46a75e43375`)
    else
     response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=1&pageSize=20&language=${props.language}&apiKey=8c78707418c347f0ad95e46a75e43375`)
    var result = await response.json()
    setarticles(result.articles)
    settotalResults(result.totalResults)

    
  }
  const fetchMoreData = async()=>{
    setpage(page+1)
    var response = ""
    if(props.search)
     response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&pageSize=20&language=${props.language}&apiKey=8c78707418c347f0ad95e46a75e43375`)
    else
     response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&pageSize=20&language=${props.language}&apiKey=8c78707418c347f0ad95e46a75e43375`)
    var result = await response.json()
    setarticles(articles.concat(result.articles))

  }
  
useEffect(()=>{
  getAPIData()
},[props])
    return (
      <div className="container-fluid mt-1">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults }
          loader={<div className='my-5 text-center'>
            <div className="spinner-border " role="status">
  <span className="visually-hidden">Loading...</span>
</div>
          </div>}
        >
          <div className="row">
          <h5 className='background text-light text-center p-2 '>{props.q} News Section</h5>
          {
            articles.map((item,index)=>{
              return <Newsitem key = {index}
              pic={item.urlToImage}
              title={item.title}
              source={item.source}
              description = {item.description}
              date = {item.publishedAt}
              url = {item.url}
              />
              
            })
          }
        </div>
          </InfiniteScroll>
      </div>
    )
  }

