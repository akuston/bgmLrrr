<template>
    <div class="about">
        <h1>Login</h1>
        <p></p>
    </div>
</template>
<script setup>
import api from '@/api';
let resdata;
const getuser = async () => {
    resdata = await api.user.getUser()
    console.log(resdata);
}
getuser()

</script>
<style></style>
