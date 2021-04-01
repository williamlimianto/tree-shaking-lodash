<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github">
        Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey"> Every </b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with <a href="https://vuejs.org/"> Vue.js </a> and
        <a href="http://bulma.io/"> Bulma </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
// import _ from 'lodash' // DON'T: This will import whole package (not modularized and not able to be cherry picked by lodash-webpack-plugin)
                          // If you want to keep this, be sure to use lodash-webpack-plugin to modularized this import
// import { add, map } from 'lodash' // DON'T: This will import whole package (not modularized and not able to be cherry picked by lodash-webpack-plugin)
                                     // If you want to keep this, be sure to use lodash-webpack-plugin to modularized this import
// import add from 'lodash/add' // DO: This will still import whole package (but its modularized and able to be cherry picked by lodash-webpack-plugin)
//import map from 'lodash/map' // DO: This will still import whole package (but its modularized and able to be cherry picked lodash-webpack-plugin)

export default {
  name: 'HomePage',

  components: {
    Card,
  },

  mounted () {
    // console.log(_.map([1, 2, 3], (n) => {
    //     return _.add(n, 1)
    // }))
    console.log(map([1, 2, 3], (n) => {
        return add(n, 1)
    }))
  } 
}
</script>
