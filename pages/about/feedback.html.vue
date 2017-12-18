<template>
	<div class="feedback-page page-top">
    <!--<nav-fix :data="navs"></nav-fix>-->
		<div class="header">
			<div class="container">
				<h2 class="header-title">Guangdong Takstar Electronic Co., Ltd</h2>
				<p class="subTitle">No.2 Fu Kang Yi Rd., Longxi Boluo Huizhou, Guangdong 516121 China</p>
			</div>
		</div>
		<div class="container">
			<div class="map-wrap">
				<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 map-left">
					<h2>Guangdong Takstar Electronic Co., Ltd</h2>
					<p>
						<span class="left-span visible-lg-inline visible-md-inline visible-sm-inline">Address: </span>
						<span class="right-span"><span class="visible-xs-inline">Address: </span>No.2 Fu Kang Yi Rd.,Longxi Boluo Huizhou,Guangdong 516121 China</span>
					</p>
					<p>
						<span class="left-span">Tel: </span>
						<span class="right-span">86-752-6383644</span>
					</p>
					<p>
						<span class="left-span">Fax: </span>
						<span class="right-span">86-752-6383644</span>
					</p>
					<p>
						<span class="left-span">E-mail: </span>
						<span class="right-span">sales@takstar.com</span>
					</p>
				</div>

				<div class="map col-lg-7 col-md-7 col-sm-6 col-xs-12" style="padding:0;">
					<gmap-map :center="Center" :zoom="Zoom" style="width: 100%; height: 100%">
						<gmap-marker
							:key="index"
							v-for="(m, index) in markers"
							:position="m.position"
							:clickable="true"
							:draggable="true"
							@click="center=m.position"
						>
						</gmap-marker>
					</gmap-map>
				</div>
			</div>
			<div class="feedback-wrap">
				<h2>Customer feedback</h2>
				<form class="form-inline">
					<div class="form-group group-block">
						<span class="star">*</span>
						<input type="text" v-model="username" class="form-control form-name txt-placeholder" id="exampleInputEmail1" placeholder="please write your name">
						<div class="fr radio-wrap">
							<label class="chectbox-label">
                <input type="radio" checked="checked" v-model="sex" name="male" value="1">
							     Mr
							  </label>
							<label class="chectbox-label">
                <input type="radio" v-model="sex" name="female" value="0">
                  Ms
							  </label>
						</div>
					</div>
					<div class="form-group group-block">
						<span class="star phone-star">*</span>
						<select v-model="selected" placeholder="please choose feedback type" class="form-control txt-placeholder">
              <option value="" style="color:#666;" disabled selected hidden>please choose feedback type</option>
						  <option value="1">About information</option>
						  <option value="2">product purchasing</option>
						  <option value="3">technology consulting</option>
						  <option value="4">business cooperation</option>
						  <option value="5">others</option>
						</select>
						<span class="star right-star country-star">*</span>
						<input type="text" v-model="country" class="form-control txt-placeholder" placeholder="please write your country">
					</div>
					<div class="form-group group-block">
						<input type="tel" v-model="phone" class="form-control txt-placeholder" placeholder="please write your phone call">
						<span class="star right-star right-phone-star">*</span>
						<input type="email" v-model="email" class="form-control txt-placeholder" placeholder="please write your Email">
					</div>
					<div class="form-group group-block">
						<span class="star">*</span>
						<textarea class="from-control txt-placeholder" v-model="feedback" placeholder="Please write your feedback"></textarea>
					</div>
					<input type="button" @click="postFeedback" class="btn submitBtn" name="submit" value="Submit">
				</form>
			</div>
		</div>
		<div v-if="alert" class="message">
			<div v-if="success" class="message-content">
				<span @click="alert = false" class="iconfont icon-guanbi"></span>
				<span class="iconfont icon-success"></span>
				<p>Message received, thank you for your feedback</p>
			</div>
			<div v-if="error" class="message-content">
				<span @click="alert = false" class="iconfont icon-guanbi"></span>
				<span class="iconfont icon-icon-jinggao"></span>
				<p>The message failed to send! Please resend it.</p>
			</div>
		</div>
	</div>
</template>

