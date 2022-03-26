let arr= ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"];


function countNacionalities(){

    var arr = document.getElementById('input_text').value.split(',');

    let mexicanos = 0;
    let peruanos = 0;
    let venezolanos = 0;
    let argentinos = 0;

    for(let i = 0; i <arr.length; i++) {
      switch(true){
        case arr[i].includes('argentino'):
            argentinos++;
            break;
        case arr[i].includes('mexicano'):
            mexicanos++;
            break;
        case arr[i].includes('peruano'):
            peruanos++;
            break; 
        case arr[i].includes('venezolano'):
            venezolanos++;
            break;   
      }  
    } 
    document.getElementById('argentinos').setAttribute("value", argentinos);
    document.getElementById('mexicanos').setAttribute("value", mexicanos);
    document.getElementById('peruanos').setAttribute("value", peruanos);
    document.getElementById('venezolanos').setAttribute("value", venezolanos);

}
