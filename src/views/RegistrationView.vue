<template lang="pug">
.container 
    .registration 
        h2 Реєстрація 
        form(type="submit")
            input(placeholder="Ім'я")
            button(@click.prevent="test")
</template>