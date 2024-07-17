<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });

        const data = await response.text();
        this.message = data;

        if (response.ok) {
          // Redireciona para a rota desejada após o login
          this.$router.push('/home-principal');
        }
      } catch (error) {
        console.error('Error:', error);
        this.message = 'Error logging in';
      }
    }
  }
};
</script>


<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input[type="text"], input[type="password"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #008CBA;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.message {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}
</style>