<script setup>



const articles = useArticles().articles.list;



const CategoriesArr = ['Sport', 'Tech', 'Games'];

/*
let sportArticles = articles.filter(item => item.category == "Sport");
let sportID = getRandomItem(sportArticles.map(item => item.id))
//console.log(sportID)
//console.log(sportArticles)


let techArticles = articles.filter(item => item.category == "Tech");
let techID =  getRandomItem(techArticles.map(item => item.id))
//console.log(techArticles)



let gamesArticles = articles.filter(item => item.category == "Games");
let gamesID =  getRandomItem(gamesArticles.map(item => item.id))*/
//console.log(gamesArticles)

//console.log(articles);




let sportID =  getRandomItem(articles, 'Sport')

let techID =  getRandomItem(articles, 'Tech')

let gamesID =  getRandomItem(articles, 'Games')




console.log(techID)
//console.log(sportID)
//console.log(gamesID)



function getRandomItem(arr,category) {


    let newArr = [];
    let parameter;

    if(category == 'Sport'){
        let filteredArr = arr.filter(item => item.category == category)
        

       for (parameter of filteredArr){
            newArr.push(parameter.id)
       }
       
       const randomIndex = Math.floor(Math.random() * newArr.length);

       const item = newArr[randomIndex];

       //console.log(newArr)

       return item;

    }else if(category == 'Tech'){
        
        let filteredArr =  arr.filter(item => item.category == category)
        
       for (parameter of filteredArr){
            newArr.push(parameter.id)
       }
       
       const randomIndex = Math.floor(Math.random() * newArr.length);

       const item = newArr[randomIndex];

       //console.log(newArr)

       return item;

    }else if(category == 'Games'){

        let filteredArr=arr.filter(item => item.category == category)

       for (parameter of filteredArr){
            newArr.push(parameter.id)
       }
       
       const randomIndex = Math.floor(Math.random() * newArr.length);

       const item = newArr[randomIndex];

       //console.log(newArr)

       return item;

    }
}


function pickID (techID, gamesID, sportID ,category){

    if(category == 'Sport'){
        //console.log(sportID)
        return sportID;

    }else if(category == 'Tech'){
        //console.log(techID)
        return techID;

    }else if(category == 'Games'){
        //console.log(gamesID)
        return gamesID;
    }

}


</script>

<template>

<div>
    <Header></Header>

 
        <div class="article-container">

            <h1 class="welcome-h1">Welcome to our site</h1>
            <div class="welcome-div">We mainly focus on making articles about sports, tech and games.</div>
            
            <div class="articles">
                <h1 class="article-nazov">Article preview</h1>
                <div class="wrapper">
                    
                <div v-for="category of  CategoriesArr" :key="category"  :class="'specificArticles-container'">
                        <h1 class="articleName-h1"> {{category}} </h1>
                        <div v-for="article of articles.filter(item => item.category == category)" v-bind:key="article"  v-bind:class="'specific-article'"> 
                        <NuxtLink class="link" v-if="article.id == pickID(techID, gamesID,sportID, category)" :to="{path:`/articles/${article.id}`,params:{id:article.id}}" ><div class="inner-title"><strong>{{ article.title }}</strong></div><br> <div class="inner-content">{{ article.content.substring(0,300) }} </div>  </NuxtLink>
                        </div>  
                </div>

                </div>
            
            </div>
        </div>
    <Footer></Footer>
    </div>


 
</template>

<style scoped>

*{
    font-family: 'Montserrat', sans-serif;
    
    
}

template{
    background-color: rgb(241, 234, 234);
}




.article-container{
    padding-top: 275px;
    margin: auto;
    width: 1000px;
    
    
}

.welcome-h1{
    padding-top: 150px;
    font-size: 40px;
}

.welcome-div{
    font-size: 19px;
}


.articleName-h1{
    border-bottom: black solid;
    padding-bottom: 15px;
    margin-bottom: 30px;

}

.article-nazov{
    text-align: center;
    font-size: 125px;
    padding-top: 450px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 360px);
  grid-auto-rows: minmax(100px, auto);
  padding-top: 50px;

  
 
}



.articles{
    padding-top: 75px;
    padding-bottom: 500px;
    margin: auto; 
    max-width: 1000px;
   


}

.specificArticles-container{
  
    border: solid black;
    border-radius: 15px;
    padding-bottom: 15px;
    margin-right: 75px;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    height:min-content;

}


.specific-article{
    text-align: center;
    margin-bottom: 15px;
    
  
}

.link{
    text-decoration: none;
    color:black;
}


.inner-title{
    font-size: 21px;
    color: rgb(74, 74, 82);
    margin-left: 5px;
    margin-right: 5px;
    
}
.inner-content{

    margin-top: 10px;
    font-size: 18px;
    margin-left: 5px;
    margin-right: 5px;
    transition: 0.4s ease-in-out;
    font-style: italic;
}

.inner-content:hover{
    transform: scale(1.1);
    color: rgba(62, 62, 68, 0.699);
}

</style>