function About({imgSrc='https://via.placeholder.com/215', about}){
    return (
    <aside>
        <img src={imgSrc} alt='blog logo'></img>
        <p>{about}</p>

    </aside>
    )
}

export default About;

//image src default value will be imgSrc='https://via.placeholder.com/215' 

//<p> will have the about text </p>