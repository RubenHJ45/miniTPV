<?php
require_once 'conector.php';


?>


<!DOCTYPE html>
<html lang="eS">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MINI TPV</title>
    <link rel="stylesheet" href="estilo.css">
    <!-- CSS only -->
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> -->
    <script type="text/javascript" src="./index.js"></script>


</head>

<body>
    <?php

    if (isset($_POST['insertar'])) {

        $nombre = $_POST['nombre'];

        $importe = $_POST['importe'];

        $sql = "INSERT INTO clientes (nombre, importe) VALUES ('$nombre', '$importe')";
        $query = $conn->query($sql);
        
        header("Location:ventaonline.php");

    }


    ?>


    <div class="save"></div>

    <h3 class="ventaT"></h3>

    </div>
    <h1>MINI TPV </h1>

    <div class="conten">

        <div class="contenedor">

            <div class="botones"></div>
        </div>

        <div class="cantidad">
            <h2 class="cant">PRODUCTOS</h2>
            <div class="agua"></div>
            <div class="coca"></div>
            <div class="fanta"></div>
            <div class="mixto"></div>
            <div class="gomis"></div>
            <div class="empa"></div>
            <div class="salchipa"></div>
            <div class="bombi"></div>
            <div class="burguer"></div>
            <div class="carne"></div>
            <div class="imperial"></div>
            <div class="cafe"></div>
            <div class="perrito"></div>
            <div class="bolsita"></div>
            <div class="pepin"></div>
            <div class="mila"></div>
            <div class="varios"></div>
            <div class="extra"></div>
        </div>
        <div class="total">
            <h1>TOTAL:</h1>
            <div class="tuti"></div>
        </div>

    </div>

    <section class="clientes">

        <div class="usuarios">
            <h1>CLIENTES</h1>
            <form name="from1" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <input class="inp" required  id="nombre" name="nombre" type="text" onkeyup="recoger(this.value)" placeholder="nombre">
                <input class="inp"  id="inporte" name="importe" type="text" placeholder="importe" require >
               
                <input class="insertar" name="insertar" id="insertar" type="submit" onclick="descarga()" value="GUARDAR">
              
            
            </form>
            <h1 id="nombre1" style="font-size: 3em; ;"></h1>

           
        </div>
        <!-- <div class="usu"> -->
        <hr>
        <table width="50%" border="0" align="center">
            <tr>
                <td style="font-size: 1.5em;">NOMBRE</td>
                <td style="font-size: 1.5em;">IMPORTE</td>
            </tr>
            <?php
            $sumar_cantidad = 0;
           
            $sql = "SELECT * FROM clientes ORDER BY nombre";
            $query = $conn->query($sql);
            
            foreach ($query as $row) :
                

                $sumar_cantidad = $sumar_cantidad + floatval( $row['importe']);
                $nombre= $row['nombre'];
                $importe = $row['importe'];
            ?>
                <tr class="regis">
                    <td class="nom"><?php echo  $row['nombre']  ?></td>
                    <td class="importe"><?php echo $row['importe'] ?> €</td>
                    
                    <!-- EDITAR -->
                    <td><a href="actualizar.php?id=<?php echo $row['id']; ?>&nombre=<?php echo $row['nombre'] ?>&importe=<?php echo $row['importe'] ?>" ><input type='button' id='editar' name='editar' class="editar" value='EDITAR'></a></td>

                    <!-- BORRAR -->
                    <td><a href="borrar_usu.php?id=<?php echo $row['id']; ?>"><input type='button' id='borrar' name='borrar' value='BORRAR'></a></td>
                </tr>
            
            <?php endforeach; ?>
            </table>
        <!-- </div> -->
        <div class="sumTo">
        <?php

if (isset($_POST['sum'])) {

    $fecha = $_POST['fecha'];

    $ventaDia = $_POST['ventaTotal'];

    $sql = "INSERT INTO ventas (fecha, venta) VALUES ('$fecha', '$ventaDia')";
    $query = $conn->query($sql);


    // header("Location:ventaonline.php");
};



?>
            <form name="formulario2" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                <h2 class="suma_total"><?php echo "TOTAL" . "<br>" .  $sumar_cantidad;  ?>€</h2><br>
                <input type="text" name="fecha" id="fecha" class="fecha" placeholder="fecha"><br>
                <input type="text" class="fecha" name="ventaTotal" placeholder="venta del dia"><br>
                <a style="text-decoration: none; color: aqua;padding:10px;"  href="venta.php" >VER</a>
                <input style="padding: 10px;" type="submit"  id="sum" name="sum"  value="INSERT">
            </form>
        </div>
    </section>

</body>

</html>