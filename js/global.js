(function(){
    "use strict";

    var dropzone = document.getElementById("drop-zone");
    var startUpload = function(files){
        console.log(files);
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