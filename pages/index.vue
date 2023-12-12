<template>
  <div class="container fñex items-center justify-center">
    <div>
      <h1>Welcome</h1>
      <p>Ingresa a tu perfil</p>
      <button
      @click="signIn"
        class="px-3 py-2 rounded-md bg-emerald-500 text-white inline-flex items-center justify-center"
      >
        Ingresar
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userStore = useUserStore();

definePageMeta({
  middleware: ['already-authenticated']
})

const signIn = async () => {
  await userStore.signIn({
    username: "kminchelle",
    password: "0lelplR",
  });

  await navigateTo("/profile", { replace: true });
};
</script>

<style></style>
