var t = 5
function numberOneTriangle(t){
    for(i=0;i<t;i++) {
		let line = ""
		for(j=0;j<=i;j++) {
			line += 1
		}
        line = line.trim();
        console.log(line);  
    }
}
numberOneTriangle(t)
    