<script>
	import navFix from '../../components/navFix.vue';
	export default {
		components: {
			navFix
		},
		data() {
			return {
				Center: { lat: 23.136430, lng: 114.119061 },
				Zoom: 8,
				markers: [{
          position: {lat: 23.136430, lng: 114.119061}
        }],
				navs: [
					{
						title: 'Company Profile',
						domain: 'about',
						path: 'company'
					},
					{
						title: 'Factory Tour',
						domain: 'about',
						path: 'factoryTour'
					},
					{
						title: 'R&D',
						domain: 'about',
						path: 'rd'
					},
					{
						title: 'Quality Control',
						domain: 'about',
						path: 'quality'
					},
					{
						title: 'Contact Us',
						domain: 'about',
						path: 'feedback'
					}
				],
				alert: false,
				success: false,
				error: false,
				username: '',
				sex: 1,
				selected: '',
				country: '',
				phone: '',
				email: '',
				feedback: ''
			}
		},
		mounted() {
			this.initEvent();
		},
		methods: {
			initEvent() {
				var inputs = $('input[placeholder], textarea[placeholder], select');
				var select = $("select");
				inputs.on('.placeholder');
				select.on('.placeholder');
				var txt_placeholder;
				inputs.on('focus.placeholder', function () {
					txt_placeholder = $(this).attr('placeholder');
					$(this).removeClass('txt-placeholder');
					if ($(this).val() === txt_placeholder) {
						$(this).val('').removeClass('txt-placeholder');
					}
				}).on('blur.placeholder', function () {
					if ($(this).val() === '') {
						$(this).val(txt_placeholder).addClass('txt-placeholder');
					} else if ($(this).val() === txt_placeholder) {
						$(this).addClass('txt-placeholder');
					}
				});
				select.on('blur.placeholder', function () {
					if ($(this).find("option:selected").text() === txt_placeholder) {
						$(this).addClass('txt-placeholder');
					}
				})
			},
			postFeedback() {
				var vm = this;
				if (vm.username == '' || vm.country == '' || vm.email == '' || vm.feedback == '' || vm.selected == '') {
					alert("Please enter content to feedback");
					return false;
				}
				if (!vm.isEmail(vm.email)) {
					alert("invalid email!");
					return false;
				}
				if (!vm.isPhone(vm.phone) && vm.phone !== '') {
					alert("invalid phone number!");
					return false;
				}
				this.$store.dispatch('postFeedback', {
					username: this.username,
					sex: this.sex,
					type: this.selected,
					country: this.country,
					phone: this.phone,
					email: this.email,
					content: this.feedback,
					XDEBUG_SESSION_START: 19563
				}).then(response => {
					if (vm.messageResponse === 'success') {
						vm.username = ''
						vm.country = ''
						vm.phone = ''
						vm.email = ''
						vm.feedback = ''
						vm.alert = true
						vm.error = false
						vm.success = true
					} else {
						vm.alert = true
						vm.error = true
						vm.success = false
					}
				})
			},
			isEmail(str) {
				var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
				return reg.test(str);
			},
			isPhone(str) {
				var reg = /^1[0-9]{10}$/;
				return reg.test(str);
			}
		},
		computed: {
			messageResponse() {
				return this.$store.state.feedback.message;
			}
		}
	}

</script>

