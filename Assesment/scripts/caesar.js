(function(){

let str = document.getElementById("user-input")
let amount = document.getElementById("user-number")
let out = document.getElementById("get-input")
function caesar(str, amount)
	{
		if (amount < 0)
			return caesarShift(str, amount + 26);

		let output = '';

		for (let i = 0; i < str.length; i ++)
		{
			let char = str[i];

			if (char.match(/[a-z]/i))
			{
				let code = str.charCodeAt(i);

				//Changes Uppercase letters
				if ((code >= 65) && (code <=90))
				{
					char = String.fromCharCode(((code - 65 + amount) % 26) + 65)
				}
				//Changes Lowercase letters
				else if ((code >=97) && (code <=122))
				{	
					char = String.fromCharCode(((code - 97 + amount) % 26) + 97)
				}
			}
			output += char;
		}
		return output;
	}

out.addEventListener("submit",caesar(str, amount));


}());
