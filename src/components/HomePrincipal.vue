<template>
  <div>
    <h3>{{ nome }}</h3>
    <p>Bem vind{{ letraPorSexo }} {{ nome }}</p>
  </div>

  <div @click="navigateToHomeSecundario">
    <h3>Informações do Banco de Dados</h3>
  </div>
</template>

<script>
export default {
  name: 'HomePrincipal',
  props: {
    nome: { type: String, required: true },
    sexo: { type: String, required: true }
  },
  computed: {
    letraPorSexo() {
      return this.sexo === 'F' ? 'a' : 'o';
    }
  },
  methods: {
    navigateToHomeSecundario() {
      this.$router.push({ name: 'HomeSecundario' });
    }
  }
};

</script>

<style scoped>

</style>
