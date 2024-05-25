import React,{useEffect, useState} from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults]=useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 
 const  updateNews = async() => {
    props.setProgress(10);
    setLoading(true);
    props.setProgress(40);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    )
      .then((response) => response.json())
      .then((data) => {
        props.setProgress(70);
        setArticles(data.articles)
        setTotalResults(data.totalResults)
        setLoading(false)
        props.setProgress(100);
      });
    
  }
  useEffect(() => {
    document.title = `NewsSphere ~ ${capitalizeFirstLetter(props.category)}`;
   updateNews();
    // eslint-disable-next-line
  },[])
  
  

  const fetchMoreData = async () => {
    setPage(page+1)
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    ).then((response) => response.json()).then((data) => {
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
      });
      
    
  };


    return (
      <>
        <h1 className="mt-5 pt-5 text-danger text-center">
          NewsSphere - Top{" "}
          {capitalizeFirstLetter(props.category) === "General"
            ? ""
            : capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className="container-fluid my-3">

          <div className="row">
            {/* {!loading && */}
            {articles?.map((element) => {
              return (
                <div className="col-lg-3 col-sm-6 p-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : element.title.slice(0, 50)
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        
      </>
    );
}


// In class we have to write these propTypes inside the export just below the render() method using static keyword , 
// But in Function based we write these props at the bottom just like written below and we remove the static keyword 
// with the function name and a dot ,i.e like here the function name/class name is News, 
// so we have to write like this 👇 News.propTypes.


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
