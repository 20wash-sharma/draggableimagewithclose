<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        
        <link rel="stylesheet" href="week3style.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    </head>
    <body>
        <div class="container">
            <!-- Static navbar -->
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">WEEK THREE ASSIGNMENT</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">


                    </div><!--/.nav-collapse -->
                </div><!--/.container-fluid -->
            </nav>
            <div class="row ">
                <div class="col-md-6">
                    <form name="myForm" action="" onsubmit="return validateForm(event)" method="post">
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" name="fname" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Location</label>
                            <input type="text" class="form-control" name="flocation" placeholder="Location">
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Phone</label>
                            <input type="text" class="form-control" name="fphone" placeholder="Phone">
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Address</label>
                            <input type="text" class="form-control" name="faddress" placeholder="Address">
                        </div>
                         <div class="form-group">
                            <label for="formGroupExampleInput2">Email</label>
                            <input type="text" class="form-control" name="femail" placeholder="Email">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div> 
                <div class="col-md-6">
                    <table id="myTable" class="table">
                        <thead>
                            <tr><th>Name</th><th>Location</th><th>Phone</th><th>Address</th><th>email</th></tr>
                        </thead>
                        <tbody>

                        </tbody>

                    </table> 
                </div> 
            </div>
        </div>



        <script src="weekthirdjs.js"></script>
    </body>
</html>
