<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-form method="post" @submit.prevent="userLogin">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Авторизовация</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                prepend-icon="person"
                                v-model="login.username"
                                label="Email"
                                type="text"
                            ></v-text-field>
                            <v-text-field
                                v-model="login.password"
                                prepend-icon="lock"
                                label="Пароль"
                                type="password"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn type="submit" color="primary">Войти</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            login: {
                username: 'tabarigen@mail.ru',
                password: '5vn63ys9',
            },
        };
    },
    methods: {
        async userLogin() {
            try {
                const form = new FormData();
                form.append('username', this.login.username);
                form.append('password', this.login.password);
                let response = await this.$auth.loginWith('local', { data: form });
                this.$store.commit('auth/SET', { key: 'user', value: this.$auth.user });
                this.$store.commit('auth/SET', { key: 'loggedIn', value: true });
                console.log(response);
                console.log(this.$auth.user);
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<style></style>
