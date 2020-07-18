/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------

==========================================================================================*/


import state from './moduleMaterialState.js'
import mutations from './moduleMaterialMutations.js'
import actions from './moduleMaterialActions.js'
import getters from './moduleMaterialGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

