<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Material Icons  -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" type="text/css" href="./css/main.css">

    <title>Hello, world!</title>
</head>

<body>

    <div class="container ">
        <div class="row">

            <div class="col-sm-12 col-md-6">
                <table border="1">
                    <thead>
                        <h2>Table</h2>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td rowspan="3"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colspan="2"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- col end -->

            <div class="col-sm-12 col-md-6">
                <div class="row">
                    <h2>boostrap 4 grid table )</h2>
                    <div class="red-border col-sm-12 col-md-12">
                        <div class="row">
                            <div class="red-border col-sm-12 col-md-9">
                                <div class="row">
                                    <div class="red-border col-sm-12 col-md-4">
                                    </div>
                                    <div class="red-border col-sm-12 col-md-4">
                                    </div>
                                    <div class="red-border col-sm-12 col-md-4">
                                    </div>
                                    <div class="red-border col-sm-12 col-md-4">
                                    </div>
                                    <div class="red-border col-sm-12 col-md-4">
                                    </div>
                                    <div class="red-border col-sm-12 col-md-4">
                                    </div>
                                    <div class="red-border col-sm-12 col-md-8">
                                    </div>
                                    <div class="red-border col-sm-12 col-md-4">
                                    </div>
                                </div>
                            </div>
                            <div class="red-border col-sm-12 col-md-3">
                            </div>
                        </div>
                    </div>
                    <div class="red-border col-sm-12 col-md-12">
                    </div>
                    <div class="red-border col-sm-12 col-md-12">
                        <div class="row">
                            <div class="red-border col-sm-12 col-md-3">
                            </div>
                            <div class="red-border col-sm-12 col-md-3">
                            </div>
                            <div class="red-border col-sm-12 col-md-6">
                            </div>
                            <div class="red-border col-sm-12 col-md-3">
                            </div>
                            <div class="red-border col-sm-12 col-md-3">
                            </div>
                            <div class="red-border col-sm-12 col-md-6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- col end -->

            <div class="col-sm-12 col-md-6">

                <div class="card">
                    <h3 class="form-title">My form</h3>

                    <form  id="ajax_form"  method="post" action="" enctype="multipart/form-data">

                        <div class="input_group">
                            <input type="text" name="name" maxlength="40" placeholder="">
                            <label for="name">имя</label>
                            <div class="active-border"></div>
                        </div>

                        <div class="input_group">
                            <input type="text" name="phone" maxlength="40" placeholder="">
                            <label for="phone">телефон</label>
                            <div class="active-border"></div>
                        </div>

                        <div class="input_group">
                            <input type="email" name="email" maxlength="40" placeholder="">
                            <label for="email">email</label>
                            <div class="active-border"></div>
                        </div>

                        <div class="input_group">
                            <textarea style="resize: none;" name="message" rows="2" maxlength="40"
                                placeholder=""></textarea>
                            <label for="message">сообщение</label>
                            <div class="active-border" style="bottom: 6px;"></div>
                        </div>

                        <div class="padding">
                            <input type="file" name="1image">
                            <label for="image">выбрать файл</label>
                        </div>

                        <div class="padding">
                            <select name="select">
                                <option disabled selected>Выберите героя</option>
                                <option value="Чебурашка">Чебурашка</option>
                                <option value="Крокодил Гена">Крокодил Гена</option>
                                <option value="Шапокляк">Шапокляк</option>
                            </select>
                        </div>

                        <div class="ridiobuttons padding">
                            <label>
                                <input name="myradio" type="radio" value="radio1">radio1
                            </label>
                            <label>
                                <input name="myradio" type="radio" value="radio2">radio2
                            </label>
                            <label>
                                <input name="myradio" type="radio" value="radio3">radio3
                            </label>
                        </div>
                        <hr>

                        <button class="button" id="btn" type="submit"> submit</button>
                    </form>
                </div>
            </div>
            <!-- col end -->

            <div class="col-sm-12 col-md-6">


                <div>
                    <?php
                        if(isset($_FILES['image'])){
                            $errors= array();
                            $file_name = $_FILES['image']['name'];
                            $file_size = $_FILES['image']['size'];
                            $file_tmp = $_FILES['image']['tmp_name'];
                            $file_type = $_FILES['image']['type'];
                            $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
                            
                            $extensions= array("jpeg","jpg","png");
                            
                            if(in_array($file_ext,$extensions)=== false){
                                $errors[]="extension not allowed, please choose a JPEG or PNG file.";
                            }
                            
                            if($file_size > 2097152) {
                                $errors[]='File size must be excately 2 MB';
                            }
                            
                            if(empty($errors)==true) {
                                echo "Success";
                            }else{
                                print_r($errors);
                            }
                        }
                    ?>
                <h2>My Form Results</h2>
                    <form action="" method="POST" enctype="multipart/form-data">
                        <input type="file" name="image" />
                        <input type="submit" />

                        <ul>
                            <li>Sent file: <?php echo $_FILES['image']['name'];  ?>
                            <li>File size: <?php echo $_FILES['image']['size'];  ?>
                            <li>File type: <?php echo $_FILES['image']['type'] ?>
                        </ul>

                    </form>
                </div>

 <div class="card">
                    <h3 class="form-title">My form result</h3>
                <div id="result_form"></div>
                    </div>


            </div>
            <!-- col end -->
        </div>
        <!-- row end -->
    </div>
    <!-- container -->

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

    <!-- Optional JavaScript -->
    <script type="text/javascript" src="./js/autosize.min.js"></script>
    <script type="text/javascript" src="./ajax.js"></script>
    <script type="text/javascript" src="./js/js.js"></script>

    <script>

    </script>
</body>

</html>