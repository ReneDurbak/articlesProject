<template>
  
 
<header>
    <div class="container">
        <nav class="navbar">
            <NuxtLink to="/" class="nav-branding">Trufallo</NuxtLink>
            <ul class="nav-menu"> 
            <li class="nav-link"><NuxtLink to="/contacts" class="a">Contacts</NuxtLink></li>
            <li class="nav-link"><NuxtLink to="/articles"  class="a">Articles</NuxtLink></li>
            </ul>
        </nav>
        </div>
</header>


</template>




<script>


</script>

<style scoped>

*{
 padding:0;
 margin:0;
}


li{
    list-style: none;
}

.a{
    color:white;
    text-decoration: none;
    font-size: 18px;
}

.nav-link{
    transition: 0.3s ease-in-out;
}
.nav-link:hover{
    transform: scale(1.15);
}

.container{
    width: 1000px;
    margin: auto;
}

.navbar{
    width: 100%;
    margin: auto;
    min-height:70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-menu{
    display: flex;
    justify-content:space-between;
    align-items:center;
    gap: 60px;
}

.nav-branding{
    font-size:30px;
    color:white;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s ease-in-out;

}

.nav-branding:hover{
    transform: scale(1.15);
}


@media(max-width: 1280px){
    .container{
        width: 100%;
    }
}

</style>