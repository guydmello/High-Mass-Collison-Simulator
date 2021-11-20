function update() {
    // var n1 = parseFloat(document.getElementById('input1').value);
    // var n2 = parseFloat(document.getElementById('input2').value);
    
    var calc = document.getElementById('calculators').value;
    if(calc === 'Gravitational-Force-Calculator') {
        document.getElementById('title').innerText = 'Gravitational Force Calculator'
        
        document.getElementById('input1header').innerText = 'Mass 1 (m)';
        document.getElementById('input2header').innerText = 'Mass 2 (m)';
        document.getElementById('input3header').innerText = 'Distance (R)';
        document.getElementById('input4header').innerText = 'Gravitational force (F)';
        
        document.getElementById('input1header').visibility = 'visible';

        document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = '';
        document.getElementById('input4header').style.display = '';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'text';
        document.getElementById('input4').type = 'text';
        document.getElementById('input5').type = 'hidden';
    }
    if(calc === 'Force-Calculator') {
        document.getElementById('title').innerText = 'Force Calculater';

        document.getElementById('input1header').innerText = 'Mass (m)';
        document.getElementById('input2header').innerText = 'Acceleration (a)';
        document.getElementById('input3header').innerText = 'Force (F)';
        
        document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = '';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'text';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';
    }
}
function calc()
{
    var n1 = parseFloat(document.getElementById('input1').value);
    var n2 = parseFloat(document.getElementById('input2').value);
    
    var oper = document.getElementById('operators').value;
    
    if(oper === 'gravitational-force')
    {
        document.getElementById('result').value = n1+n2;
    }
    
    if(oper === '-')
    {
        document.getElementById('result').value = n1-n2;
    }
    
    if(oper === '/')
    {
        document.getElementById('result').value = n1/n2;
    }
    
    if(oper === 'X')
    {
        document.getElementById('result').value = n1*n2;
    }
}