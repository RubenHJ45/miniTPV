<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TIENDA KAIROS</title>
    <link rel="stylesheet" href="./estilo.css">
    <script type="text/javascript" src="./index.js"></script>
</head>
<body>

<?php 

include('conector.php');

   if(!isset($_POST['actualizar'])){ 
    $id =$_GET['id'];
    $nombre = $_GET['nombre'];
    $importe = $_GET['importe']; 
    
    }else{
        
        $id = $_POST['id'];
        $nombre = $_POST['nombre'];
        $importe = $_POST['importe'];

        $sql = "UPDATE clientes SET importe='$importe' WHERE ID='$id'";
        $query = $conn->query($sql);

        header("Location:ventaonline.php");

    }
        
   
?>

        <h1>ACTUALIZAR CLIENTE</h1>
<form name="form-actualizar" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

    <input type="hidden" name="id" id="id" value="<?php echo $id ?>">
    <input type="text" class="act" name="nombre" id="nombre" value="<?php echo $nombre ?>">
    <input type="text" class="act" name="importe" id="importe" value="<?php echo $importe ?>">
   
    <input type="submit" class="act1" name="actualizar" id="actualizar" value="ACTUALIZAR"><br>
    <!-- <a href="ventasonline.php?id=<?php echo $id ?>"><button class="act1">VOLVER</button></a> -->
  
</form>
    
</body>
</html>