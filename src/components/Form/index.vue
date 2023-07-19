<template>
    <form @submit.prevent="formSubmit" class="card">
        <Information></Information>
        <Entry></Entry>
        <Submit></Submit>
    </form>
</template>

<script>
import Entry from '@/components/Form/Entry';
import Information from '@/components/Form/Information';
import Submit from '@/components/Form/Submit';

export default {
    name: 'PasswordView',
    components: {
        Entry,
        Information,
        Submit
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
        left: 25%;
        width: 50%;
        height: 100vh;
        opacity: 0.04;
        background-color: $catalina-blue;
    }
}
</style>