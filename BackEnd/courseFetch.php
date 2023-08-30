<?php
include 'dbconnect.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Authorization, Origin');

$response = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $query = "SELECT * FROM courses";
    $stmt = $conn->prepare($query);
    
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $arrayu = mysqli_fetch_all($result);
            $response['status'] = 'success';
            $response['data'] = $arrayu; // Store data in response
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

echo json_encode($response); // Encode entire response array
?>
