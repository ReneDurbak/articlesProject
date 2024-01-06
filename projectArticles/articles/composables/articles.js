const articles = reactive({
    list:[
        {
         id: 1,
         content: "Napinavy zapas strasne.",
         title: "Real Madrid prehral proti Barcelone 1:0",
         category: "Sport",
        },
        {
         id: 2,
         content: "Crazyyy",
         title: "Man Utd vyhral nad Real Betisom",
         category: "Sport",
        },
        {
         id: 3,
         content: "O nicom ale nevadi",
         title: "Fc kosice vs Komarno",
         category: "Sport",
        },
        {
         id: 4,
         content: "Lebo tu je futbal o nicom, proste to nevieme, totalne nas rozbili a slovensky tim to nezvladol a zacali bit rozhodcu, takze taka klasika.",
         title: "Tim z 6. Anglickej ligy porazil 1. ligovy slovensky tim",
         category: "Sport",
        },
        {
         id: 5,
         content: "nikto nevie",
         title: "Novy vynalez neviem co idk",
         category: "Tech",
        },
        {
         id: 6,
         content: "Progamujes saleno ",
         title: "Prelomovy sposob programovania",
         category: "Tech",
        },
        {
         id: 7,
         content: "Vsetko ma svoje pros a cons",
         title: "JS alebo Python?",
         category: "Tech",
        },
        {
         id: 8,
         content: "React 100%",
         title: "Je pre zaciatocnikove lepsi Angular alebo React? ",
         category: "Tech",
        },
        {
         id: 9,
         content: "Ked neratame mafia 1 definitive edition ale aj tak co mafia 2 > mafia 1 hocikto kto ma iny nazor ma zly nazor, takze tak.",
         title: "Mafia 2 > Mafia 1",
         category: "Games",
        },
        {
         id: 10,
         content: "An Open World First-Person Shooter Create your own FPS adventure. Customize your weapons, your skills and your approach to each mission, whether you favor intense run-and-gun action, stealthy close-up takedowns or long-range sniping.Encounter a diverse and realistic cast of characters, including one of Far Cry’s most notorious villains: Vaas Montenegro. Dive into this deep and enriching story where morals are questionable and hope is all but abandoned. Play online or split screen and team up in a four-player campaign which challenges you to be your best and work together to prevail. Experience the island through the eyes of a wayward crew in their own quest to survive against the odds.",
         title: "Far Cry 3 > Far Cry 4",
         category: "Games",
        },
        {
         id: 11,
         content: "Ludia co nevedia docenit kvalitu budu hovorit ze GTA 5 kampan je o nicom ale pritom oni su o nicom, takze mali by prehodnotit svoj neadekvatny nazor.",
         title: "GTA 5 kampan je underrated",
         category: "Games",
        },{
         id: 12,
         content: "Ked pominiem, ze sa to laguje niekedy brutalne lebo neviem preco, tak je to bomba uplna. Pribeh, hratelnost a spracovanie je na tu dobu na velmi vysokej urovni. ",
         title: "GTA 4 je taktiez nedocene",
         category: "Games",
        },



    ]
})



const deleteArticlebyID = (id) => {

    
    articles.list = articles.list.filter(item => item.id != id)
    //console.log(articles.list.filter(item => item.id != id))
}


const editArticlebyID = (editedTitle, editetContent, articleID) =>{
    articles.list.filter(item => {
        if(item.id == articleID){
            item.content = editetContent;
            item.title = editedTitle;
        }
        
    })
    
}



export const useArticles = () => {
    return{articles, deleteArticlebyID,editArticlebyID}
}