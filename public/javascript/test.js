$(document).ready(function() {

    $('form').submit(function (evt) {
       evt.preventDefault();

       var $calculation = $('#search');
       var $calculationButton = $('#submit');
      
       $calculation.prop("disabled",true)
       $calculationButton.attr("disabled",true).val('Calculation.....');

       var number = $calculation.val();

       var url = `/getData?number=${number}`;
       
       function calculationAnswer(data) {

        if( number%1 === 0 && number>0 ){
            $('#result').html(`Ok, it's ${data.total}`);
        }else{
            alert('請輸入正整數');
        };
        
         $calculation.prop("disabled",false)
         $calculationButton.attr("disabled",false).val('YES');
       }
       $.getJSON(url, calculationAnswer);
   
    }); // end click
   
}); // end ready