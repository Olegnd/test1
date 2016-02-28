var  min = [ 7, 8, 9, 5, 1 ];
var    b = 0;
var    a = min [ 0 ];
var    c = min.length - 1;
                    
while (b < c ) 
       { 
       if ( a <= min [ b + 1 ] ) {
       } 
       else                      { 
            a  = min [ b + 1 ]
       }

    console.log ( "b=" + b );
    console.log ( "a=" + a );
    b = b + 1;
    console.log ( "b is=" + b );
    
} 
     
           
// console.log (min.length);      
// console.log (a);
// console.log (min[i])