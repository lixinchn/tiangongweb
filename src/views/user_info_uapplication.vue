<template>
  <div class="uapplication">
    <table>
      <tr>
        <th>{{title}}</th>
        <th style="width: 20%">{{status}}</th>
      </tr>
      <tr v-for="item in this.application" class="uapplication-item">
        <td>{{item.name}}</td>
        <td>{{item.status}}</td>
      </tr>
    </table>
  </div>
</template>

<script type="es6">
  import {conf} from '../assets/js/conf'
  import {i18n} from '../assets/js/i18n'

  export default {
    name: 'uapplication',
    methods: {
      fillDatasets(datasets) {
        if (!datasets)
          return

        datasets.forEach(dataset => {
          this.application.push({'id': dataset.id, 'name': dataset.name, 'status': dataset.status})
        })
      },
    },

    created() {
      this.$http.get(conf.host + '/dataset/list').then(response => {
        let result = response.body
        if (result.code) {
          location.href = '/login'
          return
        }

        let datasets = result.data.list
        this.fillDatasets(datasets)
      }, response => {
        console.log(response)
        alert(this.error)
      })
    },

    data() {
      return {
        application: [],

        title: i18n.userinfoA.title[i18n.lang],
        status: i18n.userinfoA.status[i18n.lang],
        error: i18n.userinfoA.error[i18n.lang],
      }
    },
  }
</script>
<style>
.uapplication {
  float: left;
  width: 75%;
  padding-left: 4em;
  padding-top: 1em;
}

.uapplication table {
  width: 100%;
}

.uapplication td, .uapplication th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.uapplication tr:nth-child(even) {
    background-color: #efefef;
}
</style>