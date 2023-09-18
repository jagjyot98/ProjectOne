<?php

include 'dbconnect.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Authorization, Origin');

$response = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input")); 
    
    $courseID = $data->courseID; // Access courseID directly
    
    $query = "SELECT * FROM courses WHERE courseID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $courseID); 
    
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $arrayu = mysqli_fetch_array($result, MYSQLI_ASSOC); // Fetch as associative array
            $response['status'] = 'success';
            $response['data'] = $arrayu;
        } else {
            $response['status'] = 'empty';
        }
    } else {
        $response['status'] = 'error';
    }
    
    $stmt->close();
} else {
    $response['status'] = 'error';
}

echo json_encode($response);

// include 'dbconnect.php';
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Authorization, Origin');

// $response = array();

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $data = json_decode(file_get_contents("php://input")); 
    

//     $courseID = $data->courseID; 

//     echo($courseID);
    
//     $query = "SELECT * FROM courses WHERE courseID = ?";
//     $stmt = $conn->prepare($query);
//     $stmt->bind_param("i", $courseID); 

    
//     if ($stmt->execute()) {
//         $result = $stmt->get_result();
        
//         if ($result->num_rows > 0) {
//             $arrayu = mysqli_fetch_array($result, MYSQLI_ASSOC);
//             $response['status'] = 'success';
//             $response['data'] = $arrayu; // Store data in response
//         } else {
//             $response['status'] = 'empty';
//         }
//     } else {
//         $response['status'] = 'error';
//     }
    
//     $stmt->close();
// } else {
//     $response['status'] = 'error';
// }

// echo json_encode($response); // Encode entire response array
?>
