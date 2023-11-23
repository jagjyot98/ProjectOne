<?php

include 'vconnect.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Authorization, Origin');

$response = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $table = $data->courseTable;

    // Perform login logic here
    $query = "SELECT * FROM $table"; // Directly include the table name in the query
    $result = $conn->query($query);

    if ($result) {
        if ($result->num_rows > 0) {
            $arrayu = mysqli_fetch_all($result); //$result->fetch_assoc(); // Fetch data as an associative array
            $response['data'] = $arrayu; // Assign the data to the response
            $response['status'] = 'success';
            // Create a session for the logged-in user
            // $_SESSION['user'] = $user;
        } else {
            $response['status'] = 'fail';
        }
    } else {
        $response['status'] = 'error1';
    }
} else {
    $response['status'] = 'error2';
}

echo json_encode($response);

// include 'vconnect.php';
// // this would allow cross origin requests from your react development server 
// // header("Access-Control-Allow-Origin: *"); 
// // header("Access-Control-Allow-Origin: http://localhost:5000");

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

// $response = array();

// if ($_SERVER['REQUEST_METHOD'] === 'POST') 
// { 
//     $data = json_decode(file_get_contents("php://input")); 
//     $table = $data->table; 

//     // Perform login logic here 
//     $query = "SELECT * FROM $table"; 
//     $stmt = $conn->prepare($query); 
//     // $stmt->bind_param("s", $table); 

//     if ($stmt->execute()) { 
//         $result = $stmt->get_result();

//         if ($result->num_rows > 0) { 
//             $arrayu = $result->fetch_assoc();
//             // $arrayu = mysqli_fetch_array($result);      //_all
//             // $response["userName"] = $arrayu['userName'];//['userName'];
//             $response['status'] = 'success';
//             $response['data'] = $arrayu; // Store data in response
//             // Create a session for the logged-in user
//             // $_SESSION['user'] = $user;
//         } else { 
//             $response['status'] = 'fail';
//         }
//     } else {
//         $response['status'] = 'error';
//     }
//     $stmt->close();
// } else {
// $response['status'] = 'error';
// }
//     echo json_encode($response);
?>
