

'use strict';



const {createApp} = Vue;

createApp({
    data(){
        return{
            listemail:[],
            objemail:{},

            
           
            
            
        }
    },
    methods:{
        axiosGetEmail(){
            
            
            
        
        }
     
    },
    mounted(){
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then ((response) => {
                
                const result = response.data
                this.objemail = result
                this.listemail.push(this.objemail)
            
            
            })
        
        
        
          
    }
    
}).mount('#app');







