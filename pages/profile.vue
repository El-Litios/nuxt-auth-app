<template>
  <div class="container py-5 min-h-screen">
    <div>
      <h1>Perfil de usuario</h1>
      <button
        @click="logOut"
        class="px-3 py-2 rounded-md bg-red-500 text-white inline-flex items-center justify-center"
      >
        Cerrar Sesión
      </button>

      <pre>
        {{ userStore.user }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userStore = useUserStore();

definePageMeta({
  middleware: ["auth"],
});

const logOut = async () => {
  await userStore.logout();
  useRouter().go(0);
  
};
</script>

<style></style>
