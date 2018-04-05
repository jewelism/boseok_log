<template>
  <div class="game" :class="backgroundFlash">
    <div class="statusBarWrapper">
      <div class="statusBar">
        <div class="lifes">
          <span>Life : </span>
          <span>
            <img src="../../assets/heart.png" v-for="life in lifes" class="life" />
          </span>
        </div>
        <div>
          <div class="score">
            High Score : {{highScore}}
          </div>
          <div>
            Score : {{score}}
          </div>
        </div>
      </div>
    </div>
    <div v-if="status===true">
      <Enemy
        v-for="(e, index) in totalEnemy"
        :key="index"
        :index="index"
        :random="getRandomInt"
        :increaseScore="increaseScore"
        :decreaseLife="decreaseLife"
        :decreaseEnemy="decreaseEnemy"
      />
      
    </div>
    <div v-if="!isAlive" class="gameover">
      <div class="gameoverTxt">Game Over</div>
      <button @click="start" class="restartBtn">Restart</button>
    </div>
    <div v-if="status==='win'" class="gameover">
      <div class="gameoverTxt">You win!</div>
      <button @click="start" class="restartBtn">Restart</button>
    </div>
  </div>
</template>

<script>
import Enemy from "./Enemy";

export default {
  name: "Game",
  data() {
    return {
      backgroundFlash: "black",
      lifes: null,
      score: 0,
      highScore: 0,
      totalEnemy: null,
      currentEnemy: null,
      timer: null,
      flashTimer: null,
      status: null
    };
  },
  methods: {
    getRandomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    increaseScore: function() {
      this.score += 1;
    },
    decreaseLife: function() {
      this.lifes -= 1;
      this.backgroundFlash = "red";
      this.flashTimer = setTimeout(() => {
        this.backgroundFlash = "black";
      }, 250);
    },
    decreaseEnemy: function() {
      this.currentEnemy -= 1;
    },
    start: function() {
      this.status = true;
      this.lifes = this.getRandomInt(2, 5);
      this.score = 0;
      this.totalEnemy = this.getRandomInt(15, 30);
      this.currentEnemy = this.totalEnemy;
    },
    setHighScore: function() {
      let storageScore = localStorage.getItem("highScore") || 0;
      let highScore = Math.max(this.score, this.highScore, storageScore);
      this.highScore = highScore;
      localStorage.setItem("highScore", highScore);
    }
  },
  computed: {
    isAlive: function() {
      if (!(this.lifes > 0)) {
        this.status = false;
        this.setHighScore();
      }
      return this.lifes > 0 && this.status;
    }
  },
  watch: {
    currentEnemy: function(newVal) {
      if (newVal <= 0) {
        this.status = "win";
        this.setHighScore();
      }
    }
  },
  mounted() {
    this.highScore = localStorage.getItem("highScore") || 0;
    this.start();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  components: {
    Enemy
  }
};
</script>

<style scoped>
.game {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 75vh;
  margin-top: 10vh;
  z-index: 0;
  cursor: url(https://www.iconfinder.com/icons/183165/download/png/128) !important;
}

.black {
  background-color: black;
}

.red {
  background-color: red;
}

.statusBarWrapper {
  position: fixed;
  top: 40px;
  width: 70vw;
  text-align: center;
}

.statusBar {
  /* background-color: yellow; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}

.lifes {
  display: flex;
  justify-content: space-between;
}

.life {
  width: 20px;
  height: 20px;
  margin-top: -3px;
  margin-left: 10px;
}

.gameover {
  /* wrapper */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gameoverTxt {
  font-size: 40px;
  color: white;
  margin-bottom: 10px;
}

.restartBtn {
  width: 120px;
  height: 45px;
  border-radius: 15px;
  font-size: 18px;
}

@media (max-width: 700px) {
  .statusBarWrapper {
    position: fixed;
    top: 20px;
    width: 70vw;
    text-align: center;
  }

  .life {
    width: 11px;
    height: 11px;
    margin-top: -2px;
    margin-left: 7px;
  }

  .statusBar {
    font-size: 13px;
  }

  .gameoverTxt {
    font-size: 30px;
    color: white;
    margin-bottom: 7px;
  }

  .restartBtn {
    width: 90px;
    height: 30px;
    border-radius: 12px;
    font-size: 12px;
  }
}
</style>