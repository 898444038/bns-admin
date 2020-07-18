/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------

==========================================================================================*/


export default {
  ADD_ITEM(state, item) {
    state.materials.unshift(item)
  },
  SET_ITEM(state, materials) {
    state.materials = materials
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_ITEM(state, material) {
      const index = state.materials.findIndex((p) => p.id == material.id)
      Object.assign(state.materials[index], material)
  },
  REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.materials.findIndex((p) => p.id == itemId)
      state.materials.splice(ItemIndex, 1)
  },
}
