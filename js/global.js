(function(){
    "use strict";

    var dropzone = document.getElementById("drop-zone");
    var barFill = document.getElementById("bar-fill");
    var barFillText = document.getElementById("bar-fill-text");

    var startUpload = function(files){
       
        app.uploader({
            files:files,
            progressBar:barFill,
            progressText:barFillText,
            processor: 'uploads/upload.php',

            finished: function(data){
                //console.log(data);
            },

            error: function(){
                console.log("There was an error");
            }
        })
    }

    //darg and drop
    dropzone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'upload-console-drop';
        startUpload(e.dataTransfer.files);
    }


    dropzone.ondragover = function(){
       this.className = 'upload-console-drop drop';
       return false;
    }

    dropzone.ondragleave = function () {
        this.className = 'upload-console-drop';
        return false;
    }
}());