(function($){
  $.extend($.validator.messages, {
    required: "必須項目です。",
    email: "メールアドレスは正しい形式で入力して下さい。",
    phone: "電話番号は数字で入力して下さい。",
  });

  var methods = {
    phone: function(val, ele){
    return this.optional(ele) || /^\d{10}|\d{11}$/.test(val);
    }
  };

  $.each(methods, function(key, callback){
    $.validator.addMethod(key, callback);
  });

  $(function(){
    var emptyBgFunc = function(ele){
      var bgVal = ( String( $(ele).val() ) === "" ) ? "#ffffff" : "#ffffff";
      $(ele).css('background-color', bgVal);
    };
    var makeValidatingCls = function(idx){
      var cls = 'validating' + idx.toString();
      return cls;
    };
    var getValidatingCls = function(ele){
      var cls = $(ele).attr('class').match(/(?:^|[ ])(validating[0-9]+)/);
      cls = (typeof cls === 'object' && typeof cls[1] !== 'undefined') ? cls[1] : '';
      return cls;
    };
    var errHiddenFunc = function(ele){
      var $err = $(ele).next('.error');
      if($err.length){
        $err.css('display', 'none');
      }
    };

    var rules = {}, messages = {}, errTimeouts = {};
    var $inputs = $(".with-validate :input");
    var imeOffTypes = ['email', 'tel'];
    $inputs.each(function(idx){
      $ipt = $(this);
      var type = $ipt.attr('type');
      if( $.inArray(type, imeOffTypes) > -1 ){
        $ipt.css('ime-mode', 'disabled');
      }

      var name = $ipt.attr('name');
      var rule = {};
      switch(type){
        case 'tel':
          rule = { phone: true, required: true };
          message = {
            phone: name + "は数字のみ11桁(-ハイフンなし)で入力して下さい。",
            required: name + "を入力して下さい。",
          };
          break;
        default:
          rule = { required: true };
          message = {
            required: name + "を入力して下さい。",
          };
          break;
      }
      rules[name] = rule;
      messages[name] = message;

      var cls = makeValidatingCls(idx);
      $ipt.addClass(cls);
      errTimeouts[cls] = false;

      emptyBgFunc($ipt.get(0));
      $ipt.on('focusout', function(){ emptyBgFunc(this); });
      $ipt.on('focus', function(){
        errHiddenFunc(this);
        var cls = getValidatingCls(this);
        errTimeouts[cls] = false;
      });
    });

    var validator = $("#mail-form").validate({
      rules: rules,
      messages: messages,
      onfocusout: function(ele, event){
        validator.element(ele);
        var cls = getValidatingCls(ele);
        var timer = setTimeout(function(){
          if(errTimeouts[cls] === timer){
            errHiddenFunc(ele);
          }
        }, 5000);
        errTimeouts[cls] = timer;
      },
    });
  });
})(jQuery);
