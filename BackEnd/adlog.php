<?php
include 'adconnect.php';
// this would allow cross origin requests from your react development server 
// header("Access-Control-Allow-Origin: *"); 
// header("Access-Control-Allow-Origin: http://localhost:5000");

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

$response = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') 
{ 
    $data = json_decode(file_get_contents("php://input")); 
    $email = $data->userEmail; 
    $password = $data->userPassword; 
    // Perform login logic here 
    $query = "SELECT * FROM secondWay WHERE adEmail = ? AND adPassword = ?"; 
    $stmt = $conn->prepare($query); 
    $stmt->bind_param("ss", $email, $password); 

    if ($stmt->execute()) { 
        $result = $stmt->get_result();

        if ($result->num_rows > 0) { 
            // $user = $result->fetch_assoc();
            $arrayu = mysqli_fetch_array($result);
            // $response["userName"] = $arrayu['userName'];//['userName'];
            $response['status'] = 'success';
            // Create a session for the logged-in user
            // $_SESSION['user'] = $user;
        } else { 
            $response['status'] = 'fail';
        }
    } else {
        $response['status'] = 'error';
    }
    $stmt->close();
} else {
$response['status'] = 'error';
}

    echo json_encode($response);
?>
