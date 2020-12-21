<template>
  <div id="app">
    <div id="top"></div>
    <div id="mid">
      <div class="mid-left">
        <div class="team">
          <div class="plus-sign" v-on:click="showTeamSelectBox()">+</div>
        </div>
      </div>
      <div id="mid-center">vs</div>
      <div class="mid-right">
        <div class="team">
          <div class="plus-sign">+</div>
        </div>
      </div>
    </div>
    <div id="botton"></div>
  </div>
</template>

<script>
(function() {
  "use strict";
  const factory = require("../factory/factory");

  module.exports = {
    data: function() {
      return {
        boxClass: "zero-opacity"
      };
    },
    socket: {},
    components: {},
    methods: {
      showTeamSelectBox: function() {
        this.boxClass = "animate__animated animate__fadeIn";
      },
      getTeams: function() {
        factory
          .getTeamRanking()
          .then(data => {
            console.log(data);
          })
          .catch(err => {
            console.log("error on getting team ranking");
          });
      }
    },
    computed: {},
    mounted() {
      this.getTeams();
    }
  };
})();
</script>


<style scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #242739;

  justify-content: center;
  align-items: center;
}

#top,
#mid,
#botton {
  display: flex;
  height: 100%;
  width: 100%;
}

#mid {
  flex-direction: row;
}

#mid-center {
  max-width: 100px;
  color: #ff4a57;
  font-size: 30pt;
  font-weight: bold;
}

.mid-left,
.mid-right,
#mid-center {
  /* background-color: white; */
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.team {
  background-color: #2a2e40;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
}

.plus-sign {
  font-size: 20pt;
  color: #ff4a57;
  cursor: pointer;
}
</style>