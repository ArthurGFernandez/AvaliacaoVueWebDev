<template>
  <div class="divAlbum">
    <h2>{{post.userId}}</h2>
    <p>{{post.id}}</p>
    <p>{{post.title}}</p>

  </div>
</template>

<script>
  export default {
    name: 'AlbumTile',
    props: {
      post: {required: true}
    }
  }
</script>
<style>
.divAlbum{
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