<style lang="less" scoped>
	.form-control {
		height: auto;
	}

	.feedback-page {
		background: #e7dcd3;
		padding-bottom: 40px;
		.txt-placeholder {
			color: #bbb;
		}
		.map-wrap {
			background: #fff;
			text-align: left;
			overflow: hidden;
			margin-top: 50px;
      .map-left{
        padding:0 35px;
        padding-bottom: 20px;
      }
			h2 {
				font-size: 30px;
				color: #000;
				padding-top: 90px;
				padding-bottom: 15px;
			}
			p {
				margin-bottom: 15px;
			}
			span {
				font-size: 16px;
        font-weight:300;
			}
			.left-span {
				color: #999999;
				display: inline-block;
				width: 50px;
				text-align: left;
			}
			.right-span {
				display: inline-block;
				line-height: 22px;
        span{
          color:#999999;
        }
			}
			.left-info {
				height: 350px;
				padding: 0 25px;
			}
			.map {
				background:url("../../assets/images/google_map.jpg") no-repeat center center;
				height: 350px;
			}
		}
		.feedback-wrap {
			background: #fff;
			margin-top: 30px;
			padding-bottom: 40px;
			h2 {
				text-align: center;
				padding-top: 40px;
				padding-bottom: 60px;
				font-size: 36px;
			}
			form {
				width: 970px;
				margin: 0 auto;
				.radio-wrap {
					margin-right: 200px;
				}
				.group-block {
					display: block;
					margin-bottom: 20px;
					width: 100%;
					position: relative;
				}

				.form-control,
				textarea {
					width: 390px;
					border-radius: 0;
					border: 1px solid #dddddd;
					margin-left: 50px;
					font-size: 14px;
					color: #000;
          height: 40px;
          font-weight:300;
				}
				textarea {
					width: 830px;
					box-sizing: border-box;
					padding: 15px;
					height: 200px;
					vertical-align: top;
          line-height:15px;
				}
				.txt-placeholder {
					color: #9999a5;
				}
				.form-name {
					width: 450px;
					margin-right: 20px;
				}
				.chectbox-label {
					margin-right: 20px;
				}
				.submitBtn {
					display: block;
					margin: 0 auto;
					background: #e70f20;
					font-weight: 600;
					border-radius: 0;
					width: 300px;
					color: #fff;
					font-size: 20px;
				}
				.star {
					position: absolute;
					top: 10px;
					left: 35px;
					color: #e70f20;
				}
				.right-star {
					left: 475px;
				}
			}
		}
		.message {
			position: fixed;
			z-index: 400;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.6);
			.message-content {
				position: absolute;
				margin: auto;
				width: 300px;
				left: 0;
				top: 300px;
				right: 0;
				right: 0;
				z-index: 100;
				background: #fff;
				text-align: center;
				color: #000;
				padding: 35px 0;
				.icon-guanbi {
					position: absolute;
					right: 10px;
					top: 10px;
					font-size: 18px;
					cursor: pointer;
				}
				.icon-success,
				.icon-jinggao {
					color: #46c582;
					font-size: 40px;
					margin-bottom: 15px;
					display: inline-block;
				}
				.icon-jinggao {
					color: #ca3200;
				}
			}
		}
	}

	.header {
		width: 100%;
		height: 345px;
		background-image: url('../../assets/images/backgound-1.0.0.jpg');
    background-position:center top;
		background-size: cover;
		text-align: right;
		h2 {
			color: #ff0000;
			font-size: 35px;
			font-weight: 800;
			padding-top: 220px;
			padding-bottom: 20px;
		}
		p {
			color: #000;
			text-align: right;
			margin: 0 auto;
      font-weight:300;
		}
	} //ipad
	@media (min-width:768px) and (max-width:1024px) {
		.feedback-page {
      .header{
        p{
          color:#fff;
        }
      }
			.feedback-wrap form {
				width: 710px;
				.form-name {
					width: 400px;
				}
				.form-control {
					width: 290px;
				}
				.right-star {
					left: 375px;
				}
				textarea {
					width: 630px;
				}
			}
			.map-wrap {
				.map {
          background:url("../../assets/images/google_map.jpg") no-repeat center center;
					height: 350px;
				}
        .map-left{
          padding: 0 35px;
          padding-bottom: 20px;
          h2{
            padding-top:30px;
          }
        }
			}
		}
	} //phone
	@media (min-width:0) and (max-width:767px) {
		.feedback-page {
      .header {
        p {
          color: #fff;
          line-height: 24px;
        }
      }
      .map-wrap h2{
        padding-top:30px;
      }
      .feedback-wrap h2{
        padding-top:30px;
        padding-bottom:30px;
      }
			.feedback-wrap form {
				width: 85%;
				.radio-wrap {
					margin-bottom: 15px;
				}
				.phone-star {
					top: 64px;
				}
				.right-phone-star {
					left: 35px;
					top: 60px;
				}
				.country-star {
					top: 117px;
					left: 35px;
				}
				.form-name {
					width: 90%;
				}
				.form-control {
					width: 90%;
					margin-bottom: 15px;
				}
				.submitBtn {
					width: 97%;
				}
				textarea {
					width: 90%;
				}
				.form-control,
				textarea {
					margin-left: 25px;
				}
				.star {
					left: 12px;
				}
				.radio-wrap {
					margin-left: -10px;
					float: inherit !important;
					margin-left: 26px;
					margin-right: 125px;
					.chectbox-label {
						margin-right: 8px;
					}
				}
			}
			.header {
				h2 {
					padding-top: 195px;
				}
			}
		}
	} //small cellphone
	@media (max-width:330px) and (min-width:0px) {
		.feedback-page .feedback-wrap form {
			width: 300px;
		}
		.feedback-page .feedback-wrap form .form-control {
			width: 250px;
		}
		.feedback-page .feedback-wrap form textarea {
			width: 250px;
		}
		.feedback-page .feedback-wrap form .submitBtn {
			width: 250px;
		}
		.feedback-page .feedback-wrap form .radio-wrap {
			margin-left: 26px;
			margin-right: 125px;
			float: inherit !important;
		}
		.feedback-page .map-wrap .right-span {
			width: 270px;
		}
	}
</style>
