<template>
  <div class="hello">
    <section class="hero is-warning is-fullheight">
      <div class="hero-body">
          <div class="container">
            <p class="title">
             Drunk Pictionary!
            </p>
            
            <h2 class="subtitle">
              AG edition
            </h2>
            <p class="title" id="clock"></p>
            <br />
            <b-button rounded class="button is-light is-large" @click="generateWord">Generate Word</b-button>

          </div>
            <!-- <button class="button rounded is-light is-large"
                @click="generateWord">
                Generate Word
            </button> -->
            <!-- <button @click="emitEvent">emit</button>
            <input type="text" v-model="message"/> -->
      </div>
    <audio id="sound">
      <source src="@/assets/Countdown.mp3" type="audio/mpeg">
      Your browser is wack yo!
    </audio>
    </section>
    
<section class="info">
        
        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <h1>Your word is:</h1>
                        <h2>{{word}}</h2>
                    </div>
                </div>
                    <footer class="modal-card-foot">
                        <button class="button is-primary" v-on:click="start">Start Timer</button>
                    </footer>
            </div>
        </b-modal>
    </section>
    <section>
      <p class="hero is-warning" id="clock"></p>
    </section>
    <!-- <WhiteBoard :key="reload"/> -->
  </div>
</template>

<script>
import dictionary from '@/assets/dictionary.txt'
import WhiteBoard from './WhiteBoard'

export default {
  name: 'HelloWorld',
  components: {
    WhiteBoard
  },
  sockets: {
    connect() {
      console.log('socket connected')
    },
    timerSet() {
      console.log('starting timer')
      this.startTimer();
    }
  },
  data () {
    return {
      message: '',
      word: '',
      isCardModalActive: false,
      reload: 0
    }
  },
  mounted() {
    // this.canvas = document.getElementById("whiteboard");
    // var ctx = this.canvas.getContext("2d");    
    // this.vueCanvas = ctx;

    // let jitsi = document.createElement('script')
    // jitsi.setAttribute('src', 'https://meet.jit.si/external_api.js')
    // document.head.appendChild(jitsi)
  },
  methods: {
    clear() {
      // this.reload +=1;
    },
    generateWord() {
      this.isCardModalActive = true
      var words = dictionary.split(/\r?\n/);
      this.word = words[Math.floor(Math.random()*words.length)];
    },
    start() {
      this.isCardModalActive = false
      this.$socket.client.emit('start');
      this.startTimer()
    },
    startTimer() {
        var timeleft = 40;
        var sound = document.getElementById("sound"); 
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("clock").innerHTML = "Times up!";
          } else {
            document.getElementById("clock").innerHTML = timeleft + " seconds remaining";
          }
          if(timeleft === 30) {
            sound.play();
            document.getElementById("clock").style.color = 'red';
          }
          timeleft -= 1;
        }, 1000);
        document.getElementById("clock").style.color = 'black';
      }
    }
    // emitEvent () {
    //   this.$socket.emit('hello', this.message)
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.info {
  margin: auto;
}

.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
