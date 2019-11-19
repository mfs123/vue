<template>
  <div class="register-box login">
    <div class="register-content">
      <!-- 图标 -->
      <img src="../imges/1.png">
      <!-- 登录表 -->
      <el-form>
        <el-form-item>
         <div class="register-form-item">
			 <span class="el-icon-mobile-phone form-icon"></span>
			  <input placeholder="手机号" class="register-input" />
		 </div>
        </el-form-item>
	
		<el-form-item>
         <div class="register-form-item">
			 <span class="el-icon-lock form-icon"></span>
			  <input placeholder="密码" type="password" class="register-input" />
		 </div>
        </el-form-item>

        <el-form-item class="remember-item">
          <div class="clearfix">
            <label class="text-white fl"><input class="remeber" type="checkbox">是否记住密码</label>
            <router-link class='fr' to="/forget">忘记密码？立即找回</router-link>
          </div>
        </el-form-item>
				
		<el-form-item>
			<el-button class='rehister-btn' type="primary">立即登录</el-button>
		</el-form-item>
		<div class="text-white">百溯真商家系统后台</div>
				
      </el-form>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
@import '../css/regsiter.less';
</style>