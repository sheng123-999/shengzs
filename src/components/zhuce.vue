<template>
    <div class="head">
        <div class="form-group cls" style="padding-top:20px;">
            <label for="zhanghao">账号：</label>
            <input type="text" name="" id="zhanghao">
        </div>
        <div class="form-group cls">
            <label for="pwd">密码：</label>
            <input type="password" id="pwd">
        </div>
        <button class="btn btn-primary btn1">登录</button>
        <button class="btn btn-primary">注册</button>
    </div>
</template>

<style scoped>
.head{
    width: 400px;
    height: 250px;
    margin: auto;
    margin-top: 10%;
    background: rgba(230,230,250,0.4);
    color: black;
    padding: 10% auto;
}
input{
    width: 200px;
    height: 30px;
}
.cls{
    padding: auto;
    padding-left: 40px; 
}
.btn1{
    margin-left: 100px;
    margin-right: 10px;
}
</style>
