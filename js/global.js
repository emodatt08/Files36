(function(){
    "use strict";

    var dropzone = document.getElementById("drop-zone");
    var barFill = document.getElementById("bar-fill");
    var barFillText = document.getElementById("bar-fill-text");
    var uploadsFinished = document.getElementById("uploads-finished");

    var startUpload = function(files){
       
        app.uploader({
            files:files,
            progressBar:barFill,
            progressText:barFillText,
            processor: 'uploads/upload.php',

            finished: function(data){

                var i;
                var uploadedElement;
                var uploadedAnchor;
                var uploadedStatus;
                var currFile;

                for(i = 0; i < data.length; i++){
                    currFile = data[i];
                    console.log(currFile);
                    uploadedElement = document.createElement('div');
                    uploadedElement.className = 'upload-console-upload';

                    uploadedAnchor = document.createElement('a');
                    uploadedAnchor.textContent = currFile.name;

                    if (currFile.uploaded){
                        uploadedAnchor.href = "files/" + currFile.file;
                    }

                    uploadedStatus = document.createElement('span');
                    uploadedStatus.textContent = currFile.uploaded ? 'Uploaded' : 'Error';
                    console.log(uploadedStatus);

                    uploadedElement.appendChild(uploadedAnchor);
                    uploadedElement.appendChild(uploadedStatus);
                    
                    uploadsFinished.appendChild(uploadedElement);
                }
                uploadsFinished.className = "";
            },

            error: function(){
                console.log("There was an error");
            }
        })
    }
    //standard upload
    document.getElementById('standard-upload').addEventListener('click', function(e){
        var standardUploadFiles = document.getElementById('standard-upload-files').files;
        e.preventDefault();
        startUpload(standardUploadFiles);
    });

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