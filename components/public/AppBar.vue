<template>
    <v-app-bar app dark color="green">
        <v-toolbar-title>MexxDent</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
            <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
                <v-icon left>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { title: 'Главная', path: '/', icon: 'home' },
                { title: 'Регистрация', path: '/register', icon: 'face' },
                { title: 'Войти', path: '/login', icon: 'lock_open' },
            ],
        };
    },
};
</script>

<style></style>
