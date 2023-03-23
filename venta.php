<?php
require_once 'conector.php';


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ventas</title>
    <link rel="stylesheet" href="./estilo.css">


</head>

<body>
    <h1 style="margin-bottom:80px ;">VENTAS DIARIAS KAIROS</h1>
    <div class="contenVentas">
        <table  width="20%" border="5" align="center">
            <tr>
                <td style="font-size: 1.5em;color:yellowgreen ;">FECHA</td>
                <td style="font-size: 1.5em;color:yellowgreen ;">IMPORTE</td>
                <td style="font-size: 1.5em;color:yellowgreen ;">ACCION</td>
            </tr>
            <?php
            $sumar_cantidad = 0;
            $sql = "SELECT * FROM ventas";
            $query = $conn->query($sql);

            foreach ($query as $row) :

                $sumar_cantidad = $sumar_cantidad + floatval( $row['venta']);
            ?>
                <tr class="regis">
                    <td class="fecha"><?php echo  $row['fecha']  ?></td>
                    <td class="ventaTo"><?php echo $row['venta'] ?> €</td>
                    <td class="botBo"><a href="borrarVenta.php?id=<?php echo $row['id']; ?>">
                    <input type='button'  id='borrar' name='borrar' value='BORRAR'></a></td>

                </tr>

            <?php endforeach; ?>
        </table>
        <a href="ventaonline.php"><input type="button" style="width: 100px; margin-top: 30px; color:aqua;padding:20px;" value="VOLVER"></a>
        <h2 class="suma_total" ><?php echo "TOTAL" . "<br>" .  $sumar_cantidad;  ?>€</h2>
    </div>
</body>

</html>