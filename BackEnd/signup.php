<?php
    // include ('dbconnect.php');
    // // header("Access-Control-Allow-Origin: http://localhost:3000/");

    // header('Access-Control-Allow-Origin: *');
    // header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

    // $data = json_decode(file_get_contents("php://input"));

    // $firstname = $data->userName;
    // $email = $data->userEmail;
    // $password = $data->userPassword;
    // //echo "<script>console.log('Debug Objects: " . $name . "' );</script>";
    // $stmt = $conn->prepare('insert into Users(userName, userEmail, userPassword) values (?,?,?);');
    // $stmt->bind_param("sss", $firstname, $email, $password);
    // $stmt->execute();

    include ('dbconnect.php');
    // header("Access-Control-Allow-Origin: http://localhost:3000/");

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

    $data = json_decode(file_get_contents("php://input"));

    $firstname = $data->userName;
    $email = $data->userEmail;
    $password = $data->userPassword;

    $stmt = $conn->prepare('insert into users(userName, userEmail, userPassword) values (?,?,?);');
    $stmt->bind_param("sss", $firstname, $email, $password);
    $stmt->execute();
    // $verifyEmail =  mysqli_num_rows($stmt);

    // if ($verifyEmail != 0) {
    //     $arrayu = mysqli_fetch_array($exeSQL);
    //     if ($arrayu['userPassword'] != $password) {
    //         $Message = "pw WRONG"; //1
    //     } else {
    //         $Message = "Success"; //2
    //     }
    // } else {
    //     $Message = "No account yet"; //0
    // }

    $response[] = array("Message" => $Message);
    echo json_encode($response);
        
?>