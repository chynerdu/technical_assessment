// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as firebase from 'firebase'
// import 'babel-polyfill'




// Vue.use(Vuex);
// const state = {
//     db: firebase.firestore(),
//     loggedInUser:true
//   }
// // export default new Vuex.Store({
// //     state,
// //     modules: {
     
// //         conversations
// //     },
// //   })

// // export const store = new Vuex.Store({
// //     state: {
// //         // isLoggedIn: localStorage.getItem("token"),
// //         users : {
// //             id : '1432545y7687',
// //             registeredUsers : ['234fcdsfghuy']
// //         },
// //         timer : '',
      
         
// //         // loggedInUser : true
       
// //         },
//    const mutations = {
//         setUser(state, payload){
//             state.user = payload
//         },
//     }
//     const notifications ={
//         showSignoutSuccess: {
//         title: 'Done!',
//         message: 'Signout successful',
//         type: 'success'
//         },
//      };
//     const actions = {
//         signUserUp({commit}, payload){
//             firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
//              then(user => {
//              const newUser = {
//                  id:user.uid,
//                  registeredUsers: [] 
//              }
//              commit('setUser', newUser)
//              })
//              .catch(error => {
//                  console.log(error)
//              }) 
//        },
//        userSignOut ({commit}) {
//         firebase.auth().signOut()
//         commit('setUser', null)
//         // showSignoutSuccess();
//         window.location.href = '/'
//       }
       
//     };
//     const getters = {
      
//         // getUser(state){
//         //    return !!localStorage.token
//         // },
//         // getUid(state){
//         //     return state.loggedInUser = firebase.auth().currentUser;
          
//         // },
//         // getLoggedIn(state){
//         //     var loggedInUsers = firebase.auth().currentUser;
//         //     if (loggedInUsers != null){
//         //     return state.loggedInUser  = true;
//         //     }
//         //     else if(loggedInUsers ==undefined){
//         //         return state.loggedInUser  = false;
//         //     }
    
            
//         //},
      
//     //     getLocalstorage(state){
//     //         localStorage.setItem("key", JSON.stringify(state.user3.email));   
//     //         if(localStorage.getItem('token')) {
// 	// 			// Replace the state object with the stored item
// 	// 			this.replaceState(
// 	// 				Object.assign(state, JSON.parse(localStorage.getItem('key')))
// 	// 			);
//     //             //   return state.isLoggedIn =localStorage.getItem("token");
//     //     }
//     // }
//     }

// // })

// export default { namespaced: true, state, mutations, notifications, actions, getters }
