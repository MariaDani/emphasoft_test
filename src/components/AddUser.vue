<template>
    <v-responsive
            class="mx-auto"
            max-width="350"
        >
            <h2>Add user</h2>
            <v-form>
                <v-text-field 
                    v-model="username"
                    required
                    type="input"
                    variant="outlined" 
                    placeholder="Username"
                    hint="Enter your username" 
                ></v-text-field>
                <v-text-field 
                    v-model="password"
                    required
                    type="password"
                    variant="outlined"
                    placeholder="Password"
                    hint="Enter your password"
                ></v-text-field>
                <div class="btn-container">
                    <v-btn
                        @click="backToUsers"
                        :rounded="0"
                        variant="plain"
                    > Back to users </v-btn>
                    <v-btn
                        @click="this.ADD_USER"
                        :rounded="0"
                    > Submit </v-btn>
                </div>
            </v-form>
        </v-responsive>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            // username: '',
            // password: '',
            // is_active: false
        }
    },

    computed: {
        username: {
            get() {
                return this.$store.state.username
            },
            set(value) {
                this.$store.commit('UPDATE_USERNAME', value)
            }
        },

        password: {
            get() {
                return this.$store.state.password
            },
            set(value) {
                this.$store.commit('UPDATE_PASSWORD', value)
            }
        }
    },

    methods: {
        ...mapActions([
            'ADD_USER'
        ]),

        backToUsers() {
            this.$router.push('/userlist')
        }
    }
}
</script>

<style lang="scss" scoped>
.v-responsive {
    margin-top: 50px;

    .v-text-field {
        margin-top: 15px;
    }

    h2 {
        font-weight: 200;
        text-align: center;
        margin-bottom: 25px;
    }

    .btn-container {
        display: flex;
        flex-direction: row;

        .v-btn {
            margin: 15px auto;
            display: block;
        }
    }
}
</style>