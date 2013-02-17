$(document).ready(function(){
for(var board = 0; board < 4; board++){	
		for(var count = 0; count < 4; count++){
			$("#board").append("<div class='white'></div>");
			for(var count2 = 0; count2 < 1; count2++){
				$("#board").append("<div class='black'></div>");
			}
		}
	for(var board2 = 0; board2 < 1; board2++){
		for(var count3 = 0; count3 < 4; count3++){
			$("#board").append("<div class='black'></div>");
			for(var count4 = 0; count4 < 1; count4++){
				$("#board").append("<div class='white'></div>");
			}
		}
	}
}
$(".black:lt(12)").html("<div class='redPiece'>r</div>");
$(".black:gt(19)").html("<div class='whitePiece'>w</div>");

$(".black").on("click",function(e){
	$(".selectedZone").removeClass("selectedZone");
	$(this).addClass("selectedZone");
	if ($(".whitePiece").hasClass("selected") && $('.selectedZone  .redPiece:contains("r")')){
    $(".selectedZone .redPiece").removeClass("redPiece");
	};/*for jumping*/
	if ($(".redPiece").hasClass("selected") && $('.selectedZone  .whitePiece:contains("w")')){
    $(".selectedZone .whitePiece").removeClass("whitePiece");
	};/*for jumping*/
	if ($('.selectedZone  .whitePiece:contains("w")') != true && $('.selectedZone  .redPiece:contains("r")') != true){ /*no piece*/
		/*if($(".selected .whitePiece").hasClass("selected")){ /*find selected piece*/
			if($(".whitePiece").hasClass("selected")){ /*Is the white piece moving*/
				$(".black .selected").removeClass("whitePiece"); /*if moving remove it*/
				$(".selectedZone").html("<div class='whitePiece'>w</div>"); /*rebuild piece*/

		}
		if($(".redPiece").hasClass("selected")){
			$(".selected").removeClass("redPiece");
			$(".selectedZone").html("<div class='redPiece'>r</div>");
		}

	}
}).on("click",".whitePiece,.redPiece",function(e){
	e.stopPropagation();
	$(".selected").removeClass("selected");
	$(this).toggleClass("selected");
});
//$(".black").off("click",".whitePiece,.redPiece");



/*
Select checker
Select drop
If drop = other checker remove that checker and go again
Select checker drop again if needed
If checker is same place as your other check alert can't be done

Click on checker 
click on dropzone
If zone contains Piece
	check piece for opponet
		if opponet 
			select again
			remove piece from current zone
			place in new zone
			remove opponet piece

If white piece selected && dropZone does not contain r or w 
	move piece to space
*/






/*$(function(){
$(".whitePiece").draggable({ snap: ".black" });
});
$(function(){
$(".redPiece").draggable({ snap: ".white" });
});*/
});
