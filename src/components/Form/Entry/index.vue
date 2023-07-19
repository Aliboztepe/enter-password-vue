<template>
    <article class="entry">
        <p class="title -password">Password</p>
        <div class="entry-area">
            <img class="entry-area__icon" src="@/assets/icons/lock-icon.svg" alt="lock-icon">
            <input id="password-input" class="input -password" type="password">
            <img id="toggle-icon" src="@/assets/icons/eye-not-look-icon.svg" alt="toggle-icon">
            <div class="tooltip" id="passwordTooltip">Password must contain at least 1 uppercase letter, lowercase letter,
                number, special character. More than 8 characters.</div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Form',
}
</script>

<style lang="scss" scoped>
.entry {
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: $sp-sm;

    &-area {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 16px;
        position: relative;

        &__icon {
            position: absolute;
            top: 50%;
            left: 8px;
            transform: translateY(-50%);
        }

        .tooltip {
            position: absolute;
            @include font($first-font, $fs-xl, $font-bold, $catalina-blue);
            width: 90%;
            top: 50px;
            left: 0;
            border-radius: $r-lg;
            padding: $sp-xs;
            font-size: $fs-xs;
            color: $catalina-blue;
            display: none;
        }

        #toggle-icon {
            cursor: pointer;
        }
    }
}
</style>