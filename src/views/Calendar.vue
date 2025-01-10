<script setup>
import api from "@/api";
import { ref } from "vue";
let resdata = ref();

const getData = async () => {
  resdata.value = await api.subject.calendar();
  console.log(resdata);
};
getData();
</script>

<template>
  <div class="page">
    <div class="page_title">calendar</div>
    <div class="calendar" v-for="(item, index) in resdata" :key="index">
      <div class="calendar_title">
        {{ item.weekday.cn }} {{ item.weekday.ja }}
      </div>
      <div class="calendar_list">
        <div
          class="calendar_list_item"
          v-for="(i, x) in item.items"
          :key="x"
          v-show="i.name_cn"
        ></div>
      </div>
    </div>
    <div class="page_footer"></div>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  padding: 1%;
  box-sizing: border-box;
}
.calendar {
  width: 100%;
  margin: 1vh 0;
}
.calendar_list {
  display: flex;
  gap: calc(85vw * 0.01);
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}
.calendar_list_item {
  position: relative;
  width: 19%;
  aspect-ratio: 1 / 1.333;
  border: 1px solid #000;
}
.page_footer {
  height: 3vh;
}
</style>
