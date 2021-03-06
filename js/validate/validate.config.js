//汉化
!function(a){"function"==typeof define&&define.amd?define(["jquery","jquery.validate.min"],a):a(jQuery)}(function(a){var icon="<i class='fa fa-times-circle'></i>  ";a.validator.addMethod("byteMaxLength",function(value,element,param){var length=value.length;for(var i=0;i<value.length;i++){if(value.charCodeAt(i)>127){length=length+2}}return this.optional(element)||(length<=param[0])},a.validator.format(icon+"最多输入{0}个字节(一个中文字算3个字节)"));a.validator.addMethod("alnum",function(value,element,param){return this.optional(element)||/^[a-zA-Z0-9]+$/.test(value)},a.validator.format(icon+"只能包括英文字母和数字"));a.extend(a.validator.messages,{required:icon+"必填项",remote:icon+"请修正此栏位",email:icon+"请输入有效的电子邮件",url:icon+"请输入有效的网址",date:icon+"请输入有效的日期",dateISO:icon+"请输入有效的日期 (YYYY-MM-DD)",number:icon+"请输入正确的数字",digits:icon+"只能输入数字",creditcard:icon+"请输入有效的信用卡号码",equalTo:icon+"你的输入不相同",extension:icon+"请输入有效的后缀",alnum:icon+"只能包括英文字母和数字",ip:icon+"Ip地址格式错误",repaswd:icon+"确认密码与新密码不一致！",maxlength:a.validator.format(icon+"最多 {0} 个字"),minlength:a.validator.format(icon+"最少 {0} 个字"),rangelength:a.validator.format(icon+"请输入长度为 {0} 至 {1} 之间的字串"),range:a.validator.format(icon+"请输入 {0} 至 {1} 之间的数值"),max:a.validator.format(icon+"请输入不大于 {0} 的数值"),min:a.validator.format(icon+"请输入不小于 {0} 的数值"),ipv4:a.validator.format(icon+"请输入正确的ipv4地址")})});


//通用验证
$('#form').validate({
    debug: true,
    ignore: ":not([name])",
    errorClass: 't-red icon-solid-error',
    errorPlacement:function(error, element){
        $(element).closest('div').append(error);  
    },
    highlight: function (element) {
        $(element).addClass('error').closest('div').find('.t-green').remove();
    },
    success: function (label) {
        var div=label.closest('div');
        div.find('.error').removeClass('error');
        div.find('.t-green').remove();
        label.before('<span class="t-green icon-solid-success" />');
        label.remove();
    }
});