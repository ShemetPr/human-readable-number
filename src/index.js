module.exports = function toReadable (number) {
    number = +number;
    var a = ['','one','two','three','four',
'five','six','seven','eight','nine']; 
var b =
['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
'seventeen','eighteen','nineteen'];
    var c= ['','','twenty','thirty','forty','fifty',
'sixty','seventy','eighty','ninety']; 
    var d = ['hundred'];
    if (number < 10) 
        return a[number]
        else if (number >= 10 && number < 20)
            return b[0 | number - 10]
        
        else if (number > 20 && number < 100)
            return c[0 | number / 10 - number%10] + ' ' + a[0 | number%10]
        
        else if ( number >= 20 && number <= 90 && number%10 === 0) 
            return c[0 | number / 10]
        
        else if ( number >= 110 && number < 120)     
            return  a[0 | num % 100] + ' ' + d[0] + ' ' + b[0 | number - 110] 
        
        else if (number === 100)
            return a[1] + ' '+ d[0]
        
        else if ( number % 100 === 0)
            return a[0 | (Math.floor(number % 100))] + ' ' + d[0];
        
        else if (number > 99)
            return a[0 | (Math.floor(number % 100))] + ' ' + d[0] + ' ' + c[0 | (number % 100)] + ' ' + a[0 | (Math.floor(number / 100))];
        
        }
        