<?php

if 
(isset($_POST["name"]) 
&& isset($_POST["phone"]) 
&& isset($_POST["email"]) 
&& isset($_POST["message"]) 
// && 
// (isset($_FILES['image'])){
//     $errors= array();
//     $file_name = $_FILES['image']['name'];
//     $file_size = $_FILES['image']['size'];
//     $file_tmp = $_FILES['image']['tmp_name'];
//     $file_type = $_FILES['image']['type'];
//     $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
    
//     $extensions= array("jpeg","jpg","png");
    
//     if(in_array($file_ext,$extensions)=== false){
//        $errors[]="extension not allowed, please choose a JPEG or PNG file.";
//     }
    
//     if($file_size > 2097152) {
//        $errors[]='File size must be excately 2 MB';
//     }
    
//     if(empty($errors)==true) {
//        move_uploaded_file($file_tmp,"images/".$file_name);
//        echo "Success";
//     }else{
//        print_r($errors);
//     }
&& isset($_POST["select"])
&& isset($_POST["myradio"])
) { 
	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
        'phone' => $_POST["phone"],
        'email' => $_POST["email"],
        'message' => $_POST["message"],
        // 'image' => $_FILES["image"],
        'select' => $_POST["select"],
        'myradio' => $_POST["myradio"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}



?>