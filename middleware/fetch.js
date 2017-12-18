import axios from '~plugins/axios';
export default function (context) {
  console.log(context.isServer)
  console.log(context.isClient)

  if (context.isServer) {
    return axios.get('/advertisement/list', {
      params: {
        pageNo: 1,
        pageSize: 6
      }
    }).then(response => {
      // console.log(response)
    })
  }
}
