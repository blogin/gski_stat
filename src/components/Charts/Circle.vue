<template>
  <div>
    <div :class="source[0].count > threshold ? 'unit_green' : 'unit_red'">
      <!-- {{ source[0] }} -->
        <highcharts ref="hCharts" :options="chartOptions" class="circle" v-if="source"></highcharts>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import { truncate } from 'fs';

export default {
  components: {
    highcharts: Chart
  },
  props: ["source", "customTitle", "credits","dataNames","startPoint", "threshold"],
  data() {
    return {
      chartOptions: {
        annotations: [{
            labels: [{
                point: { x: 50, y: 50 },
                text: 'Label'
            }]
        }],
        chart: {
          plotBackgroundColor: null,
          backgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
        },
        title: {
          text: this.customTitle
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "{point.percentage:.2f} %",
              distance: 7,
              style:{
                fontSize: '14px',
              },
            },
            showInLegend: true,
            innerSize: 80
          }
        },
        series: [
          {
            data:[
              { name: this.source[0].name, y: this.source[0].count, color:{radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 }, stops: [[0, '#00b386'],[1, '#00664d']]}},
              { sliced: true,  name: this.source[1].name, y: this.source[1].count, color:{radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 }, stops: [[0, '#ff6666'],[1, '#660000']]} }
            ]
          }
        ],
        credits:{
          enabled: true,
          text: this.credits, 
          position:{
            align: 'left',
            verticalAlign: 'bottom',
            x: 10,
            y: -80
          },
          style:{
            fontSize: '14px',
            color: '#000',
            cursor: "arrow"
          },
          href:'#'
        }
      }
    };
  }
};
</script>

<style scoped>
.unit_green {
  position: relative;
  background-color: #ececec;
  border-radius: 6px;
  box-shadow: 0 2px 2px rgba(22, 141, 42, 0.678), 0 0 2px rgba(22, 141, 42, 0.12);
  box-sizing: border-box;
  transition: box-shadow 0.5s;
  text-align: center;
  box-shadow: 0 6px 6px rgba(22, 141, 42, 0.678), 0 0 52px rgba(22, 141, 42, 0.12);
}
.unit_red {
  position: relative;
  background-color: #ececec;
  border-radius: 6px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 2px 2px rgba(206, 25, 25, 0.678), 0 0 2px rgba(206, 25, 25, 0.12);
  transition: box-shadow 0.5s;
  box-shadow: 0 6px 6px rgba(206, 25, 25, 0.678), 0 0 2px rgba(206, 25, 25, 0.12);
}
.unit_green:hover, .unit_red:hover {
  box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24), 0 0 8px rgba(10, 16, 20, 0.12);
  text-decoration: none;
}

</style>



