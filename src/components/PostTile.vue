<template>
  <div class="divPost">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>

  </div>
</template>

<script>
    export default {
      name: 'PostTile',
      props: {
        post: {required: true}
      }
    }
</script>
<style>
.divPost{
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>