<template>
    <div>
        <button class="btn btn-primary" @click="logout()">Logout</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.setItem("vueAuth", "false");
            this.$router.push("/");
        },
    },
};
</script>

<style lang="scss" scoped></style>
