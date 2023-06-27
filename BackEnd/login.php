<?php
include 'dbconnect.php';
// this would allow cross origin requests from your react development server 
// header("Access-Control-Allow-Origin: *"); 
// header("Access-Control-Allow-Origin: http://localhost:5000");

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

if ($_SERVER['REQUEST_METHOD'] === 'POST') 
{ 
    $data = json_decode(file_get_contents("php://input")); 
    $email = $data->userEmail; 
    $password = $data->userPassword; 
    // Perform login logic here 
    $query = "SELECT * FROM Users WHERE userEmail = ? AND userPassword = ?"; 
    $stmt = $conn->prepare($query); 
    $stmt->bind_param("ss", $email, $password); 
    $stmt->execute(); 
    $result = $stmt->get_result();
    if ($result->num_rows > 0) { 
        // Login successful 
        // Get the user record 
        echo $result;
        // use echo json_encode($user) to send user record to the client 
        // Create a session for the logged in user. 
    } else { 
        // Login failed 
        // echo json_encode("false");
        // send a json encoded error message 
    }
} 
// include ('dbconnect.php');
// header("Access-Control-Allow-Origin: http://localhost:3000/");

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

// $data = json_decode(file_get_contents("php://input"));

// $email = $data->userEmail;
// $password = $data->userPassword;

// // $SQL = "SELECT * FROM Users WHERE userEmail = '$email';";
// // $exeSQL = mysqli_query($conn, $SQL);
// // $verifyEmail =  mysqli_num_rows($exeSQL);

// $stmt = $conn->prepare('SELECT * FROM Users WHERE userEmail = ?;');
// $stmt->bind_param("s", $email);
// $exeSQL->execute();
// $verifyEmail =  mysqli_num_rows($exeSQL);

// if ($verifyEmail != 0) {
//     $arrayu = mysqli_fetch_array($exeSQL);
//     if ($arrayu['userPassword'] != $password) {
//         $Message = "pw WRONG"; //1
//     } else {
//         $Message = $arrayu['userID']; //2
//     }
// } else {
//     $Message = "No account yet"; //0
// }

// $response[] = array("Message" => $Message);
// echo json_encode($response);
  
    
?>