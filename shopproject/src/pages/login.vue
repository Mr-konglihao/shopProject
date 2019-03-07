<template>
    <div class="box">
        <div class="view">
            <div :class="{con:flag}" @click="flag=true">登录</div>
            <div :class="{con:!flag}" @click="flag=false">注册</div>
        </div>
        <div class="regist_box" v-show="!flag">
            <input v-model="reg_user" type="text" placeholder="请输入用户名"><br>
            <input v-model="reg_pwd" type="password" placeholder="请输入密码"><br>
            <span @click="regist">注册</span>
        </div>
        <div class="login_box" v-show="flag">
            <input v-model="login_user" type="text" placeholder="请输入用户名"><br>
            <input v-model="login_pwd" type="password" placeholder="请输入密码"><br>
            <span @click="login">登录</span>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                flag:true,
                reg_user:'',
                reg_pwd:'',
                login_user:'',
                login_pwd:''
            }
        },
        methods:{
            login(){

			if(!(/^.{6,12}$/.test(this.login_user))){

				this.$alert("用户名错误","提示",{
					confirmButtonText: '确定'
				})

				return false;

			}

			if(!(/^\w{6,12}$/.test(this.login_pwd))){

				this.$alert("密码错误","提示",{
					confirmButtonText: '确定'
				})

				return false;

			}
			
			this.$store.commit("loading_show");

			this.$http.get("/api/login",{params:{userName:this.login_user,password:this.login_pwd}}).then((res)=>{

				this.$store.commit("loading_hide");

				console.log(res.data)

				if(res.data.code){
					this.$store.commit("update_token",res.data.token)

					this.$alert("登录成功","提示",{
						confirmButtonText: '确定',
						callback:()=>{
							if(this.$route.query.url){
								this.$router.push(this.$route.query.url)
							}else{
								this.$router.push("/")
							}
						}
					})

				}else{

					this.$alert("sorry,err","response",{
						confirmButtonText: 'I see'
					})

				}

			})


		},
		regist(){

			if(!(/^.{6,12}$/.test(this.reg_user))){

				this.$alert("用户名错误","提示",{
					confirmButtonText: '确定'
				})

				return false;

			}

			if(!(/^\w{6,12}$/.test(this.reg_pwd))){

				this.$alert("密码错误","提示",{
					confirmButtonText: '确定'
				})

				return false;

			}
			
			this.$store.commit("loading_show");

			this.$http.get("/api/register",{params:{userName:this.reg_user,password:this.reg_pwd}}).then((res)=>{

				this.$store.commit("loading_hide");

				if(res.data.code){
					this.$alert("注册成功，去登陆","提示",{
						confirmButtonText: '确定',
						callback:()=>{
							this.flag=true
						}
					})

				}else{

					this.$alert("该用户已经注册","提示",{
						confirmButtonText: '确定'
					})

				}

			})

		}
        }
    }
</script>
<style scoped>
    .box{
        width:700px;
        height:400px;
        background: white;
        margin:100px auto;
    }
    .view{
        width:700px;
        height:50px;
        background: #999898;
        overflow: hidden;
    }
    .box .view div{
        width:350px;
        text-align:center;
        line-height:50px;
        float:left;
        cursor: pointer;
    }
    .con{
        background: white;
    }
    .regist_box{
        margin-top:50px;
    }
    .login_box{
        margin-top:50px;
    }
    input{
        width:400px;
        height:50px;
        text-indent:.8em;
        border-radius:25px;
        border:2px solid #999;
        margin:10px auto;
        outline: none;
    }
    input:focus{
        border:2px solid orange;
    }
    span{
        width:100px;
        height:30px;
        border-radius:20px;
        background: red;
        display:inline-block;
        line-height:30px;
        color:white;
        margin-top:20px;
        cursor:pointer;
    }
    span:active{
        box-shadow: 0 5px 10px rgba(250, 29, 29, 0.6)
    }
</style>