<script setup></script>

<template>
  <div class="pokeball">
    <div class="topBall"></div>
    <div class="button"></div>
    <div class="bottomBall"></div>
  </div>
</template>

<style scoped>
.pokeball {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  animation: frames .8s linear 0s infinite;
}

.button {
  content: '';
  position: absolute;
  background-color: #fff;
  width: 17px;
  height: 17px;
  border: 4px solid;
  border-radius: 50%;

  z-index: 1;

}

.topBall {
  position: absolute;
  width: inherit;
  height: 50%;
  background-color: red;
  border-bottom: 2px solid;
  top: 0;
  left: 0
}

.bottomBall {
  position: absolute;
  width: inherit;
  height: 50%;
  border-top: 2px solid;
  bottom: 0;
  left: 0
}

/* AnimationFrames */
@keyframes frames {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>