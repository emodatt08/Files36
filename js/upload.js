var app = app || {};

(function(o){
    "use strict";
    //declare private methods
    var ajax, setProgress, getFormData;
    ajax = function(data){
        var xmlhttp = new XMLHttpRequest();
        var upload;
        xmlhttp.addEventListener('readystatechange', function(){
            if (this.readyState === 4 && this.status === 200){
                upload = JSON.parse(this.response);
                console.log(upload);

            }else{
                if(typeof o.options.error === 'function'){
                    o.options.error();
                }
            }
        });
        xmlhttp.open('post', o.options.processor);
        xmlhttp.send(data);
    };

    getFormData = function(source){
       var data = new FormData();
       var i;
       for(i = 0; i < source.length; i++){
           data.append('files[]', source[i]);
       }

       return data;
    };

    setProgress = function(){

    };

    o.uploader = function(options){
        o.options = options;
        
        if(o.options.files !== 'undefined'){
            ajax(getFormData(o.options.files));
        }
    }

}(app))