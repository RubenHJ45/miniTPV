<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php 

include('conector.php');

    $id =$_GET['id'];

    $sql = "DELETE FROM clientes WHERE ID='$id'";
    $query = $conn->query($sql);

    header("Location:ventaonline.php");
?>
    
</body>
</html>