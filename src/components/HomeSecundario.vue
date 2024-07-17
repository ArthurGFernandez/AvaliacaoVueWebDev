<template>

  <router-link to="/home-principal">Home</router-link>
  <div>
    {{ msg }}
    <button class="tile action-button" @click="meuArray = []">Limpar Posts</button>
    <button class="tile action-button" @click="carregar">Carregar Posts</button>
      <p v-for="element in meuArray">
        <PostTile :post="element" />
      </p>

    <button class="tile action-button" @click="meuArrayUsers = []">Limpar Users</button>
    <button class="tile action-button" @click="carregarUsers">Carregar Users</button>
    <p v-for="element in meuArrayUsers">
      <UserTile :post="element" />
    </p>

    <button class="tile action-button" @click="meuArrayAlbum = []">Limpar Album</button>
    <button class="tile action-button" @click="carregarAlbum">Carregar Album</button>
    <p v-for="element in meuArrayAlbum">
      <AlbumTile :post="element" />
    </p>

    <button class="tile action-button" @click="meuArrayPhotos = []">Limpar Photos</button>
    <button class="tile action-button" @click="carregarPhotos">Carregar Photos</button>
    <p v-for="element in meuArrayPhotos">
      <PhotosTile :post="element" />
    </p>

    <button class="tile action-button" @click="meuArrayComments = []">Limpar Comments</button>
    <button class="tile action-button" @click="carregarComments">Carregar Comments</button>
    <p v-for="element in meuArrayComments">
      <CommentsTile :post="element" />
    </p>

  </div>
</template>

<script>
import PostTile from "../components/PostTile.vue";
import UserTile from "../components/UserTile.vue";
import AlbumTile from "../components/AlbumTile.vue";
import PhotosTile from "../components/PhotosTile.vue";
import CommentsTile from "../components/CommentsTile.vue";
export default {
  name: 'HomeSecundario',
  components: {
    PostTile,
    UserTile,
    AlbumTile,
    PhotosTile,
    CommentsTile
  },
  data() {
    return {
      msg: "",
      meuArray: [],
      meuArrayUsers: [],
      meuArrayAlbum: [],
      meuArrayPhotos: [],
      meuArrayComments: []
    }
  },
  created() {
    this.msg="Informações do Banco de Dados";

  },
  methods: {
    carregar() {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => {
            this.msg = "chegou os Posts";
            this.meuArray = data;
            this.msg = "Renderizou os Posts";

          });
    },
    carregarUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(dataUsers => {
            this.msg = "Chegou os Users";
            this.meuArrayUsers = dataUsers;
            this.msg = "Renderizou os Users.";
          });
    },
    carregarAlbum(){
      fetch('https://jsonplaceholder.typicode.com/albums')
          .then(response => response.json())
          .then(dataAlbum => {
            this.msg = "Chegou os Albums";
            this.meuArrayAlbum = dataAlbum;
            this.msg = "Renderizou os Albums"
          });
    },
    carregarPhotos(){
      fetch('https://jsonplaceholder.typicode.com/photos')
          .then(response => response.json())
          .then(dataPhotos => {
            this.msg = "Chegou as Photos"
            this.meuArrayPhotos = dataPhotos;
            this.msg = "Renderizou as Photos"
          });
    },
    carregarComments(){
      fetch('https://jsonplaceholder.typicode.com/comments')
          .then(response => response.json())
          .then(dataComments => {
            this.msg = "Chegou os comments";
            this.meuArrayComments = dataComments;
            this.msg = "Renderizou os comments"
          });
    }
  }
}


</script>

<style scoped>

.tile {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tile:hover {
  transform: translateY(-5px);
}


.tile h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}


.tile p {
  line-height: 1.6;
  color: #333;
}


.tile .action-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #008CBA;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.tile .action-button:hover {
  background-color: #005c7a;
}
</style>
