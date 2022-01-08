module.exports = function toReadable (number) {
    
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
            return b[number - 10]
        
        else if (number > 20 && number < 100)
            return c[number[0]] + ' ' + a[number[2]]
        
        else if ( number >= 20 && number <= 90 && number%10 === 0) 
            return c[(number / 10)]
        
        else if ( number >= 110 && number < 120)     
            return  a[(num % 100)] + ' ' + d[0] + ' ' + b[(number - 110)] 
        
        else if (number === 100)
            return a[1] + ' '+ d[0]
        
        else if ( number % 100 === 0)
            return a[(Math.floor(number % 100))] + ' ' + d[0];
        
        else if (number > 99)
            return a[(Math.floor(number % 100))] + ' ' + d[0] + ' ' + c[(number % 100)] + ' ' + a[(Math.floor(number / 100))];
        
        }
        
        
    


