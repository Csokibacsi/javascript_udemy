
var totalRows = 8;
var cellsInRow = 8;

var pozicio = [];
var oszlopok = ["A","B","C","D","E","F","G","H"]; 


    function drawTable() {
        
        var div1 = document.getElementById('div1'); // get the reference for the body
        var tbl = document.createElement("table");  // creates a <table> element
		
		//var oszlopok = ["A","B","C","D","E","F","G","H"]; 
		
        // creating rows
        for (var r = totalRows-1; r >= 0; r--) {
            var row = document.createElement("tr");
			//row.id = sorok[r];
			if(r%2 == 0){
				// create cells in row
				for (var c = 0; c < cellsInRow; c++) {
                var cell = document.createElement("td");
				cell.id = oszlopok[c] + (r+1); //azért c+1, mert 0-ról indul a ciklus, de amezőt nem 0-nak nevezem
								
				if(c%2 == 1){
					cell.className="fekete";
				}
				
				row.appendChild(cell);
				}   
			} else {
				// create cells in row
				for (var c = 0; c < cellsInRow; c++) {
                var cell = document.createElement("td");
				cell.id = oszlopok[c] + (r+1); //azért c+1, mert 0-ról indul a ciklus, de amezőt nem 0-nak nevezem
				if(c%2 == 0){
					cell.className="fekete";
				}
				
				row.appendChild(cell);
				}   
			
			}
			
			tbl.appendChild(row); // add the row to the end of the table body
		}
		div1.appendChild(tbl); // appends <table> into <div1>
	}

	window.onload=drawTable;


