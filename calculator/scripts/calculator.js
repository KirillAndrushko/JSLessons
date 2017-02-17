var firstDidit = 0.0;
var operation = "";
var secondDigit = 0.0;
var result = 0.0;

var mrc = 0.0;

var strignNum = "0";

function inputNumbers(number) 
{
	var input = document.getElementById("inputField");

	if(result!=0.0)
	{
		if(number == ".")
		{
			strignNum = result;
		}
		else
		{
			input.innerHTML = "";		
		}
		result = 0;
	}   
   
	strignNum += number.toString(); 

	if(input.innerHTML == "0" && number == "0")
	{
		input.innerHTML = "0";
	} 
	else if(input.innerHTML == "0" && number!=".")
	{
		input.innerHTML = "";
		input.innerHTML += number.toString();
	}
	else 
	{
		input.innerHTML += number.toString();
	}
}

function inputSymbol(symbol)
{	
	if(result!=0.0)
	{
		operation = symbol;
		firstDidit = result;
		result = 0;
	}

	var input = document.getElementById("inputField");

	input.innerHTML += symbol;
	
	if(firstDidit == 0 && operation == "")
	{		
		firstDidit = parseFloat(strignNum);
		strignNum = "0";		
		operation = symbol;	
	}
	else
	{
		secondDigit = parseFloat(strignNum);	
		firstDidit = operations();				
		input.innerHTML = firstDidit;
		input.innerHTML += symbol;
		strignNum = "0";
		operation = symbol;
	}
}

function calculate()
{
	var input = document.getElementById("inputField");

	if(firstDidit!=0 &&secondDigit!=0 && operation!="" )
	{
		input.innerHTML += strignNum;
	
		secondDigit = parseFloat(strignNum);	
		result = operations();	
		input.innerHTML = result;

		strignNum = "0";
		firstDidit = 0;
		secondDigit = 0;
		operation = "";
	}
}


function operations()
{
	var input = document.getElementById("inputField");

	if(operation == "+")
	{
		return  firstDidit + secondDigit;
	}	
	else if(operation == "-")
	{
		return firstDidit - secondDigit;
	}	
	else if(operation == "*")
	{
		return firstDidit * secondDigit;
	}	
	else if(operation == "/")
	{
		return firstDidit / secondDigit;
	}	
}

function memAddClear()
{
	var input = document.getElementById("inputField");

	if(input.innerHTML == "0")
	{
		input.innerHTML = "";
		
	}
	input.innerHTML += mrc;
	strignNum = mrc;
}

function memPositive()
{
	var input = document.getElementById("inputField");

	mrc = parseFloat(input.innerHTML);
}

function memNegative()
{
	var input = document.getElementById("inputField");

	mrc = parseFloat(input.innerHTML);
	mrc *= -1;
}

function clearAll()
{
	var input = document.getElementById("inputField");
	input.innerHTML = 0;

	strignNum = "0";
	firstDidit = 0;
	secondDigit = 0;
	operation = "";
	result = 0;
}