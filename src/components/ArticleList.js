import Article from "./Article"


function ArticleList({postArry}) {
    const post = postArry.map(post => 
    <Article 
    key={post.id}
    title={post.title}
    date={post.date}
    preview={post.preview}
    />

)
        
return(
<main>{post}</main>
)
}


export default ArticleList;

//array # will be determinded by props passed down from Article 
// key prop to each Article 