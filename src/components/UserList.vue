<template>
    <div>
        <v-btn @click="this.$router.push('/adduser')">Add User</v-btn>
        <v-table>
            <thead>
                <tr>
                    <th>
                        <v-responsive 
                            max-width="344"
                        >
                            <v-switch 
                                v-model="this.sortById"
                                @change="sortUsers"
                                label="ID"
                            ></v-switch>
                        </v-responsive>
                    </th>
                    <th>
                        <v-responsive
                            max-width="344"
                        >
                            <v-text-field 
                                v-model="this.filterUsername"
                                type="input"
                                placeholder="Username"
                                variant="underlined"
                            ></v-text-field>
                        </v-responsive>
                    </th>
                    <th>
                        <v-responsive
                            max-width="344"
                        >
                            <v-btn 
                                variant="text" 
                                disabled=""
                            >Actions</v-btn>
                        </v-responsive>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="user in filterUsers"
                    :key="user.id"
                >
                    <td>{{ user.id }}</td>
                    <td>{{ user.username }}</td>
                    <td>
                        <v-btn
                            variant="plain"
                            @click="$router.push(`/userlist/${user.id}`)"
                        >View profile</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            sortById: false,
            filterUsername: ''
        }
    },
    computed: {
        ...mapGetters([
            'USERS'
        ]),

        filterUsers: function() {
            const usernameToFilter = this.filterUsername;
            return this.USERS.filter(function(el){
                if(usernameToFilter==='') {
                    return true
                } else {
                    return el.username.indexOf(usernameToFilter) > -1;
                }
            })
        },

        sortUsers: function() {
            this.USERS.sort((a,b) => {
                if( this.sortById) {
                    return b.id - a.id
                } else {
                    return a.id - b.id
                }
            })
        }
    },

    mounted() {
        this.GET_USERS()
    },

    methods: {
        ...mapActions([
            'GET_USERS'
        ])
    }
}
</script>

<style lang="scss" scoped>
.v-btn {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    
    a {
        text-decoration: none;
    }
}
</style>