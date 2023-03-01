<template>
    <div>
    <v-responsive
            max-width="350"
        >
            <h2>Edit User</h2>
            <v-form
                ref="form"
                v-model="valid"
                lasy-validation
            >
                <v-text-field 
                    v-model="username"
                    required
                    type="input"
                    variant="outlined" 
                    placeholder="Username"
                    hint="Enter your username"
                    :counter="20"
                    :rules="[v => !!v || 'This field is required']" 
                ></v-text-field>
                <v-text-field 
                    v-model="password"
                    required
                    type="password"
                    variant="outlined"
                    placeholder="Password"
                    hint="Enter your password"
                    :counter="20"
                    :rules="[v => !!v || 'This field is required']"
                ></v-text-field>
                <v-text-field 
                    v-model="firstName"
                    type="input"
                    variant="outlined" 
                    placeholder="First Name"
                    hint="Change your first name" 
                    :counter="20"
                    :rules="[v => !!v || 'This field is required']"
                ></v-text-field>
                <v-text-field 
                    v-model="lastName"
                    type="input"
                    variant="outlined"
                    placeholder="Last Name"
                    hint="Change your last name"
                    :counter="20"
                    :rules="[v => !!v || 'This field is required']"
                ></v-text-field>
                <div class="btn-container">
                    <v-btn
                        @click="backToUsers"
                        :rounded="0"
                        variant="plain"
                    > Back to users </v-btn>
                    <v-btn
                        @click="editUser"
                        :rounded="0"
                    > Apply changes </v-btn>
                </div>
            </v-form>
        </v-responsive>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            password: '',
            username: '',
            is_active: false,
            id: this.$route.params.id
        }
    },

    methods: {
        async editUser() {
            const url = `https://test-assignment.emphasoft.com/api/v1/users/${this.id}`
            const data = {
                first_name: this.firstName,
                last_name: this.lastName,
                is_active: this.is_active,
                password: this.password,
                username: this.username

            }
            const config = {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            }

            await axios.put(url, data, config).then((res) => {
                console.log(res)
                const status = res.status
                if(status == 200) {
                    this.$router.push('/userlist')
                }
            }).catch((err) => {
                if(err) {
                    console.log(err)
                }
            })
        },

        backToUsers() {
            this.$router.push('/userlist')
        }
    }
}
</script>

<style lang="scss" scoped>
.v-responsive {
    margin-left: 20px;
    padding-bottom: 10px;
    font-weight: 500;

    h2 {
        margin-bottom: 20px;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
    }
}
</style>