const formulario=document.getElementById('formulario');
const registro=document.getElementById('formulario');
const exito=document.getElementById('formulario');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const respuesta = await fetch('https://sheetdb.io/api/v1/y613mmb67cdiy', {
        method:'POST',
        mode:'cors',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({

            "Fecha": formulario.fecha.value,
            "BGR_AP": formulario.BGR_AP.value,
            "BGR_AI": formulario.BGR_AI.value,
            "BGR_L": formulario.BGR_L.value,
            "LMMR_AP": formulario.LMMR_AP.value,
            "LMMR_AI": formulario.LMMR_AI.value,
            "LMMR_L": formulario.LMMR_L.value,
            "TSA_AP": formulario.TSA_AP.value,
            "TSA_AI": formulario.TSA_AI.value,
            "TSA_L": formulario.TSA_L.value,
            "CI_C": formulario.CI_C.value,
            "CI_S": formulario.CI_S.value,
            "CI_MP": formulario.CI_MP.value,
            "CI_W": formulario.CI_W.value,
            "GMME_C": formulario.GGME_C.value,
            "GGME_S": formulario.GGME_S.value,
            "GGME_MP": formulario.GGME_MP.value,
            "GGME_W": formulario.GGME_W.value,
            "MLJ_C": formulario.MLJ_C.value,
            "MLJ_S": formulario.MLJ_S.value,
            "MLJ_MP": formulario.MLJ_MP.value,
            "MLJ_W": formulario.MLJ_W.value,
            "SCN_C": formulario.SCN_C.value,
            "SCN_S": formulario.SCN_S.value,
            "SCN_MP": formulario.SCN_MP.value,
            "SCN_W": formulario.SCN_W.value,
            "VCAR_C": formulario.VCAR_C.value,
            "VCAR_S": formulario.VCAR_S.value,
            "VCAR_MP": formulario.VCAR_MP.value,
            "VCAR_W": formulario.VCAR_W.value,
            "JSJ_F": formulario.JSJ_F.value,
            "JSJ_L": formulario.JSJ_L.value,
            "LGMS_F": formulario.LGMS_F.value,
            "LGMS_L": formulario.LGMS_L.value,
            "MEDJ_F": formulario.MEDJ_F.value,
            "MEDJ_L": formulario.MEDJ_L.value,
            "MCLM_F": formulario.MCLM_F.value,
            "MCLM_L": formulario.MCLM_L.value,
            "MGCO_F": formulario.MGCO_F.value,
            "MGCO_L": formulario.MGCO_L.value,
            "ORDV_F": formulario.ORDV_F.value,
            "ORDV_L": formulario.ORDV_L.value,
            "QGI_F": formulario.QGI_F.value,
            "QGI_L": formulario.QGI_L.value,
            "QRMM_F": formulario.QRMM_F.value,
            "QRMM_L": formulario.QRMM_L.value,
            "RVLL_F": formulario.RVLL_F.value,
            "RVLL_L": formulario.RVLL_L.value,
            "SGLG_F": formulario.SGLG_F.value,
            "SGLG_L": formulario.SGLG_L.value,
            "CNI": formulario.CNI.value,
            "RFMA": formulario.RFMA.value,
            "VEMG": formulario.VEMG.value
           
        })
    });

    console.log('respuesta');
     
});
