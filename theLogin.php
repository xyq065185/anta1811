<?php

    header("Content-type:text/html;charset=utf-8");
    //接收数据

    $userId=$_POST['username'];
    // echo "<script>console.info($userId)</script>";
	// $username=$_POST['username'];
    $userpass=$_POST['userpass'];
    

    //1、连接数据库
    // mysql_connect("数据库服务器的地址","用户名","密码");
    $conn = mysql_connect("localhost:3306","root","root");
    //选择数据库
    mysql_select_db("mydb1811",$conn);

    //2、传输数据（执行SQL语句）
    $sqlstr = "select * from student where studentId='$userId' and studentPass='$userpass'";
    $result = mysql_query($sqlstr,$conn);
    
	//3、关闭数据库
    mysql_close($conn);

    //4、响应   
    // echo "注册成功";
    $rows = mysql_num_rows($result);
    if($rows==1){
        echo "1";
    }else{
        echo "0";
    }

?>