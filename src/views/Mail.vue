<template>
  <div class="card no-padding wrapper">
    <div class="card-nav">
      <ul class="list">
        <router-link
          :to="'/mail/' + email.id"
          v-for="email in emails"
          :key="email.id"
          custom
          #="{ navigate }"
        >
          <li class="list-item" :key="email.id" @click="navigate">
            <a href="#">
              {{ email.theme }}
            </a>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="card-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["emails"],
  components: {},
};
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 8px;
}
.card-nav {
  .list {
    display: flex;
    flex-direction: column;
    background: #283eaa;
    color: #fff;
  }
  .list-item {
    padding: 8px;
    cursor: pointer;
    &:hover {
      background: #1e64cd;
    }
  }
}
</style>
