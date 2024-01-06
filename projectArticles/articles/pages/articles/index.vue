<template>
    <div>
        <Header></Header>

        <div class="article-container">


            <div v-for="category of  CategoriesArr" :key="category" class="article-wrapper">

              <h1> {{category}} </h1>
              <div v-for="article of articles.filter(item => item.category == category)" v-bind:key="article"  v-bind:class="'article'"> 
               <NuxtLink class="link" :to="{path:`/articles/${article.id}`,params:{id:article.id}}" ><strong>{{ article.title }}</strong><br>  </NuxtLink>

               </div>
            </div>
        </div>
      
        <Footer></Footer>
    </div>
</template>




<script setup>

const articles = useArticles().articles.list;

const CategoriesArr = ['Sport', 'Tech', 'Games'];

</script>




<style scoped>

*{
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    
}

.article-container{
    padding-top: 150px;
    margin: auto;
    width:1010px;
    
}
template{
    background-color: rgb(241, 234, 234);
}


.article-wrapper{

    border: black solid;
    border-radius: 75px;
    background-color: white;
    text-align: center;
    margin-bottom: 325px;
    margin-top: 300px;
    transition: 0.4s ease-in-out;
    width: auto;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

}


.article-wrapper:hover{
    background-color: rgba(33, 116, 194, 0.158);
}


.article{
    margin-bottom: 50px;
    margin-top: 50px;
    transition: 0.4s ease-in-out;
    font-size: 22px;

 
 
    
}

.article:hover{
    transform: scale(1.3);
}


h1{
    font-size: 60px;
    color: black;
    font-style: italic;
    color: black
}

.link{
    text-decoration: none;
    color: black;
}
</style>