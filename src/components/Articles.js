import { useEffect } from "react";
import { useState } from "react";
import SkeletonArticle from "../Skeletons/SkeletonArticle";
const Articles = () => {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        // to delay the fetching of data to see the skeletons
        setTimeout(async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await result.json();
            setArticles(data);
        }, 5000)
    })
    const articlesArray = [1, 2, 3, 4, 5]
    return (
        <div className='articles'>
            <h2>Articles</h2>
            {/* if the true is true its going to execute whats on the right side , and if its not it will not render */}
            {articles && (
                articles.map(article => (
                    <div className='article' key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                    </div>
                ))
            )}
            {/* what to show when the articles are null (while the data is loading ) */}
            {!articles && (
                <div>
                    {
                        articlesArray.map(article =>
                            <div key={article} >
                                <SkeletonArticle />
                            </div>
                        )
                    }
                  
                </div>
            )
            }
        </div>
    );
}
export default Articles;
