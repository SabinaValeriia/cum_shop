<template lang="pug">
.category 
    .category__block-first
        router-link(:to="{name: 'Catalog'}")
            button До каталогу
</template>

<style lang="scss" scoped>
.category{
    &__block {
        display: flex;
        &-first{
            background: url("../assets/images/bg.jpg");
            height: 700px;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            button {
                padding: 15px 35px;
                left: 50%;
                transform: translate(-50%, 0);
                position: absolute;
                width: 149px;
                height: 51px;
                bottom: 141px;
                background: #DDE8F6;
                border: none;
            }
        }
    }
}
@media (max-width: 768px){
    .category{
    &__block {
        display: flex;
        &-first{
            background: url("../assets/images/bg-tablet-category.png");
            height: 700px;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            button {
                padding: 15px 35px;
                left: 50%;
                transform: translate(-50%, 0);
                position: absolute;
                width: 149px;
                height: 51px;
                bottom: 141px;
                background: #DDE8F6;
                border: none;
            }
        }
    }
}
}
</style>