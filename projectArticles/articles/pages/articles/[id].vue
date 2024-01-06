<template>
    <!--<pre>
        {{ routa}}
    </pre>-->
    <div>
    
    <Header></Header>
        <div class="article-container">
           
            <div class="back-container">
            <NuxtLink to="/articles/" class="back" >Back</NuxtLink>
            </div>
        
            <div class="back-container">
            <NuxtLink  to="/articles/" class="delete" v-on:click="deleteArticlebyID(ID)" > Delete </NuxtLink>
            </div>

             <div class="border-container">
            
                <div class="article-title"  v-if="editBool == false">{{ ClickedArticle.title }}</div>
                <div v-else class="extra-text"><textarea class="textAreaTitle" v-model="editedTitle"  />Title</div>
                

                <div class="article-content content"  v-if="editBool == false">{{ ClickedArticle.content }}</div>
                <div v-else class="extra-text"><textarea class="textAreaContent" v-model="editedContent"  />Content</div>
  
            <button class="edit-btn" v-if="editBool == false" @click = "editClick()">Edit</button>
            <button class="edit-btn" v-if="editBool == true" @click = "saveClick()" v-on:click=" editArticlebyID(editedTitle, editedContent, ID)">Save</button>
            <button class="delete" v-if="editBool == true" @click = "cancelClick()">Cancel</button>
        </div> 
        
        </div>

        
    <Footer></Footer>

    </div>
</template>

<script setup>

const ID = useRoute().params.id;
const articles = useArticles().articles.list;
const {deleteArticlebyID, editArticlebyID} = useArticles();

let routa = useRoute();

const editBool = ref(false)

let ClickedArticle = articles.filter(item =>  ID == item.id)[0]

console.log(ClickedArticle)
//console.log(ID)

const editedTitle = ref(ClickedArticle.title)
const editedContent = ref(ClickedArticle.content)


const editClick = () => {
    editBool.value = true;
}

const saveClick = () => {
    editBool.value = false;  
}


const cancelClick = () => {
    editBool.value = false;
    editedTitle.value = ClickedArticle.title
    editedContent.value =  ClickedArticle.content
}

</script>

<style scoped>

*{
    font-family: 'Montserrat', sans-serif;
}



template{
    background-color: rgb(241, 234, 234);
}

.border-container{

    margin-top: 150px;
    padding: 50px;
    border: none solid;
    background: rgba(219, 216, 216, 0.178);
    border-radius:50px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin-bottom: 225px;
}

.article-container{
    padding-top:175px ;
    margin: auto;
    width: 1000px;
}

.article-title{
    margin-top: 25px;
    font-size: 45px;
    font-weight: bold;
}

.article-content{
    margin-top: 105px;
    font-size: 18px;
    
}

.textAreaTitle{
    width: 750px;
    height: 200px;
    resize: none;
    font-size: 45px;
    font-weight: bold;
    border-radius: 15px;
    padding:10px;
}

.textAreaContent{
    width: 100%;
    height: 250px;
    resize: none;
    font-size: 18px;
    border-radius: 15px;
    padding:15px;
}


.extra-text{
    margin: 50px;
    font-size:23px;
    font-weight: bold;
    font-style: italic;
    color:rgb(143, 158, 180);
}

.content{
    word-spacing: 5px;
    letter-spacing: 1px;
    font-weight: bolder;
    font-style: italic;
}

.back{
    text-decoration: none;
    font-weight: bolder;
    color: black;
    border: 3px rgb(145, 140, 140) solid;
    border-radius:15px;
    padding: 15px;
    background-color: rgba(219, 216, 216, 0.479);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: 0.3s ease-in-out;
  
    

}

.delete{

    
    text-decoration: none;
    font-weight: bolder;
    color: black;
    border: 3px rgb(145, 140, 140) solid;
    border-radius:15px;
    padding: 15px;
    background-color: rgba(161, 14, 14, 0.699);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: 0.3s ease-in-out;

}


.edit-btn{

    text-decoration: none;
    font-weight: bolder;
    color: black;
    border: 3px rgb(145, 140, 140) solid;
    border-radius:15px;
    padding: 15px;
    background-color: rgba(24, 172, 19, 0.774);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: 0.3s ease-in-out;
    align-self: top;
    margin-top: 80px;
    margin-right: 20px;
}

.back-container{
    position: relative;
    margin-bottom: 45px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    width: 1000px;
    z-index: 0;
}
.delete:hover{

    background-color: rgb(241, 8, 8);
  
}

.back:hover{
    background-color: rgba(117, 113, 113, 0.658);
}

.edit-btn:hover{

    background-color: rgba(23, 209, 17, 0.897);
    cursor: pointer;
}
</style>