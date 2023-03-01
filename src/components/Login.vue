<template>
    <div>
        <v-responsive
            class="mx-auto"
            max-width="350"
        >
            <h2>Please login</h2>
            <v-form
                ref="form"
                v-model="valid"
                lasy-validation
            >
                <v-text-field 
                    v-model="username"
                    :counter="20"
                    :rules="[v => !!v || 'This field is required']"
                    required
                    type="input"
                    variant="outlined" 
                    placeholder="Username"
                    hint="Enter your username" 
                ></v-text-field>
                <v-text-field 
                    v-model="password"
                    :counter="20"
                    :rules="[v => !!v || 'This field is required']"
                    required
                    type="password"
                    variant="outlined"
                    placeholder="Password"
                    hint="Enter your password"
                ></v-text-field>
                <v-btn
                    @click="this.LOGIN_USER"
                    :rounded="0"
                > Submit </v-btn>
            </v-form>
        </v-responsive>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            valid: true
        }
    },

    computed: {
        username: {
            get() {
                return this.$store.state.loginUsername
            },
            set(value) {
                this.$store.commit('UPDATE_LOGIN_USERNAME', value)
            }
        },

        password: {
            get() {
                return this.$store.state.loginPassword
            },
            set(value) {
                this.$store.commit('UPDATE_LOGIN_PASSWORD', value)
            }
        }
    },

    methods: {
        ...mapActions([
            'LOGIN_USER'
        ])
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

    .v-btn {
        margin: 15px auto;
        display: block;
    }
}
</style>