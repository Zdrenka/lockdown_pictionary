<template>
  <div class="hello">
    <section class="hero is-warning">
      <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Pictionary!
            </h1>
            <h2 class="subtitle">
              Drunk AG edition
            </h2>
          </div>
          <br />
            <button class="button is-light is-medium"
                @click="generateWord">
                Generate Word
            </button>
            <button class="button is-light is-medium"
                @click="clear">
                Clear
            </button>
            <!-- <button @click="emitEvent">emit</button>
            <input type="text" v-model="message"/> -->
      </div>
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
            </div>
        </b-modal>
    </section>
    <WhiteBoard :key="reload"/>
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
  data () {
    return {
      message: '',
      word: '',
      isCardModalActive: false,
      reload: 0
    }
  },
  mounted() {
    this.canvas = document.getElementById("whiteboard");
    var ctx = this.canvas.getContext("2d");    
    this.vueCanvas = ctx;

    let jitsi = document.createElement('script')
    jitsi.setAttribute('src', 'https://meet.jit.si/external_api.js')
    document.head.appendChild(jitsi)
  },
  methods: {
    clear() {
      this.reload +=1;
    },
    generateWord() {
      this.isCardModalActive = true
      var words = dictionary.split(/\r?\n/);
      this.word = words[Math.floor(Math.random()*words.length)];
    },
    // emitEvent () {
    //   this.$socket.emit('hello', this.message)
    // }
  }
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
