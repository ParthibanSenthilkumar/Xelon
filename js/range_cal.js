
                

                if($("#amount5").length !== 0){
                    let calcAmount = $( "#amount5" );
                    function initRange(min,max){
                        if(!min && !max){
                            var min = 20;
                            var max = 2000;
                        }
                        calcAmount.slider({
                            range: 'min',
                            min: min,
                            max: max,
                            step: 1,
                            slide: function(event, ui){
                                $('#amount-val5').val(ui.value);
                                amount = ui.value;
                                calculate(amount);
                            }
                        });
                    }
            
                    initRange();
            
                    function getRange(){
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        {literal}
                        return {min: min,max: max};
            
                    }
            
            
                    $('#amount-val5').on('change keyup',function () {
                        var amount = parseFloat($(this).val());
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        if(amount<min){
                            amount=min;
                        }else if(amount>max){
                            amount=max;
                            $(this).val(amount);
                        }
                        calcAmount.slider("value", amount);
                        calculate(amount);
                    });
            
                    function calculate(amount) {
                        amount = parseFloat(amount);
                        var percent = $('.calc-plan5:checked').data('percent');
                        var period = $('.calc-plan5:checked').data('period');
            
                        var daily = amount/100*percent/24;
                        var net = daily*period;
                        var total = amount/100*percent*30;
                        net = net.toFixed(2);
                        daily = daily.toFixed(2);
                        total = total.toFixed(2);
                        if(!isNaN(amount)) {
                            $('#calc-net5').text(net);
                            $('#calc-total5').text(total);
                            $('#calc-daily5').text(daily);
                        }
                    }
            
                    function increaseDecrease(item,min,max) {
                        var amount_field = $('#amount-val5');
                        var amount = parseFloat(amount_field.val());
            
                        if(item.attr('id')=='calc-plus'){
                            if(amount==max){
                                amount=max;
                                amount_field.val(amount);
                            }else{
                                amount = amount+1;
                            }
                        }else{
                            if(amount==min){
                                amount=min;
                                amount_field.val(amount);
                            }else{
                                amount = amount-1;
                            }
                        }
            
                        amount_field.val(amount);
                        calcAmount.slider("value", amount);
                        calculate(amount);
            
                    }
            
                    var timeoutCnt = 0;
                    $('.calc-amount__btn5').on('mousedown', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        timeoutCnt = setInterval(function (){
                            increaseDecrease(item,min,max);
                        }, 70);
                    }).on('mouseup mouseleave', function() {
                        clearInterval(timeoutCnt);
                    });
            
                    $('.calc-amount__btn5').bind('touchstart', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        increaseDecrease(item,min,max);
                    })
            
                    $('.calc-plan5').change(function () {
                        var cur_plan = $(this);
                        let min = cur_plan.data('min');
                        let max = cur_plan.data('max');
                        let period = cur_plan.data('period');
                        let percent = cur_plan.data('percent');
            
                        $('#amount-val5').val(min);
            
                        var amount = min;
            
                        calcAmount.slider( "option", "min", min );
                        calcAmount.slider( "option", "max", max );
                        calcAmount.slider("value", amount);
                        initRange(min,max);
                        $('#range-min5').text(min);
                        $('#range-max5').text(max);
                        calculate(amount);
                    })
                }

                
        /*========================== cal 2==============================*/
        
                if($("#amount2").length !== 0){
                    let calcAmount = $( "#amount2" );
                    function initRange(min,max){
                        if(!min && !max){
                            var min = 20;
                            var max = 2000;
                        }
                        calcAmount.slider({
                            range: 'min',
                            min: min,
                            max: max,
                            step: 1,
                            slide: function(event, ui){
                                $('#amount-val2').val(ui.value);
                                amount = ui.value;
                                calculate(amount);
                            }
                        });
                    }
            
                    initRange();
            
                    function getRange(){
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        {literal}
                        return {min: min,max: max};
            
                    }
            
            
                    $('#amount-val1').on('change keyup',function () {
                        var amount = parseFloat($(this).val());
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        if(amount<min){
                            amount=min;
                        }else if(amount>max){
                            amount=max;
                            $(this).val(amount);
                        }
                        calcAmount.slider("value", amount);
                        calculate(amount);
                    });
            
                    function calculate(amount) {
                        amount = parseFloat(amount);
                        var percent = $('.calc-plan2:checked').data('percent');
                        var period = $('.calc-plan2:checked').data('period');
            
                        var daily = amount/100*percent/24;
                        var net = daily*period;
                        var total = amount/100*percent*30;
                        net = net.toFixed(2);
                        daily = daily.toFixed(2);
                        total = total.toFixed(2);
                        if(!isNaN(amount)) {
                            $('#calc-net2').text(net);
                            $('#calc-total2').text(total);
                            $('#calc-daily2').text(daily);
                        }
                    }
            
                    function increaseDecrease(item,min,max) {
                        var amount_field = $('#amount-val2');
                        var amount = parseFloat(amount_field.val());
            
                        if(item.attr('id')=='calc-plus'){
                            if(amount==max){
                                amount=max;
                                amount_field.val(amount);
                            }else{
                                amount = amount+1;
                            }
                        }else{
                            if(amount==min){
                                amount=min;
                                amount_field.val(amount);
                            }else{
                                amount = amount-1;
                            }
                        }
            
                        amount_field.val(amount);
                        calcAmount.slider("value", amount);
                        calculate(amount);
            
                    }
            
                    var timeoutCnt = 0;
                    $('.calc-amount__btn2').on('mousedown', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        timeoutCnt = setInterval(function (){
                            increaseDecrease(item,min,max);
                        }, 70);
                    }).on('mouseup mouseleave', function() {
                        clearInterval(timeoutCnt);
                    });
            
                    $('.calc-amount__btn2').bind('touchstart', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        increaseDecrease(item,min,max);
                    })
            
                    $('.calc-plan2').change(function () {
                        var cur_plan = $(this);
                        let min = cur_plan.data('min');
                        let max = cur_plan.data('max');
                        let period = cur_plan.data('period');
                        let percent = cur_plan.data('percent');
            
                        $('#amount-val2').val(min);
            
                        var amount = min;
            
                        calcAmount.slider( "option", "min", min );
                        calcAmount.slider( "option", "max", max );
                        calcAmount.slider("value", amount);
                        initRange(min,max);
                        $('#range-min2').text(min);
                        $('#range-max2').text(max);
                        calculate(amount);
                    })
                }

                
        /*========================== cal 2==============================*/
        
        

        /*========================== cal 3==============================*/
            
                if($("#amount3").length !== 0){
                    let calcAmount = $( "#amount3" );
                    function initRange(min,max){
                        if(!min && !max){
                            var min = 30;
                            var max = 3000;
                        }
                        calcAmount.slider({
                            range: 'min',
                            min: min,
                            max: max,
                            step: 1,
                            slide: function(event, ui){
                                $('#amount-val3').val(ui.value);
                                amount = ui.value;
                                calculate(amount);
                            }
                        });
                    }
            
                    initRange();
            
                    function getRange(){
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        {literal}
                        return {min: min,max: max};
            
                    }
            
            
                    $('#amount-val3').on('change keyup',function () {
                        var amount = parseFloat($(this).val());
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        if(amount<min){
                            amount=min;
                        }else if(amount>max){
                            amount=max;
                            $(this).val(amount);
                        }
                        calcAmount.slider("value", amount);
                        calculate(amount);
                    });
            
                    function calculate(amount) {
                        amount = parseFloat(amount);
                        var percent = $('.calc-plan3:checked').data('percent');
                        var period = $('.calc-plan3:checked').data('period');
            
                        var daily = amount/100*percent/24;
                        var net = daily*period;
                        var total = amount/100*percent*30;
                        net = net.toFixed(2);
                        daily = daily.toFixed(2);
                        total = total.toFixed(2);
                        if(!isNaN(amount)) {
                            $('#calc-net3').text(net);
                            $('#calc-total3').text(total);
                            $('#calc-daily3').text(daily);
                        }
                    }
            
                    function increaseDecrease(item,min,max) {
                        var amount_field = $('#amount-val3');
                        var amount = parseFloat(amount_field.val());
            
                        if(item.attr('id')=='calc-plus'){
                            if(amount==max){
                                amount=max;
                                amount_field.val(amount);
                            }else{
                                amount = amount+1;
                            }
                        }else{
                            if(amount==min){
                                amount=min;
                                amount_field.val(amount);
                            }else{
                                amount = amount-1;
                            }
                        }
            
                        amount_field.val(amount);
                        calcAmount.slider("value", amount);
                        calculate(amount);
            
                    }
            
                    var timeoutCnt = 0;
                    $('.calc-amount__btn3').on('mousedown', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        timeoutCnt = setInterval(function (){
                            increaseDecrease(item,min,max);
                        }, 70);
                    }).on('mouseup mouseleave', function() {
                        clearInterval(timeoutCnt);
                    });
            
                    $('.calc-amount__btn3').bind('touchstart', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        increaseDecrease(item,min,max);
                    })
            
                    $('.calc-plan3').change(function () {
                        var cur_plan = $(this);
                        let min = cur_plan.data('min');
                        let max = cur_plan.data('max');
                        let period = cur_plan.data('period');
                        let percent = cur_plan.data('percent');
            
                        $('#amount-val3').val(min);
            
                        var amount = min;
            
                        calcAmount.slider( "option", "min", min );
                        calcAmount.slider( "option", "max", max );
                        calcAmount.slider("value", amount);
                        initRange(min,max);
                        $('#range-min3').text(min);
                        $('#range-max3').text(max);
                        calculate(amount);
                    })
                }


        /*========================== cal 4==============================*/
            
                if($("#amount4").length !== 0){
                    let calcAmount = $( "#amount4" );
                    function initRange(min,max){
                        if(!min && !max){
                            var min = 40;
                            var max = 4000;
                        }
                        calcAmount.slider({
                            range: 'min',
                            min: min,
                            max: max,
                            step: 1,
                            slide: function(event, ui){
                                $('#amount-val4').val(ui.value);
                                amount = ui.value;
                                calculate(amount);
                            }
                        });
                    }
            
                    initRange();
            
                    function getRange(){
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        {literal}
                        return {min: min,max: max};
            
                    }
            
            
                    $('#amount-val4').on('change keyup',function () {
                        var amount = parseFloat($(this).val());
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        if(amount<min){
                            amount=min;
                        }else if(amount>max){
                            amount=max;
                            $(this).val(amount);
                        }
                        calcAmount.slider("value", amount);
                        calculate(amount);
                    });
            
                    function calculate(amount) {
                        amount = parseFloat(amount);
                        var percent = $('.calc-plan4:checked').data('percent');
                        var period = $('.calc-plan4:checked').data('period');
            
                        var daily = amount/100*percent/24;
                        var net = daily*period;
                        var total = amount/100*percent*30;
                        net = net.toFixed(2);
                        daily = daily.toFixed(2);
                        total = total.toFixed(2);
                        if(!isNaN(amount)) {
                            $('#calc-net4').text(net);
                            $('#calc-total4').text(total);
                            $('#calc-daily4').text(daily);
                        }
                    }
            
                    function increaseDecrease(item,min,max) {
                        var amount_field = $('#amount-val4');
                        var amount = parseFloat(amount_field.val());
            
                        if(item.attr('id')=='calc-plus'){
                            if(amount==max){
                                amount=max;
                                amount_field.val(amount);
                            }else{
                                amount = amount+1;
                            }
                        }else{
                            if(amount==min){
                                amount=min;
                                amount_field.val(amount);
                            }else{
                                amount = amount-1;
                            }
                        }
            
                        amount_field.val(amount);
                        calcAmount.slider("value", amount);
                        calculate(amount);
            
                    }
            
                    var timeoutCnt = 0;
                    $('.calc-amount__btn4').on('mousedown', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        timeoutCnt = setInterval(function (){
                            increaseDecrease(item,min,max);
                        }, 70);
                    }).on('mouseup mouseleave', function() {
                        clearInterval(timeoutCnt);
                    });
            
                    $('.calc-amount__btn4').bind('touchstart', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        increaseDecrease(item,min,max);
                    })
            
                    $('.calc-plan4').change(function () {
                        var cur_plan = $(this);
                        let min = cur_plan.data('min');
                        let max = cur_plan.data('max');
                        let period = cur_plan.data('period');
                        let percent = cur_plan.data('percent');
            
                        $('#amount-val4').val(min);
            
                        var amount = min;
            
                        calcAmount.slider( "option", "min", min );
                        calcAmount.slider( "option", "max", max );
                        calcAmount.slider("value", amount);
                        initRange(min,max);
                        $('#range-min4').text(min);
                        $('#range-max4').text(max);
                        calculate(amount);
                    })
                }     
                
                
        /*========================== cal 5==============================*/
            
                if($("#amount5").length !== 0){
                    let calcAmount = $( "#amount5" );
                    function initRange(min,max){
                        if(!min && !max){
                            var min = 50;
                            var max = 5000;
                        }
                        calcAmount.slider({
                            range: 'min',
                            min: min,
                            max: max,
                            step: 1,
                            slide: function(event, ui){
                                $('#amount-val5').val(ui.value);
                                amount = ui.value;
                                calculate(amount);
                            }
                        });
                    }
            
                    initRange();
            
                    function getRange(){
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        {literal}
                        return {min: min,max: max};
            
                    }
            
            
                    $('#amount-val5').on('change keyup',function () {
                        var amount = parseFloat($(this).val());
                        var min = calcAmount.slider( "option", "min" );
                        var max = calcAmount.slider( "option", "max" );
                        if(amount<min){
                            amount=min;
                        }else if(amount>max){
                            amount=max;
                            $(this).val(amount);
                        }
                        calcAmount.slider("value", amount);
                        calculate(amount);
                    });
            
                    function calculate(amount) {
                        amount = parseFloat(amount);
                        var percent = $('.calc-plan5:checked').data('percent');
                        var period = $('.calc-plan5:checked').data('period');
            
                        var daily = amount/100*percent/24;
                        var net = daily*period;
                        var total = amount/100*percent*30;
                        net = net.toFixed(2);
                        daily = daily.toFixed(2);
                        total = total.toFixed(2);
                        if(!isNaN(amount)) {
                            $('#calc-net5').text(net);
                            $('#calc-total5').text(total);
                            $('#calc-daily5').text(daily);
                        }
                    }
            
                    function increaseDecrease(item,min,max) {
                        var amount_field = $('#amount-val5');
                        var amount = parseFloat(amount_field.val());
            
                        if(item.attr('id')=='calc-plus'){
                            if(amount==max){
                                amount=max;
                                amount_field.val(amount);
                            }else{
                                amount = amount+1;
                            }
                        }else{
                            if(amount==min){
                                amount=min;
                                amount_field.val(amount);
                            }else{
                                amount = amount-1;
                            }
                        }
            
                        amount_field.val(amount);
                        calcAmount.slider("value", amount);
                        calculate(amount);
            
                    }
            
                    var timeoutCnt = 0;
                    $('.calc-amount__btn5').on('mousedown', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        timeoutCnt = setInterval(function (){
                            increaseDecrease(item,min,max);
                        }, 70);
                    }).on('mouseup mouseleave', function() {
                        clearInterval(timeoutCnt);
                    });
            
                    $('.calc-amount__btn5').bind('touchstart', function() {
                        var item = $(this);
                        var range = getRange();
                        var min = range.min;
                        var max = range.max;
                        increaseDecrease(item,min,max);
                    })
            
                    $('.calc-plan5').change(function () {
                        var cur_plan = $(this);
                        let min = cur_plan.data('min');
                        let max = cur_plan.data('max');
                        let period = cur_plan.data('period');
                        let percent = cur_plan.data('percent');
            
                        $('#amount-val5').val(min);
            
                        var amount = min;
            
                        calcAmount.slider( "option", "min", min );
                        calcAmount.slider( "option", "max", max );
                        calcAmount.slider("value", amount);
                        initRange(min,max);
                        $('#range-min5').text(min);
                        $('#range-max5').text(max);
                        calculate(amount);
                    })
                }                
                
                
                

