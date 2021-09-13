<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
    components: { Nav },
};
</script>
<style lang="scss">
$success: #06d6a0;
@import "/node_modules/bootstrap/scss/bootstrap.scss";
</style>
