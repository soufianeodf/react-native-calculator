// insert a character after every n characters
function chunk(str, n) {
    var ret = [];
    var i;
    var len;

    for(i = 0, len = str.length; i < len; i += n) {
       ret.push(str.substr(i, n))
    }

    return ret;
}

// separate a floiting number, ex: "123.45" becomes ["123", ".45"] 
function splitFloitingNumbers(str){

	var ret = [];
	if(str.includes('.')){
		ret = str.split('.');
		ret[1] = "." + ret[1];
	}else{
		ret[0] = str;
	}

	return ret;
}

// return a number format, ex: "123456.789" becomes "123,456.789"
export function numberFormat(str,n) {

	var ret = [];
	ret = splitFloitingNumbers(str);

	ret[0] = ret[0].split("").reverse().join("");

	ret[0] = chunk(ret[0], n).join(',');

	ret[0] = ret[0].split("").reverse().join("");

	return ret.join("");
}

