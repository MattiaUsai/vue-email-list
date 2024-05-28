

'use strict';



const {createApp} = Vue;

createApp({
    data(){
        return{
            listEmail:[],
            objemail:{},
            url:'https://flynn.boolean.careers/exercises/api/random/mail',
            

            
           
            
            
        }
    },
    methods:{
        callApi(){
            axios.get(this.url).then((response)=> {
                
                this.listEmail.push(response.data)
            
            })

        },
        completeEmail(){
            this.listEmail.map((element)=>{
                element
            })

        }

        
        
     
    },
    mounted(){


        

        for (let i = 0; i < 10; i++) {
            this.callApi()
            console.log(this.listEmail) ;
          }
        
        
        
        
        
            
            
        
            
            
        
        
            
        
        
        
        
          
    }
    
}).mount('#app');







