<template>
    <div>
        <h3>{{ $store.state.name }}</h3>

        <!-- <h4>{{ myName }}</h4> -->

        <p>{{ nameBymapState }}</p>

        <p>{{ name }}</p>

        <ul>
            <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
        </ul>

        <hr />
        <p>Total jobs : {{ totalJobs }}</p>
        <p>Job Done : {{ jobDoneC }}</p>
        <p>Job UnDone : {{ undoneJob }}</p>
    </div>
</template>

<script>
import { mapState, mapGetters } from "../../node_modules/vuex/dist/vuex";
export default {
    name: "About",

    // computed: {
    //     myName() {
    //         return this.$store.state.name;
    //     },
    // },

    computed: {
        // ...mapState({
        //     nameBymapState(state) {
        //         return state.name;
        //     },
        // }),

        // ...mapState({
        //     nameBymapState: (state) => state.name,
        // }),

        ...mapState(["name", "fruits"]),
        ...mapGetters(["totalJobs", "jobDoneC", "undoneJob"]),
    },
};
</script>

<style lang="scss" scoped></style>
