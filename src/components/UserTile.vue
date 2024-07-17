<template>
  <div class="divUser">
    <h2>{{post.name}}</h2>
    <p>{{post.username}}</p>
    <p>{{post.email}}</p>
    <p>{{mapAddress(post.address)}}</p>

  </div>
</template>

<script>
  export default {
    name: 'UserTile',
    props: {
      post: {required: true}
    },
    methods: {
      mapAddress(address){
      return `${address?.suite}, ${address?.city}, ${address?.zipcode}`;
      }
    }
  }

</script>
<style>
.divUser{
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
