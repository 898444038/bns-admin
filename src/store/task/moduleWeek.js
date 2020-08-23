/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------

==========================================================================================*/


import state from './moduleWeekState.js'
import mutations from './moduleWeekMutations.js'
import actions from './moduleWeekActions.js'
import getters from './moduleWeekGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

