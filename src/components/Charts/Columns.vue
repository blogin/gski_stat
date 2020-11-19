<template>
  <div>
    <div class="unit">
      <highcharts ref="hCharts" :options="chartOptions" v-if="source"></highcharts>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
let t = (new Date().toLocaleString()).replace(",","")

export default {
  components: {
    highcharts: Chart
  },
  props: ["source", "customTitle"],
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          backgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'column',
          height: 270,
        },
        
        title: {
          text: this.customTitle,
          style:{
            fontSize: '16px'
          }
        },
        subtitle: {
          text: t
        },
        tooltip: {
          enabled: true
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    style: {
                        textShadow: '0 0 0px black',
                        fontSize: '13'
                    }
                }
            }
        },
        yAxis: {
            min: 0,
            //max: max_val,
            tickInterval: 50,
            title: {
                text: 'Количество инцидентов'
            },
            stackLabels: {
                enabled: true
            }
        },   
        tooltip: {
          enabled: false,
        },
        xAxis: {
          categories: ['Статусы'],
        },     
        legend: {
          layout: 'horizontal',
          align: 'center',
        },
        series: this.source,
      }
    };
  },
};
</script>

<style scoped>
.unit {
  position: relative;
  background-color: #ececec;
  border-radius: 6px;
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 8px rgba(10, 16, 20, 0.12);
  box-sizing: border-box;
  transition: box-shadow 0.5s;
  text-align: center;
  box-shadow: 0 6px 6px rgba(10, 16, 20, 0.24), 0 0 8px rgba(10, 16, 20, 0.12);
}

</style>



