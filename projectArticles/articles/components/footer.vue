<template>
    <div class="footer-wrapper">
    <div class="footer-container">
        <h3>Made by <i>Rene Durbak</i></h3>
    </div>
    </div>

</template>

<script setup>

</script>

<style scoped>


.footer-wrapper{
    position: relative;
    bottom: 0;
    left: 0;
    background: rgb(68, 68, 194);
    height: auto;
    width: 100%;
    color: white;

    
}

.footer-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

h3{
    vertical-align: middle;
}

</style>