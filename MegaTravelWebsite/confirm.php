<!DOCTYPE html>
<html>
    <head>
        <title>Mega Travel</title>
        <link rel="stylesheet" href="styles.css">
        <script src="welcome.js" defer></script>
    </head>
    <body>
        <header>
            <img src="mega travel logo.png" alt="logo" style = "height: 140px;">
        </header>
        <div id="returnInfoDiv" class="returnInfoDiv" style="padding: 10px;">
            <p>
                Thank you for submitting your travel agent contact request! Here is the information you submitted: <br>
                <br>
                Client Name: <?php echo $_POST["fname"] . " " . $_POST["lname"];?> <br>
                Client Email: <?php echo $_POST["email"];?> <br>
                Client Phone Number: <?php echo $_POST["phoneNum"];?> <br>
                Number of Adults: <?php echo $_POST["adults"];?> <br>
                Number of Children: <?php echo $_POST["children"];?> <br>
                Destination: <?php echo $_POST["location"];?> <br>
                Travel Dates: <?php echo $_POST["dateStart"] . " - " . $_POST["dateEnd"];?> <br>
                Interested Activities: 
                    <?php
                       if (isset($_POST['submit'])){
                            if(!empty($_POST['activity'])){
                                foreach($_POST['activity'] as $selected){
                                echo $selected . "</br>";
                                }
                            }
                        } 
                    ?>
                <br>
                <br>
                An agent will be in touch with you soon! <br>
            </p>
        </div>
        <footer>
            <div style="margin-bottom: 20px;">Copyright Protected. All rights reserved.</div>
            <div>
                MEGA TRAVELS<br>
                mega@travels.com
            </div>
        </footer>
    </body>
</html>