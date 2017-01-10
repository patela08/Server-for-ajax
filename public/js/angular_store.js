		$(document).ready(function(){
			getData();
			$("#formDiv").on("click","#adBtn",function(e){
				e.preventDefault();
				if ($("#input2").val() && $("#input3").val() && $("#input4").val()) {
					var promise1  =  $.ajax({
						url:"/products",
						type: "POST",
						data: {
							iName:$("#input2").val(),
							iDesc:$("#input3").val(),
							iPrc:$("#input4").val()
						},
						async:false,
						// success:
						//     function(response) {
								
						// 		myFunction([response]);
						// 		return alert("Your Product has been added successfully");
						// 	}
					}).done(function (response){
						myFunction([response]);
					 		return alert("Your Product has been added successfully");
					});
					$(".input-sm").val('');
				}
				else
				 	alert("Please fill the form to add Product");
			});
			function getData(){
				var promise2 =  $.ajax({
					url: "/products",
					type:"GET",
					async:false,
					success:
						function (argument) {
							return myFunction(argument);
						}
				});
				
			}

			$("#addBlock").on('click',"#rmv",function () {
				var ID = $(this).closest("div").parent().attr('id');
				$.ajax({
					url:"/products",
					context:ID,
					dataType:"json",
					success:
						function () {
							$.ajax({
							    url: "/products/"+this,
							    type: 'DELETE',
							    async:false,
							    success: 
							    	alert("Product has been successfully removed")
							    	
							});
						}
				});
				$(this).closest("div").parent().remove();	
			});	
			function myFunction(arr) {	
				var temp = Handlebars.compile( $("#templt").html() );
				console.log(temp);
				return $("#addBlock").append(temp(arr));
			};
		});