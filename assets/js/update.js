/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *
 * 2. Using the bootstrap-selct plugin render dropdown on the page
 *
 * 3. Use the live search functionality to make the dropdown searchable
 *
 * 4. Add the user glyphicons next to each student in the list
 *
 * 6. Add a menu header to the dropdown
 *
 * 7. Customize further with anything you find intersting
 *
 * 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student
 *
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 10. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

 (function(){

   $(function(){

      let currentPlayer

     $("#updatePlayerForm").validate({

       errorClass: "text-danger",

       rules:  {

         firstName: {
           required: true,
           minlength: 2
         },

         lastName:  {
           required: true,
           minlength: 2
         },

         start_date:  {
           dateISO: true
         },

         gpa: {
           required: true,
           number: true
         }

       },

       messages: {

         firstName:  {
           required: "You must enter a first name"
         },

         lastName:  {
           required: "You must enter a last name"
         },

       }

     });

     $("#updatePlayerForm :input").prop("disabled", true);



     $('#id').on('change', function(){
        console.log($(this))
        console.log($(this).find("option:selected"))
        console.log($(this).find("option:selected").val());
        currentPlayer = $(this).find("option:selected").val();
        $.get("http://localhost:1337/player/"+currentPlayer, function(data){
            $.each(data, function(key, val){
              let el=$('[name="'+key+'"]');
              let type = el.attr('type');
              el.val(val);
            })
        })
        $("#updatePlayerForm :input").prop("disabled", false);
      })




   })

 })();
