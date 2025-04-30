<script>
const STATES_IN_PROGRESS = [
  "in_progress_basics",
  "in_progress_components",
  "in_progress_router",
  "in_progress_vuex",
  "in_progress_composition",
];
const STATES = [...STATES_IN_PROGRESS, "done"];
const STATES_OF_PLAN_ITEM = ["idle", "active", "done"];

const PLAN_OF_LEARNING_VUE = [
  {
    id: 1,
    name: "Основы",
    description: "Здесь есть порно с детьми",
  },
  {
    id: 2,
    name: "Компоненты",
    description: "Здесь вас повторно используют",
  },
  {
    id: 3,
    name: "Роутер",
    description: "Здесь вы поймёте, что существуют другие пути",
  },
  {
    id: 4,
    name: "Vuex",
    description:
      "Они были разработаны другими альфа-самцами с дырявыми жопами 10 000 лет назад",
  },
  {
    id: 4,
    name: "Композиция",
    description:
      "У этих дырявых жоп прекраснейшая композиция, и теперь... Время пришло. Вы тоже станете альфа-Архитектором и будете иметь уже своих сынов",
  },
];

export default {
  data() {
    return {
      state: STATES[0],
      PLAN_OF_LEARNING_VUE,
      STATES_OF_PLAN_ITEM,
    };
  },
  methods: {
    setStateToInProgressByIndex(idx) {
      this.state = STATES_IN_PROGRESS[idx];
    },
    setStateToDone() {
      this.state = STATES.at(-1);
    },
    startAgain() {
      this.state = STATES[0];
    },
    goBack() {
      this.state = STATES[this.idxActivePlanItem - 1];
    },
    goForward() {
      this.state = STATES[this.idxActivePlanItem + 1];
    },
  },
  computed: {
    idxActivePlanItem() {
      return this.state === "done"
        ? STATES_IN_PROGRESS.length - 1
        : STATES_IN_PROGRESS.indexOf(this.state);
    },
    activePlanItem() {
      return this.PLAN_OF_LEARNING_VUE[this.idxActivePlanItem];
    },
  },
};
</script>

<template>
  <div class="main">
    <another-component />
    <h1>План изучения Vue.js</h1>
    <div class="description">{{ activePlanItem.description }}</div>
    <div class="nav">
      <div v-for="(item, idx) in PLAN_OF_LEARNING_VUE" :key="item.id">
        <button
          class="nav-item"
          :disabled="idxActivePlanItem === idx"
          @click="setStateToInProgressByIndex(idx)"
        >
          <div
            :class="{
              circle: true,
              '--idle': idxActivePlanItem < idx,
              '--active': idxActivePlanItem === idx && state !== 'done',
              '--done': idxActivePlanItem > idx || state === 'done',
            }"
          >
            {{ idx + 1 }}
          </div>
          <div>{{ item.name }}</div>
        </button>
      </div>
    </div>
    <div class="nav-buttons">
      <button class="nav-button" v-show="state === 'done'" @click="startAgain">
        Начать заново
      </button>
      <button
        class="nav-button"
        :disabled="idxActivePlanItem === 0"
        @click="goBack"
        v-show="state !== 'done'"
      >
        Назад
      </button>
      <button class="nav-button" @click="goForward" v-show="state !== 'done'">
        {{ state === "in_progress_composition" ? "Закончить" : "Вперёд" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.main {
  background: #d6d6f9;
  width: 600px;
  min-height: 200px;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 24px auto;
  cursor: default;
}
.nav {
  margin-top: 32px;

  display: flex;
  gap: 8px;
}
.nav-buttons {
  margin-top: 8px;

  display: flex;
  gap: 8px;
}
.nav-button {
  all: unset;
  cursor: pointer;

  background: #6a55b5;
  color: #fff;

  padding: 0 24px;
  height: 30px;
  border-radius: 16px;
  text-align: center;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
.nav-item {
  all: unset;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;

  &:disabled {
    cursor: default;
  }
}
.circle {
  background: #6a55b5;
  color: #000;

  width: 30px;
  height: 30px;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.--idle {
  background: #767688;
}
.--active {
  color: #fff;
}
.description {
  min-height: 40px;
}
</style>
