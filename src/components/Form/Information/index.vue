<template>
    <article class="information">
        <img src="@/assets/images/user-photo.png" alt="user-photo">
        <div class="information-list">
            <p class="information-item">Business Account</p>
            <p class="information-item -name">Sarah Bills</p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Information',
}
</script>

<style lang="scss" scoped>
.information {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: $sp-md;

    &-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: $sp-xxs;
    }

    &-item {
        @include font($first-font, $fs-sm, $font-medium, $catalina-blue);

        &.-name {
            font-size: $fs-lg;
            font-weight: $font-bold;
        }
    }
}
</style>