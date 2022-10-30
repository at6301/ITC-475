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
        <p>
            Thank you for submitting your travel agent contact request! Here is the information you submitted:
            Client Name: <?php echo $_POST["fname"] . $_POST["lname"];?>
            Client Email: <?php echo $_POST["email"];?>
            Client Phone Number: <?php echo $_POST["phoneNum"];?>
            Number of Adults: <?php echo $_POST["adults"];?>
            Number of Children: <?php echo $_POST["children"];?>
            Destination: <?php echo $_POST["location"];?>
            Travel Dates: <?php echo $_POST["dateStart"] . $_POST["dateEnd"];?>
            Interested Activities:
            An agent will be in touch with you soon!
        </p>
        <footer>
            <div style="margin-bottom: 20px;">Copyright Protected. All rights reserved.</div>
            <div>
                MEGA TRAVELS<br>
                mega@travels.com
            </div>
        </footer>
    </body>
</html>