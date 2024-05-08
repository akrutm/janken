$(function () {


    $('#gu_btn').on('click', function () {

        $('#gu_btn').css('background-color', '#0066CC');

        var userGu = 0;
        var pc = Math.floor(Math.random() * 3);
       
        

        if (pc === 0) {
            $("#pc_hands").html('✊');
            $("#judgment").html('あいこ');
        } else if (pc === 1) {
            $("#pc_hands").html('&#x270c;');
            $("#judgment").html('あなたの勝ち');
        } else if (pc === 2) {
            $("#pc_hands").html('🖐');
            $("#judgment").html('あなたの負け');
        }

        $('#cho_btn').on('click', function () {
            $('#gu_btn').css('background-color', '');
        })

        $('#par_btn').on('click', function () {
            $('#gu_btn').css('background-color', '');
        })

        $('#result').show();

        // 結果にスクロール
        var position = $('#result').offset().top;

        $("html,body").animate({
            scrollTop : position
        }, {
            queue : false
        });
     


    })



    $('#cho_btn').on('click', function () {

        $('#cho_btn').css('background-color', '#0066CC');
        var userCho = 1;
        var pc = Math.floor(Math.random() * 3);

        if (pc === 0) {
            $("#pc_hands").html('✊');
            $("#judgment").html('あなたの負け');
        } else if (pc === 1) {
            $("#pc_hands").html('&#x270c;');
            $("#judgment").html('あいこ');
        } else if (pc === 2) {
            $("#pc_hands").html('🖐');
            $("#judgment").html('あなたの勝ち');
        }

        $('#gu_btn').on('click', function () {
            $('#cho_btn').css('background-color', '');
        })

        $('#par_btn').on('click', function () {
            $('#cho_btn').css('background-color', '');
        })

        $('#result').show();

         // 結果にスクロール
         var position = $('#result').offset().top;

         $("html,body").animate({
             scrollTop : position
         }, {
             queue : false
         });

    })

    $('#par_btn').on('click', function () {

        $('#par_btn').css('background-color', '#0066CC');

        var userPar = 2;
        var pc = Math.floor(Math.random() * 3);

        if (pc === 0) {
            $("#pc_hands").html('✊');
            $("#judgment").html('あなたの勝ち');
        } else if (pc === 1) {
            $("#pc_hands").html('&#x270c;');
            $("#judgment").html('あなたの負け');
        } else if (pc === 2) {
            $("#pc_hands").html('🖐');
            $("#judgment").html('あいこ');
        }

        $('#gu_btn').on('click', function () {
            $('#par_btn').css('background-color', '');
        })

        $('#cho_btn').on('click', function () {
            $('#par_btn').css('background-color', '');
        })
        $('#result').show();

         // 結果にスクロール
         var position = $('#result').offset().top;

         $("html,body").animate({
             scrollTop : position
         }, {
             queue : false
         });

    })


})