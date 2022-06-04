<template>
    <v-app-bar id="core-app-bar" absolute app color="transparent" flat height="88">
        <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
            <v-btn v-if="responsive" dark icon @click.stop="onClick">
                <v-icon>mdi-view-list</v-icon>
            </v-btn>
            {{ title }}
        </v-toolbar-title>

        <v-spacer />

        <v-toolbar-items>
            <v-row align="center" class="mx-0">
                <v-text-field class="mr-4 purple-input" color="purple" label="Search..." hide-details />

                <v-btn icon to="/">
                    <v-icon color="tertiary">mdi-view-dashboard</v-icon>
                </v-btn>

                <v-menu bottom left offset-y transition="slide-y-transition">
                    <template v-slot:activator="{ attrs, on }">
                        <v-btn class="toolbar-items" icon to="/notifications" v-bind="attrs" v-on="on">
                            <v-badge color="error" overlap>
                                <template slot="badge">
                                    {{ notifications.length }}
                                </template>
                                <v-icon color="tertiary">mdi-bell</v-icon>
                            </v-badge>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-list dense>
                            <v-list-item v-for="notification in notifications" :key="notification.id" @click="onClick">
                                <v-list-item-title v-text="notification.text" />
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>

                <v-btn to="/user-profile" icon>
                    <v-icon color="tertiary">mdi-account</v-icon>
                </v-btn>
                <v-btn v-if="loggedIn" @click="logout" icon>
                    <v-icon color="tertiary">mdi-export</v-icon>
                </v-btn>
            </v-row>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
// Utilities
import { mapMutations } from 'vuex';
import { mapState } from 'vuex';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        title: null,
        responsive: false,
    }),

    watch: {
        $route(val) {
            this.title = val.name;
        },
    },

    computed: {
        ...mapState('auth', ['loggedIn', 'user']),
        ...mapGetters({
            notifications: 'notifications/getList',
        }),
    },

    mounted() {
        // const strToken = this.$auth.strategy.token.get();
        // const token = strToken.substr(7);
        // const evtSource = new EventSource('http://localhost:8000/api/notifications/sse?token=' + token);
        // this.onResponsiveInverted();
        // window.addEventListener('resize', this.onResponsiveInverted);

        // evtSource.addEventListener('notify', function (event) {
        //     // Logic to handle status updates
        //     console.log(event);
        // });
        this.$store.dispatch('notifications/setList');
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResponsiveInverted);
    },

    methods: {
        ...mapActions({
            setList: 'notifications/setList',
        }),
        ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
        onClick() {
            this.setDrawer(!this.$store.state.app.drawer);
        },
        onResponsiveInverted() {
            if (window.innerWidth < 991) {
                this.responsive = true;
            } else {
                this.responsive = false;
            }
        },
        async logout() {
            await this.$auth.logout();
        },
    },
};
</script>

<style>
/* Fix coming in v2.0.8 */
#core-app-bar {
    width: auto;
}

#core-app-bar a {
    text-decoration: none;
}
</style>
