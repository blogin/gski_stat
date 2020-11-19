<template>
  <div>
    <div class="unit">      
      <highcharts
        ref="hCharts"
        :options="chartOptions"
        v-if="week"
      ></highcharts>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  components: {
    highcharts: Chart,
  },
  props: ["week","reso_west", "reso_east", "dao_west", "dao_east", "curYear", "keyOfYear"],
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          backgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "spline",
          style: {
            fontFamily: "Signika, serif",
            fontSize: "19px",
          },
        },
        title: {
          text: "Своевременность решения и оповещения",
          style: {
            fontSize: "20px",
          },
        },
        tooltip: {
          enabled: true,
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.2f} %",
              style: {
                fontSize: "14px",
                backgroundColor: null,
              },
            },
          },
          series: {
            dataLabels: {
              enabled: true,
              style: {
                fontSize: "14px",
              },
            },
          },
        },
        yAxis: {
          max: 100,
          title: {
            text: "Проценты %",
          },
          plotLines: [
            {
              color: "red",
              dashStyle: "LongDash",
              width: 1,
              value: 95,
              label: {
                y: -8,
                x: -35,
                style: {
                  //fontStyle: 'italic'
                },
                text: "95%",
                style: {
                  color: "red",
                },
              },
              zIndex: 5,
            },
          ],
        },
        legend: {
          layout: "horizontal",
          align: "center",
        },
        xAxis: {
          title: "Недели",
          categories: this.week,
          plotLines: [
            {
              color: "red", // Color value
              dashStyle: "longdash", // Style of the plot line. Default to solid
              value: this.keyOfYear, // Value of where the line will appear
              width: 0.3, // Width of the line
              label: {
                text: this.curYear, // Content of the label.
                verticalAlign: "bottom",
                textAlign: "right",
                y: -5,
                style: {
                  color: "red",
                  fontSize: "14",
                  fontWeight: "bold",
                },
              },
            },
          ],
        },
        series: [
          {
            name: "Своевременность Решения Запад",
            data: this.reso_west,
            color: "#0DCF78",
          },
          {
            name: "Своевременность Оповещения Запад",
            data: this.dao_west,
            color: "#08824C",
          },
          {
            name: "Своевременность Решения Восток",
            data: this.reso_east,
            color: "#38A4DC",
          },
          {
            name: "Своевременность Оповещения Восток",
            data: this.dao_east,
            color: "#256A8D",
          },
        ],
      },
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
.unit:hover {
  box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24), 0 0 8px rgba(10, 16, 20, 0.12);
  text-decoration: none;
}
</style>



