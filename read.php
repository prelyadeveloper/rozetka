<?php
// required headers
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "rozetka";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

function goThroughArraysOFarray($array, $value) {
    for($i = 0; $i < count($array); $i++)  {
        if( array_key_exists($value, $array[$i++])) {
            return true;
        }
    }
    return false;
}


if($_GET['get'] == "filters" && $_GET['product_type']) {


    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    $type = $_GET['product_type'];

    $sql = "SELECT (SELECT count(id) from assigned_filters where filter_id = f.id ) as amount,f.value, f.id as filter_id, ft.type, ft.id as filter_type_id, ft.title FROM filters as f, filter_type as ft WHERE ft.catalog_id = (SELECT DISTINCT id from catalog WHERE type_name = '$type') AND f.filter_type_id = ft.id";
    $result = $conn->query($sql);
    $jscon_result = [];


    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {

            if( array_key_exists($row['title'], $jscon_result)) {
                if(!goThroughArraysOFarray($jscon_result[$row['title']],$row['value'])){
                    $jscon_result[$row['title']][] =['array' => ['value' => $row['value'], 'amount' => $row['amount'],'id' => $row['filter_id'], 'type' => $row['type']],
                        'filter_type_id' => $row['filter_type_id']];
                }
            } else {
                $jscon_result[$row['title']] = [];
                $jscon_result[$row['title']][] = ['array' => ['value' => $row['value'],'amount' => $row['amount'], 'id' => $row['filter_id'], 'type' => $row['type']],
                    'filter_type_id' => $row['filter_type_id']];
            }
        }
    }

    $returnFilters =  json_encode($jscon_result);


    echo  $returnFilters;
    $conn->close();
}



if($_GET['get'] == "filter_descr" && $_GET['filter_id']) {


    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $id = $_GET['filter_id'];

    $sql = "SELECT d.description, t.title FROM filter_type_descr as d, filter_type as t WHERE t.id = '$id' AND d.filter_type_id = t.id;";
    $result = $conn->query($sql);
    $jscon_result = [];


    if ($result->num_rows > 0) {

    }


    $returnFilters =  json_encode($result->fetch_assoc());


    echo  $returnFilters;
    $conn->close();
}


//
if($_POST['sendfilters']) {

    $result =  json_decode($_POST['sendfilters']);

    $catalog_id = $result->cat_id;
    $sql = "INSERT filter_type ( type, title, description, catalog_id) VALUES ";

    for($i = 0; $i < count($result->filters); $i++) {
        $name = $result->filters[$i]->name;
        $description = $result->filters[$i]->description;
        $key = $result->filters[$i]->key;
        if($i > 0 && $i < count($result->filters)) {
            $sql.=" , ";
        }
        $sql.= "('$key','$name','$description','$catalog_id')";
    }
    $sql.= " ;";

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $result = $conn->query($sql);
}

if($_GET['get'] == "product_types"){

$sql = "SELECT * FROM catalog";

    $result = $conn->query($sql);


    $arrRes = [];
 while($row = $result->fetch_assoc()) {

     $arrRes[] = $row;
 }


 echo json_encode($arrRes);
    exit();
}

if($_GET['get'] == "products" && $_GET['cat'] ){

       $cat = $_GET['cat'];
    $sql = "SELECT * FROM product WHERE cat_id = (SELECT DISTINCT id FROM catalog WHERE type_name = '$cat')";

    if( $_GET['filters'] ){
        $filters = explode(',',$_GET['filters']);

      $flList = "(";
        for($i = 0; $i < count($filters); $i++) {
            if($i < count($filters) - 1) {
                $flList.="'$filters[$i]',";
            } else {
                $flList.="'$filters[$i]'";
            }

        }
         $flList.=")";
        $sql.= " AND id IN (SELECT product_id from assigned_filters WHERE filter_id IN  $flList)";
    }



    $result = $conn->query($sql);

    $arrRes = [];

    while($row = $result->fetch_assoc()) {

        $arrRes[] = $row;
    }

   echo json_encode($arrRes);
   exit();
}

?>