<template>
  <div class="users-page">
    <div class="user-creator">
      <UserCreator />
    </div>
    <div class="user-list">
      <UserList />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCreator from './components/UserCreator.vue'
import UserList from './components/UserList.vue'
</script>

<style lang="scss">
.users-page {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .user-creator,
  .user-list {
    display: flex;
    justify-content: center;
    flex-basis: 50%;
  }
}
</style>
