<template>
  <div class="divPhotos">
    <h2>{{post.albumId}}</h2>
    <p>{{post.id}}</p>
    <p>{{post.title}}</p>
    <img :src="post.url" alt="Imagem" />
    <img :src="post.thumbnailUrl" alt="Imagem2">

  </div>
</template>

<script>
  export default {
    name: 'PhotosTile',
    props: {
      post: {required: true}
    }
  }
</script>
<style>
.divPhotos{
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>