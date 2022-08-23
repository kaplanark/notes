<template>
    <div id="login">
        <v-container>
            <div class="container">
                <div v-if="error.status" class="row mt-5">
                    <div class="col d-flex justify-content-center">
                        <div class="alert alert-danger">
                            {{ error.message }}
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col d-flex justify-content-center">
                        <form @submit.prevent="login()">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" class="form-control" id="username" aria-describedby="emailHelp"
                                    placeholder="Enter username" v-model="credentials.username" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password"
                                    v-model="credentials.password" />
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            error: {
                status: false,
                message: "",
            },
            credentials: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        login() {
            let payload = { ...this.credentials };
            this.$store
                .dispatch("loginRequest", payload)
                .then(() => {
                    this.$router.push({ name: "Notes" });
                })
                .catch((error) => {
                    (this.error.status = true),
                        (this.error.message =
                            error.response.data ||
                            error.response.error ||
                            error.response.detail ||
                            "Unable to login with given credentials.");
                });
        },
    },
};
</script>