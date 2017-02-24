<template>
  <div :id='type' class="playerGather">
    <span class="title text-capitalize">{{ctype}}</span>
    <br/>
    <template v-if="hasMax">
      <span class="ownedArea bdHover" @click="getMaxResources()"><span :id='type+"Owned"'>0</span> / <span :id='type+"Max"'></span></span>
      <br/>
      <div class="progress resProgress">
        <div class="progress-bar percentColorBlue" :id='type+"Bar"' role="progressbar">
          <span :id='type+"TimeToFill"'></span>
        </div>
      </div>
    </template>
    <template v-else>
      <span class="ownedArea"><span :id='type+"Owned"'>0</span></span>
      <br/>
    </template>
    <div class="row collectRow">
      <div class="col-xs-6">
        <div :id='type+"CollectBtn"' class="workBtn workColorOff pointer noselect" @click="setGather()">{{verb}}</div>
      </div>
      <div class="col-xs-6">
        <span class="psText sizeSecRegular pointer noselect" :id='type+"Ps"' @click="getPsString()">+0/sec</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name:  'player-gather',
  props: ['type', 'ctype', 'verb', 'hasMax'],
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
      if (window.getMaxResources) return window.getMaxResources(this.ctype)
      return 0
    },
    setGather() {
      if (window.setGather) window.setGather(this.type)
    },
    getPsString() {
      if (window.getPsString) return window.getPsString(this.type)
      return ""
    },
  },
}
</script>

<style scoped>

</style>
