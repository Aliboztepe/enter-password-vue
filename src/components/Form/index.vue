<template>
    <form @submit.prevent="formSubmit" class="card">
        <p class="title">Enter your password</p>
        <Information></Information>
        <Entry @password-validated="updateButton" ></Entry>
        <Submit :isEnabled="isButtonEnabled" ></Submit>
    </form>
</template>

<script>
import Information from '@/components/Form/Information';
import Entry from '@/components/Form/Entry';
import Submit from '@/components/Form/Submit';

export default {
    name: 'PasswordView',
    components: {
        Entry,
        Information,
        Submit
    },
    data() {
        return {
            isButtonEnabled: false,
        }
    },
    methods: {
        updateButton(isEnabled) {
            this.isButtonEnabled = isEnabled;
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    padding: $sp-xxl;
    flex-direction: column;
    align-items: flex-start;
    gap: $sp-lg;
    border-radius: $r-md;
    background: $white;
    box-shadow: $min-shadow;

    &::before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity: 0.04;
        background-color: $catalina-blue;
    }
}
</style>