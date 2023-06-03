import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', (value) => {
    if(!value) return ''
    return moment(value).local("ja").format('YYYY/MM/DD  HH:mm:ss')
  })
  