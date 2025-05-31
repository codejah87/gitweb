import React from 'react'
import Title from './Title'
import { useEffect } from 'react'
import { useState } from 'react';
import MainNews from './MainNews';

const News = () => {
  const [articles,setArticle] = useState([]);
   let APIKEY = '7401fcac8c774b1dab1dc64204c6f53a';
    useEffect(()=> {
      const uri = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${APIKEY}&pageSize=6`;
       
      fetch(uri).then(responses => responses.json()).then(data => 
     setArticle(data.articles)) 
    },[articles]);
   
  return (
   <section>
    <Title head1={'Lastest'}  head2={'News'}/>
     <p className='pop text-center text-gray-600 font-semibold mt-2'>Global News Headline  </p>

       <div className='hero-con gap-2 mb-0'>
        {articles.length <= 0 ?
         <p>New is Unavaliable</p>
          :
         articles.map((News,index)=> {
      return <MainNews key={index} title={News.title} description={News.description} src={News.urlToImage} url={News.url}/>
      
      })}
    
       </div>
       </section>
  )
}
export default News
