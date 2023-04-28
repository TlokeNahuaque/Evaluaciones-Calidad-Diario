const formulario=document.getElementById('formulario');
const registro=document.getElementById('formulario');
const exito=document.getElementById('formulario');

formulario.addEventListener('submit', async(e)=>{
    e.preventDefault();

    const respuesta = await fetch('https://sheet.best/api/sheets/ad909caf-705a-48fc-acad-230af82e2270',{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({

            "Fecha": formulario.fecha.value,
            "BGR": formulario.BGR.value,
            "LMMR": formulario.LMMR.value,
            "TSA": formulario.TSA.value,
            "GGME": formulario.GGME.value,
            "MLJ": formulario.MLJ.value,
            "SCN": formulario.SCN.value,
            "VCAR": formulario.VCAR.value,
            "JSJ": formulario.JSJ.value,
            "LGMS": formulario.LGMS.value,
            "MEDJ": formulario.MEDJ.value,
            "MCLM": formulario.MCLM.value,
            "MGCO": formulario.MGCO.value,
            "ORDV": formulario.ORDV.value,
            "QGI": formulario.QGI.value,
            "QRMM": formulario.QRMM.value,
            "SGLG": formulario.SGLG.value,
            "CNI": formulario.CNI.value,
            "RFMA": formulario.RFMA.value,
            "VEMG": formulario.VEMG.value
           
        })
    });

    console.log('respuesta');

    registro.classList.remove('activo');
    exito.classList.add('activo');
    
});