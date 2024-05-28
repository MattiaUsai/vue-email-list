

'use strict';



const {createApp} = Vue;

createApp({
    data(){
        return{
            // ARRAY DI PARTENZA
            listEmail:[],
            // API LINK
            url:'https://flynn.boolean.careers/exercises/api/random/mail',
            

            
           
            
            
        }
    },
    methods:{
        // FUNZIONE CHIAMATA API
        callApi(){
            axios.get(this.url).then((response)=> {
                    // AGGIUNGERE ALL'INTERNO DELL'ARRAY
                this.listEmail.push(response.data)
            
            })

        },
        
    },
    mounted(){
        // CICLO PER FARE  10 CHIAMATE API
        for (let i = 0; i < 10; i++) {
            this.callApi()
            console.log(this.listEmail) ;
          }
        
        
        
        
        
            
            
        
            
            
        
        
            
        
        
        
        
          
    }
    
}).mount('#app');







