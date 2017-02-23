<template>
  <div :id='type' class="playerGather">
    <span class="title text-capitalize">{{ctype}}</span>
    <br/>
    <span class="ownedArea bdHover" @onclick="console.log('asdf'); getMaxResources()"><span :id='type+"Owned"'>0</span> / <span :id='type+"Max"'></span></span>
    <br/>
    <div class="progress resProgress">
      <div class="progress-bar percentColorBlue" :id='type+"Bar"' role="progressbar">
        <span :id='type+"TimeToFill"'></span>
      </div>
    </div>
    <div class="row collectRow">
      <div class="col-xs-6">
        <div :id='type+"CollectBtn"' class="workBtn workColorOff pointer noselect" @onclick="console.log('asdf'); setGather()">{{verb}}</div>
      </div>
      <div class="col-xs-6">
        <span class="psText sizeSecRegular pointer noselect" :id='type+"Ps"' @onclick="console.log('asdf'); getPsString()">+0/sec</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name:  'player-gather',
  props: ['type', 'ctype', 'verb'],
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
    getMaxResources() {
      console.log(42)
      if (window.getMaxResources) return window.getMaxResources(this.props.ctype)
      return 0
    },
    setGather() {
      console.log(43)
      if (window.setGather) window.setGather(this.props.type)
    },
    getPsString() {
      console.log(44)
      if (window.getPsString) return window.getPsString(this.props.type)
      return ""
    },
  },
}
</script>

<style scoped>

</style>
