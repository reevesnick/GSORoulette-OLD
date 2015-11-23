angular.module('GSOData.services',[])
    // Food Data
    .factory('Food',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
	
	 var object = {
    text: "",
    image: null
  };
	
    return {
        getAll:function(){
            return $http.get('https://api.parse.com/1/classes/Food',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
        get:function(id){
            return $http.get('https://api.parse.com/1/classes/Food/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
        create:function(data){	        
            return $http.post('https://api.parse.com/1/classes/Food',data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(id,data){
            return $http.put('https://api.parse.com/1/classes/Food/'+id,data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        delete:function(id){
            return $http.delete('https://api.parse.com/1/classes/Food/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        }
       
    }
    
}]).value('PARSE_CREDENTIALS',{
    APP_ID: 'SQwOQRG77Srys4HiIBKdrPAQla89KPPSljjzMksv',
    REST_API_KEY:'uMspJ7xhHTKfF9yTXdklap9nINcEDQPW0SfPZrAe'
})


//Pub Data
 .factory('Pub',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
	
	 var object = {
    text: "",
    image: null
  };
	
    return {
        getAll:function(){
            return $http.get('https://api.parse.com/1/classes/Pub',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
        get:function(id){
            return $http.get('https://api.parse.com/1/classes/Pub/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
       
    }
    
}]).value('PARSE_CREDENTIALS',{
    APP_ID: 'SQwOQRG77Srys4HiIBKdrPAQla89KPPSljjzMksv',
    REST_API_KEY:'uMspJ7xhHTKfF9yTXdklap9nINcEDQPW0SfPZrAe'
})

//Nightlife Data
 .factory('Nightlife',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
	
	 var object = {
    text: "",
    image: null
  };
	
    return {
        getAll:function(){
            return $http.get('https://api.parse.com/1/classes/Nightlife',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
        get:function(id){
            return $http.get('https://api.parse.com/1/classes/Nightlife/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
       
    }
    
}]).value('PARSE_CREDENTIALS',{
    APP_ID: 'SQwOQRG77Srys4HiIBKdrPAQla89KPPSljjzMksv',
    REST_API_KEY:'uMspJ7xhHTKfF9yTXdklap9nINcEDQPW0SfPZrAe'
})

//Parks and Greenway Data
 .factory('ParksGreenways',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
	
	 var object = {
    text: "",
    image: null
  };
	
    return {
        getAll:function(){
            return $http.get('https://api.parse.com/1/classes/ParksGreenways',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
        get:function(id){
            return $http.get('https://api.parse.com/1/classes/ParksGreenways/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
       
    }
    
}]).value('PARSE_CREDENTIALS',{
    APP_ID: 'SQwOQRG77Srys4HiIBKdrPAQla89KPPSljjzMksv',
    REST_API_KEY:'uMspJ7xhHTKfF9yTXdklap9nINcEDQPW0SfPZrAe'
})

//Movies and Shows Data
 .factory('MoviesShows',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
	
	 var object = {
    text: "",
    image: null
  };
	
    return {
        getAll:function(){
            return $http.get('https://api.parse.com/1/classes/MoviesShows',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
        get:function(id){
            return $http.get('https://api.parse.com/1/classes/MoviesShows/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
       
    }
    
}]).value('PARSE_CREDENTIALS',{
    APP_ID: 'SQwOQRG77Srys4HiIBKdrPAQla89KPPSljjzMksv',
    REST_API_KEY:'uMspJ7xhHTKfF9yTXdklap9nINcEDQPW0SfPZrAe'
})

//Art and Museums Data
 .factory('ArtMuseums',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
	
	 var object = {
    text: "",
    image: null
  };
	
    return {
        getAll:function(){
            return $http.get('https://api.parse.com/1/classes/ArtMuseums',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
        get:function(id){
            return $http.get('https://api.parse.com/1/classes/ArtMuseums/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'

                }
            });
        },
       
    }
    
}]).value('PARSE_CREDENTIALS',{
    APP_ID: 'SQwOQRG77Srys4HiIBKdrPAQla89KPPSljjzMksv',
    REST_API_KEY:'uMspJ7xhHTKfF9yTXdklap9nINcEDQPW0SfPZrAe'
})
;
