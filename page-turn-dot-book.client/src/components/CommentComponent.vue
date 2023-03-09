<template>
    <div class="component">
        <div class="d-flex flex-row">
            <form @submit.prevent="handlesubmit">
                <div class="form-control">
                    <input v-model="editable.body" placeholder="Leave a comment..." class="input" name="comment"
                        type="text">
                    <button aria-label="Type comment here" type="submit" class="fs-2">
                        <i class="mdi mdi-send"> </i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";

export default {
    setup() {
        const editable = ref({})
        const route = useRoute()
        return {
            editable,
            profile: computed(() => AppState.account)
        }
    }
}
</script>


<style lang="scss" scoped></style>