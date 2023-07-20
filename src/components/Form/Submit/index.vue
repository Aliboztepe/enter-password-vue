<template>
    <article class="submit">
        <div class="submit-items">
            <label class="switch">
                <input class="switch-input" type="checkbox" v-model="checkboxFlag"/>
                <span class="switch-slider -round"></span>
            </label>
            <p class="desc">Stay signed in</p>
        </div>
        <button id="submit-button" class="btn" disabled="!isEnabled">Continue</button>
    </article>
</template>

<script>
export default {
    name: 'Submit',
    props: {
        isEnabled: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            checkboxFlag: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.submit {
    display: flex;
    gap: $sp-md;
    width: 377px;

    &-items {
        display: flex;
        align-items: center;
        gap: $sp-sm;
        width: 100%;

        .desc {
            @include font($first-font, $fs-md, $font-semibold, $catalina-blue);
        }
    }
}
</style>