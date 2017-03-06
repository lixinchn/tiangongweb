<template>
  <div class="uapplication">
    <table>
      <tr>
        <th>数据集</th>
        <th style="width: 20%">状态</th>
      </tr>
      <tr v-for="item in this.application" class="uapplication-item">
        <td>{{item.name}}</td>
        <td>{{item.status}}</td>
      </tr>
    </table>
  </div>
</template>

<script type="es6">
  export default {
    name: 'uapplication',
    methods: {
    },

    created() {
      this.application.push({'name': 'name', 'status': '成功'})
      this.application.push({'name': 'name', 'status': '失败'})

      // TODO get data from server
    },

    data() {
      return {
        application: [],
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