import axios from 'axios'
export function getCountryData() {
  return axios({
    method: 'get',
    url: '/common/countryData',
  })
}
