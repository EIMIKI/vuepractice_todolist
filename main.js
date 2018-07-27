new Vue({
  el:'#app',
  data:{
    newTodo:'',
    todos:[],
    doneTodos:[]
  },
  methods:{
    doAdd:function(){
      if(this.newTodo===''){
        return -1;
      }
      var maxId=this.todos.reduce(
        function(a,b){
          return a>b.id?a:b.id
        }
      ,0)
      this.todos.push({
        id:maxId+1,
        val:this.newTodo
      })
      this.newTodo=''
    },

    done:function(index){
      var doneTodo=this.todos[index]
      this.doneTodos.push({
        val:doneTodo.val
      })
      this.todos.splice(index,1)
    },

    deleted:function(index){
      this.doneTodos.splice(index,1)
    },
  }
})
