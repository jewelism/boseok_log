// // freegeoip.net/json/
//
// export const getUserIp = () => {
//   return new Promise((resolve) => {
//     fetch(`https://freegeoip.net/json/`)
//       .then((response) => {
//         return response.json()
//       })
//       .then((responseJson) => {
//         resolve(responseJson)
//       })
//       .catch((err) => {
//         console.warn(err)
//         resolve(false)
//       })
//   })
// }