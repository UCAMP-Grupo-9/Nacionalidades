let arr= ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"];


function countNacionalities(){

    var arr = document.getElementById('input_text').value.split(', ');

    let mexicanos = 0;
    let peruanos = 0;
    let venezolanos = 0;
    let argentinos = 0;

    for(let i = 0; i <arr.length; i++) {
      switch(arr[i]){
        case 'argentino':
            argentinos++;
            break;
        case 'mexicano':
            mexicanos++;
            break;
        case 'peruano':
            peruanos++;
            break; 
        case 'venezolano':
            venezolanos++;
            break;   
      }  
    } 
    document.getElementById('argentinos').setAttribute("value", argentinos);
    document.getElementById('mexicanos').setAttribute("value", mexicanos);
    document.getElementById('peruanos').setAttribute("value", peruanos);
    document.getElementById('venezolanos').setAttribute("value", venezolanos);

}
