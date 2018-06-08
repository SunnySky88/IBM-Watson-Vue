const app = new Vue({
  el:'#app',
  data:{
    options:["films","people","starships","vehicles","species","planets"],
    items:[],
    selectedOption:''
  },
  methods:{
    loadData:function() {
      this.items = [];
      let key = 'name';
      if(this.selectedOption === 'films') key = 'title';      
      fetch('https://swapi.co/api/'+this.selectedOption)
      .then(res=>res.json())
      .then(res => {
        // "fix" the data to set a label for all types
        this.items = res.results.map((item) =>{
              item.label = item[key];
              return item;
        });
       
      });
    }
  }
});
