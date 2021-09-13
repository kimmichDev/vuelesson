<template>
    <div>
        <h1>This is profile</h1>
        <Logout></Logout>
    </div>
</template>

<script>
import Logout from "../components/Logout.vue";
export default {
    components: { Logout },
    name: "Profile",
    // component guard
    // beforeRouteEnter: (to, from, next) => {
    //     if (localStorage.getItem("vueAuth") == "true") {
    //         next();
    //     } else;
    //     {
    //         next("/");
    //     }
    // },
};
</script>

<style lang="scss" scoped></style>
