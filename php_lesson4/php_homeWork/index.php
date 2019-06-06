<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<form action="/php_homeWork/confirm.php" method="post" class="formWithValidation">
    <div>
        <div>
            <label>Login:</label>
        </div>
        <div>
            <input class="login field" name="login" type="text" />
        </div>
    </div>
    <div>
        <div>
            <label>Password:</label>
        </div>
        <div>
            <input class="password field" name="pwd" type="password" />
        </div>
    </div>
    <div>
        <div>
            <label>Password confirmation:</label>
        </div>
        <div>
            <input class="passwordConfirmation field" name="pwdConf" type="password" />
        </div>
    </div>
    <div>
        <div>
            <input class="validateBtn" type="submit" value="Send" /> <!--validate button-->
        </div>
    </div>
</form>
</body>
<script src="/php_homeWork/js/index.js"></script>
<script src="/php_homeWork/js/validator.js"></script>
</html>
