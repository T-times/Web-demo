<template>
  <article>
    <div>
        <div class="search-bar">
            Search <input type="text" v-model="searchString" v-bind:placeholder="searchString">
        </div>
        <data-list :items="bills" :item="newBill" :incomes="incomes" :pays="pays" :filter-key="searchString"></data-list>
    </div>
  </article>
</template>
<script>
  import Bill from '@/components/Payments'
  import DataGrid from '@/components/DataGrid'
export default{
  name: 'Manage',
  components: {
    'data-list': DataGrid
  },
  data: function() {
    return {
      bills: Bill.bills,
      searchString: Bill.searchString,
      searchColumn: Bill.searchColumn,
      incomes: Bill.incomes,
      pays: Bill.pays,
      gridColumns: Bill.gridColumns,
      newBill: Bill.newBill
    }
  },
  mounted: function(){
    if(sessionStorage.userName&&sessionStorage.userName==Bill.userName){

    }else{
      this.$router.push('/');
    }
  }
}
</script>
<style scoped>
h1{
  color: green;
  }
  .nav-tab{
  flex: 1;
  display: flex;
  flex-direction: row;
}
.nav-item{
  background-color: green;
  border-radius: 5px;
  padding: 10px;
  width: 50px;
  color: white;
}
.nav-item.active{
  background-color: black;
}

</style>
