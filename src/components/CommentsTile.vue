<template>
  <div class="divComments">
    <h2>{{post.postId}}</h2>
    <p>{{post.id}}</p>
    <p>{{post.name}}</p>
    <p>{{post.email}}</p>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
  export default {
    name: 'CommentsTile',
    props: {
      post: {required: true}
    }
  }
</script>

<style>
.divComments{
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>