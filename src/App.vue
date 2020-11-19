<template>
<div>
  <!-- {{stat}} -->
  <loading v-if="loading" />
  <div id="app" v-if="stat">
    <!-- Костыль с кучей переменных из за особенностей дин. обновления графиков в higthcharts -->
    <columnChart :source="statStatusMsk" :customTitle="stat.status[0].reg_name" /> <!-- Москва --> 
    <columnChart :source="statStatusCn" :customTitle="stat.status[3].reg_name" /> <!-- Центр -->
    <columnChart :source="statStatusNw" :customTitle="stat.status[1].reg_name" /> <!-- СЗ -->
    <columnChart :source="statStatusSo" :customTitle="stat.status[2].reg_name" /> <!-- ЮГ -->
    <columnChart :source="statStatusPv" :customTitle="stat.status[7].reg_name" /> <!-- Поволжье -->
    <columnChart :source="statStatusSi" :customTitle="stat.status[6].reg_name" /> <!-- Сибирь -->
    <columnChart :source="statStatusUr" :customTitle="stat.status[5].reg_name" /> <!-- Урал -->
    <columnChart :source="statStatusFe" :customTitle="stat.status[4].reg_name" /> <!-- ДВ -->

  </div>
  <div class="app2" v-if="stat">
    <linearChart 
      :week="statKpiWeek" 
      :reso_west="statKpiResoWest" 
      :reso_east="statKpiResoEast" 
      :dao_west="statKpiDaoWest" 
      :dao_east="statKpiDaoEast" 
      :curYear="curYear" 
      :keyOfYear="keyOfYear" 
    />
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import columnChart from "@/components/Charts/Columns.vue";
import linearChart from "@/components/Charts/Linear.vue";
import loading from "@/components/Loading.vue";

export default {
  name: "App",
  components: {
    columnChart,
    linearChart,
    loading
  },
  data(){
    return{
      timer:null,
      statKpi:[]
    }
  },
  computed: {
    ...mapGetters([
      "stat", 
      "statStatusMsk", 
      "statStatusNw", 
      "statStatusSo", 
      "statStatusCn", 
      "statStatusFe", 
      "statStatusSi", 
      "statStatusUr", 
      "statStatusPv", 
      "loading",
      "curYear", 
      "keyOfYear",
      "statKpiWeek",
      "statKpiResoWest",
      "statKpiDaoWest",
      "statKpiResoEast",
      "statKpiDaoEast",
    ]),
  },
  methods: {
    ...mapActions(["getStat"]),
    ...mapMutations(["setLoading"])
  },
  mounted() {
    this.setLoading(true);
    this.getStat();
    this.timer = setInterval(() => {
        this.getStat();
    }, 10000);  // раз в 5 минут
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 24.9% 24.9% 24.9% 24.9%;
  grid-gap: 5px;
}
.app2{
  margin-top: 5px;
}
</style>
