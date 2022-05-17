$(function () {

    const token = $('meta[name="csrf-token"]').attr("content");
    let kategoriaId = 1;
    const ajaxhivas = new Ajax(token);
    //ajaxhivas.selectAjax("/tesztek", adatfelvesz);
    ajaxhivas.selectAjax("/tesztek/kategoria", adatFelvesz);

    ajaxhivas.selectAjax("/kategoria", selectFeltolt);
    
    $("#kateg").change(function() {
        kategoriaId = $(this).children(":selected").attr("id");
        $(".tarolo").empty();
        ajaxhivas.selectAjax("/tesztek/kategoria", adatFelvesz);
    });
    

    $(".ujra").on("click", () =>{
        $(".tarolo").empty();
        ajaxhivas.selectAjax("/tesztek/kategoria", adatFelvesz);
    });
    function adatFelvesz(adatok) {
        const szuloElem = $(".tarolo");
        const sablonElem = $(".masolat");
        adatok.forEach((element, index) => {
            console.log()
            if (element.kategoria.id === parseInt(kategoriaId)){
                let ujelem = sablonElem.clone().appendTo(szuloElem);
                const teszt = new TesztKerdesek(ujelem, element);
            }
        });

        //sablonElem.remove();
    }
    function selectFeltolt(adatok) {
        adatok.forEach((element, index) => {
            $("#kateg").append("<option id="+element.id+">"+element.kategorianev+"</option>")
        });
    }

   

})