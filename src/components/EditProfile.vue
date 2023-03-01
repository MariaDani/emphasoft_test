<template>
    <div>
        <v-responsive
            max-width="344"
        >
        <h2>User {{ userId }}</h2>
        <span 
            v-for="(value, key) in userInfo"
            :key="value"
        >
            <br>
            {{ key }} : {{ value }}
            <br>
        </span>
        </v-responsive>
        <router-view></router-view>
        
    </div>

</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userId: this.$route.params.id,
            userInfo: {}
        }
    },

    mounted() {
        this.getInfo()
    },

    methods: {
        async getInfo() {
            const id = this.userId
            await axios.get(`https://test-assignment.emphasoft.com/api/v1/users/${id}/`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            }).then(res => {
                console.log(res.data)
                this.userInfo = res.data
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>
.v-responsive {
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 40px;

    span {
        font-size: 0.875rem;
        font-weight: 500;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
    }

    h2 {
        font-weight: 500;
        text-transform: uppercase;
    }
}
</style>