<template>
    <article class="entry">
        <p class="title -password">Password</p>
        <div class="entry-area">
            <img class="entry-area__icon" src="@/assets/icons/lock-icon.svg" alt="lock-icon">
            <input class="input -password" :type="inputType" v-model="inputValue" required>
            <img :src="iconUrl" alt="toggle-icon" @click="togglePassword">
            <div v-if="inputValue && !passwordFlag" class="tooltip">Password must contain at least 1 uppercase letter, lowercase letter,
                number, special character. More than 8 characters.</div>
        </div>
    </article>
</template>

<script>
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

export default {
    name: 'Entry',
    data() {
        return {
            inputValue: "",
            inputType: "password",
            iconUrl: require("@/assets/icons/eye-not-look-icon.svg"),
            passwordFlag: true,
        }
    },
    watch: {
        inputValue(newValue) {
            this.passwordFlag = PASSWORD_PATTERN.test(newValue);
            this.$emit('password-validated', this.passwordFlag);
        }
    },
    methods: {
        togglePassword() {
            this.inputType = this.inputType === "password" ? "text" : "password";
            this.iconUrl = this.inputType === "password"
                ? require("@/assets/icons/eye-not-look-icon.svg")
                : require("@/assets/icons/eye-look-icon.svg");
        },
    }
}
</script>

<style lang="scss" scoped>
.entry {
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: $sp-sm;
    margin-bottom: $sp-md;

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
        }

        #toggle-icon {
            cursor: pointer;
        }
    }
}
</style>