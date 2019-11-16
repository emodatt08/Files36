<?php
class upload {

    public $allowed = ['mp4','mp3','png','mkv', 'rar','zip','jpeg', 'jpg'];
    public $processed = [];
    public $destination = '../files/';

    public function uploadTo($files){
        foreach($files['files']['name'] as $key => $name){
            $error = $files['files']['error'][$key];
            if($error === 0){
                $temp = $files['files']['tmp_name'][$key];
                $ext = explode('.', $name);
                $ext = strtolower(end($ext));
                $file = uniqid('', true). time() . '.' . $ext;
                if (in_array($ext, $this->allowed) && move_uploaded_file($temp, $this->destination.$file)){
                    $this->processed[] = [
                        'name' => $name,
                        'file' => $file,
                        'uploaded' => true
                    ];
                }else{
                     $this->processed[] = [
                        'name' => $name,
                        'uploaded' => false
                    ];
                }
            }
        }
         return json_encode($this->processed);
    }

}


if(isset($_FILES)){
    header('Content-Type:application/json');
    $upload = (new upload())->uploadTo($_FILES);
    echo $upload;
}



