import React, { useContext, useEffect, useState } from 'react';
import { ArticlesContext } from'../../components/componentsNews/ArticlesContext';
import NewsBox from '../componentsNews/NewsBox';

function OurNewsArticles() {
  const articles = useContext(ArticlesContext);
  const [loadedArticles, setLoadedArticles] = useState([]);

  useEffect(() => {
    if (articles.length > 0) {
      const firstThreeArticles = articles.slice(0, 3); // Begränsa till tre artiklar
      setLoadedArticles(firstThreeArticles);
    }
  }, [articles]);

  if (loadedArticles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="our-news-articles">
      <div className="container">
        <div className="h2"><h2>Our News & Articles</h2></div>

        <div className="wrapper-articles">
          {loadedArticles.map((article) => (
            <NewsBox
              key={article.id}
              title={article.title}
              content={article.content}
              author={article.author}
              published={article.published} 
              category={article.category}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurNewsArticles;


// import React, { useEffect, useState } from 'react';
// import NewsBox from '../componentsNews/NewsBox';

// function NewsArticles() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const getArticles = async () => {
//       try {
//         const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
//         if (result.ok) {
//           const data = await result.json();
          
//           const firstThreeArticles = data.slice(0, 3);
//           setArticles(firstThreeArticles);
//         } else {
//           throw new Error('Failed to fetch data');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     getArticles();
//   }, []);

//   return (
//     <section className="our-news-articles">
//       <div className="container">
//         <div className="h2"><h2>Our News & Articles</h2></div>

//         <div className="wrapper-articles">
//           {articles.map((article) => (
//             <NewsBox
//               key={article.id}
//               title={article.title}
//               content={article.content}
//               author={article.author}
//               published={article.published} 
//               category={article.category}
//               imageUrl={article.imageUrl}
              
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default NewsArticles;
