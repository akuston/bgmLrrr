<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="table">
    <div class="nav">
      <div class="nav_view">
        <div class="nav_avter">
          <div></div>
          <div class="nav_table"></div>
        </div>
        <div class="nav_bar_list">
          <RouterLink to="/calendar"
            ><div class="nav_bar_list_item"></div
          ></RouterLink>
          <div class="nav_bar_list_item"></div>
          <div class="nav_bar_list_item"></div>
          <div class="nav_bar_list_item"></div>
          <div class="nav_bar_list_item"></div>
        </div>
        <div class="nav_bar">
          <div class="nav_bar_back">
            <div class="nav_bar_back_zoom"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.table {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
}

.nav {
  position: fixed;
  top: 1vh;
  left: 2vw;
  width: 10vw;
  height: 98vh;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 100px;
}

.nav_view {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.nav_avter {
  position: absolute;
  top: 0;
  left: 0;
  width: 10vw;
  height: 10vw;
  background-color: #7e7e7e;
  border-radius: 50%;
  transition: height 0.8s;
  cursor: pointer;
}

.nav_table {
  position: fixed;
  top: 1vh;
  left: 2vw;
  width: 0;
  height: 0;
  background-color: beige;
  border-radius: 50%;
  transform-origin: center;
}

.nav_avter:active .nav_table {
  width: 100vw;
  height: 100vw;
  transform: scale(2, 2);
  transition: all 2s;
}

.nav_bar {
  position: relative;
  margin-top: 11vw;
  width: 10vw;
  height: calc(100% - 11vw);
  background-color: #ccc;
  border-radius: 100px;
  transition: all 0.8s;
  overflow: hidden;
}

.nav_bar:hover {
  margin-top: 0;
  transition: all 0.8s;
  height: 100vh;
}

.nav_bar:hover .nav_bar_back {
  top: 0;
  padding: 20%;
  transition: top 0.8s, padding 0.8s 0.7s;
}

.nav_bar_list:hover + .nav_bar {
  margin-top: 0;
  transition: all 0.8s;
  height: 100vh;
}

.nav_bar_list:hover + .nav_bar .nav_bar_back {
  top: 0;
  padding: 20%;
  transition: top 0.8s, padding 0.8s 0.7s;
}

.nav_bar_back {
  position: absolute;
  top: -11vw;
  left: 0;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 5%;
  transition: top 0.8s, padding 0.8s;
  overflow: hidden;
  background-color: #868686;
}

.nav_bar_back_zoom {
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 50%;
  cursor: pointer;
}

.nav_bar_list {
  position: absolute;
  bottom: 0;
  left: calc(50% - 2.5vw);
  width: 50%;
  margin: auto;
  height: 78vh;
  display: flex;
  flex-direction: column;
  z-index: 2;
  align-items: center;
  justify-content: space-evenly;
}

.nav_bar_list_item {
  width: 1vw;
  height: 1vw;
  background-color: #b1b1b1;
  border-radius: 50%;
  cursor: pointer;
}

.content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 85vw;
  overflow: auto;
  padding: 1vw;
  box-sizing: border-box;
}
</style>
