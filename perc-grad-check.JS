// One paper mark (100)
//Eng : You can keep it as you wish[Marks]
//Urdu : Ap apni marzi ka motabiq bhi rakh sakta ha[Marks]

var Studentname = +prompt ('Enter Studentname')
var a = +prompt ('Enter English Mark')
var b = +prompt ('Enter Math Mark')
var c = +prompt ('Enter Computer Mark')
var d = +prompt ('Enter Chemistry Mark')
var e = +prompt ('Enter Physics Mark')

var Total = (a+b+c+d+e)
document.write('|Total = 500 / ')
document.write(Total)


var perc = (Total/500)*100
document.write('|Percentage = ')
document.write(perc)

if(perc >= 85){
document.write('|Grade A1|')
}
else if(perc >= 75){
document.write('|Grade A|')
}
else if(perc >= 65){
document.write('|Grade B|')
}
else if(perc >= 55){
document.write('|Grade C|')
}
else if(perc >= 45){
document.write('|Grade D|')
}
else{
document.write('|Fail|')
}