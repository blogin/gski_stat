import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
Axios.defaults.baseURL = "http://10.41.223.28/gski/stat/";

export default new Vuex.Store({
  state: {
    stat:null,
    loading: false,
    keyOfYear: null,
    curYear: (new Date()).getFullYear(), 
    statStatusMsk: [],
    statStatusNw: [],
    statStatusSo: [],
    statStatusCn: [],
    statStatusSi: [],
    statStatusFe: [],
    statStatusPv: [],
    statStatusUr: [],
    statKpiWeek: [],
    statKpiResoWest: [],
    statKpiDaoWest: [],
    statKpiResoEast: [],
    statKpiDaoEast: [],
  },
  getters:{
    stat(state){
      return state.stat
    },
    statKpiWeek(state){
      return state.statKpiWeek
    },
    statKpiResoWest(state){
      return state.statKpiResoWest
    },
    statKpiDaoWest(state){
      return state.statKpiDaoWest
    },
    statKpiResoEast(state){
      return state.statKpiResoEast
    },
    statKpiDaoEast(state){
      return state.statKpiDaoEast
    },
    statStatusMsk(state){
      return state.statStatusMsk
    },
    statStatusNw(state){
      return state.statStatusNw
    },
    statStatusSo(state){
      return state.statStatusSo
    },
    statStatusFe(state){
      return state.statStatusFe
    },
    statStatusSi(state){
      return state.statStatusSi
    },
    statStatusUr(state){
      return state.statStatusUr
    },
    statStatusPv(state){
      return state.statStatusPv
    },
    statStatusCn(state){
      return state.statStatusCn
    },
    loading(state){
      return state.loading
    },
    keyOfYear(state){
      return state.keyOfYear
    },
    curYear(state){
      return state.curYear;
    }
  },
  mutations: {
    setStat(state,payload){
      state.stat = payload
    },
    setStatStatusMsk(state,payload){
      if(!state.statStatusMsk.length){
        for(let i in payload){
          state.statStatusMsk.push(payload[i])
        }
      }else{
        while(state.statStatusMsk.length) state.statStatusMsk.pop()
        for(let i in payload){
          state.statStatusMsk.push(payload[i])
        }
      }
    },
    setStatStatusNw(state,payload){
      if(!state.statStatusNw.length){
        for(let i in payload){
          state.statStatusNw.push(payload[i])
        }
      }else{
        while(state.statStatusNw.length) state.statStatusNw.pop()
        for(let i in payload){
          state.statStatusNw.push(payload[i])
        }
      }
    },
    setStatStatusSo(state,payload){
      if(!state.statStatusSo.length){
        for(let i in payload){
          state.statStatusSo.push(payload[i])
        }
      }else{
        while(state.statStatusSo.length) state.statStatusSo.pop()
        for(let i in payload){
          state.statStatusSo.push(payload[i])
        }
      }
    },
    setStatStatusCn(state,payload){
      if(!state.statStatusCn.length){
        for(let i in payload){
          state.statStatusCn.push(payload[i])
        }
      }else{
        while(state.statStatusCn.length) state.statStatusCn.pop()
        for(let i in payload){
          state.statStatusCn.push(payload[i])
        }
      }
    },
    setStatStatusSi(state,payload){
      if(!state.statStatusSi.length){
        for(let i in payload){
          state.statStatusSi.push(payload[i])
        }
      }else{
        while(state.statStatusSi.length) state.statStatusSi.pop()
        for(let i in payload){
          state.statStatusSi.push(payload[i])
        }
      }
    },
    setStatStatusUr(state,payload){
      if(!state.statStatusUr.length){
        for(let i in payload){
          state.statStatusUr.push(payload[i])
        }
      }else{
        while(state.statStatusUr.length) state.statStatusUr.pop()
        for(let i in payload){
          state.statStatusUr.push(payload[i])
        }
      }
    },
    setStatStatusPv(state,payload){
      if(!state.statStatusPv.length){
        for(let i in payload){
          state.statStatusPv.push(payload[i])
        }
      }else{
        while(state.statStatusPv.length) state.statStatusPv.pop()
        for(let i in payload){
          state.statStatusPv.push(payload[i])
        }
      }
    },
    setStatStatusFe(state,payload){
      if(!state.statStatusFe.length){
        for(let i in payload){
          state.statStatusFe.push(payload[i])
        }
      }else{
        while(state.statStatusFe.length) state.statStatusFe.pop()
        for(let i in payload){
          state.statStatusFe.push(payload[i])
        }
      }
    },
    setStatKpiAll(state,payload){
      debugger
      if(!state.statKpiWeek.length){
        for(let i in payload.week){state.statKpiWeek.push(payload.week[i])}
        for(let i in payload.reso_west){state.statKpiResoWest.push(payload.reso_west[i])}
        for(let i in payload.dao_west){state.statKpiDaoWest.push(payload.dao_west[i])}
        for(let i in payload.reso_east){state.statKpiResoEast.push(payload.reso_east[i])}
        for(let i in payload.dao_east){state.statKpiDaoEast.push(payload.dao_east[i])}
      }else{
        while(state.statKpiWeek.length) state.statKpiWeek.pop()
        while(state.statKpiResoWest.length) state.statKpiResoWest.pop()
        while(state.statKpiDaoWest.length) state.statKpiDaoWest.pop()
        while(state.statKpiResoEast.length) state.statKpiResoEast.pop()
        while(state.statKpiDaoEast.length) state.statKpiDaoEast.pop()
        for(let i in payload.week){state.statKpiWeek.push(payload.week[i])}
        for(let i in payload.reso_west){state.statKpiResoWest.push(payload.reso_west[i])}
        for(let i in payload.dao_west){state.statKpiDaoWest.push(payload.dao_west[i])}
        for(let i in payload.reso_east){state.statKpiResoEast.push(payload.reso_east[i])}
        for(let i in payload.dao_east){state.statKpiDaoEast.push(payload.dao_east[i])}
      }
    },
    setLoading(state,payload){
      state.loading = payload;
    },
    setKeyOfYear(state,payload){
      state.keyOfYear = payload
    }
  },
  actions: {
    getStat:async({state, commit}) =>{
      await Axios.get('api/get_stat_to_graph.php')
        .then((resp) => {
          console.log("getStat -> ",resp.data)
          for(let i in resp.data.kpi.week){
            resp.data.kpi.week[i] == "01" && resp.data.kpi.year[i] == state.curYear ? state.keyOfYear = i : null;
          }
          commit("setStatStatusMsk", resp.data.status[0].reg_status)
          commit("setStatStatusNw", resp.data.status[1].reg_status)
          commit("setStatStatusSo", resp.data.status[2].reg_status)
          commit("setStatStatusCn", resp.data.status[3].reg_status)
          commit("setStatStatusFe", resp.data.status[4].reg_status)
          commit("setStatStatusUr", resp.data.status[5].reg_status)
          commit("setStatStatusSi", resp.data.status[6].reg_status)
          commit("setStatStatusPv", resp.data.status[7].reg_status)
          commit("setStatKpiAll", resp.data.kpi)
        
          commit("setStat", resp.data)

        })
        .catch((error) => {
          console.log("getStat error => ",error);
        })
        .finally(() => {
          state.loading = false;
        });
    },
  },
  modules: {
  }
})
