/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------

==========================================================================================*/


export default {
  ADD_ITEM(state, item) {
    state.taskWeeks.unshift(item)
  },
  SET_ITEM(state, taskWeeks) {
    state.taskWeeks = taskWeeks
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_ITEM(state, taskWeek) {
      const index = state.taskWeeks.findIndex((p) => p.id == taskWeek.id)
      Object.assign(state.taskWeeks[index], taskWeek)
  },
  REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.taskWeeks.findIndex((p) => p.id == itemId)
      state.taskWeeks.splice(ItemIndex, 1)
  },
}
