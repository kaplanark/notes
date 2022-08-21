<template>
    <div id="login">
        <v-container>
            <v-row>
                <v-col md="6" offset-md="3">
                    <v-card>
                        <a :href="link + client_id" class="btn-github"> Github Login</a>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            link: 'https://github.com/login/oauth/authorize?client_id=',
            client_id: "",
        }
    },
    created() {
        this.$axios.get('/github/auth')
            .then(response => {
                this.client_id = response.data.client_id
            }).catch(error => {
                console.log(error)
            })
    },
}
</script>
<style lang="scss">
#login {
    height: 100vh;

    .container {
        height: 100%;

        .row {
            height: 100%;
            align-items: center;
            justify-content: center;
        }
    }
}

.btn-github {
    display: block;
    padding: 12px 16px;
    background-color: black;
    width: fit-content;
    color: white;
    text-decoration: none;
}
</style>