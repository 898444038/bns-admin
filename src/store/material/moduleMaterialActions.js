/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------

==========================================================================================*/
import axios2 from "@/axios2.js"

export default {

  addItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios2.post("/material/insert", item).then((response) => {
          if(response.code == 1){
            commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
            resolve(response)
          }
        }).catch((error) => { reject(error) })
    })
  },
  fetchItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios2.get("/material/selectList").then((response) => {
          commit('SET_ITEM', response.data)
          resolve(response)
        }).catch((error) => { reject(error) })
    })
  },
  // fetchEventLabels({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get("/api/apps/calendar/labels")
  //       .then((response) => {
  //         commit('SET_LABELS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  updateItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios2.post('/material/update/', item)
        .then((response) => {
          if(response.code == 1){
            commit('UPDATE_ITEM', response.data)
            resolve(response)
          }
        }).catch((error) => { reject(error) })
    })
  },
  removeItem({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios2.post('/material/delete/'+`${itemId}`)
        .then((response) => {
          if(response.code == 1){
            commit('REMOVE_ITEM', itemId)
            resolve(response)
          }
        }).catch((error) => { reject(error) })
    })
  },
  // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {

  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)

  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
}
