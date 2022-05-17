class TesztKerdesek{
    constructor(elem, adat){
        this.elem = elem;
        this.adat = adat;

        this.kerdes = this.elem.children(".kerdes");
        this.v1 = this.elem.children(".v1");
        this.v2 = this.elem.children(".v2");
        this.v3 = this.elem.children(".v3");
        this.v4 = this.elem.children(".v4");

        this.kattinthato = true;
        this.valasz = "";
        this.melyik = "";
        this.termekBeallit(this.adat);

        this.v1.on("click", () => {
            this.kezelesV1();
        });

        this.v2.on("click", () => {
            this.kezelesV2();
        });

        this.v3.on("click", () => {
            this.kezelesV3();
        });

        this.v4.on("click", () => {
            this.kezelesV4();
        });
    
        $(".ellenorzes").on("click", () =>{

            if (this.valasz === this.adat.helyes){
                if (this.melyik === "v1"){
                    $(this.v1).css("background-color", "green")

                }else if (this.melyik === "v2"){
                    $(this.v2).css("background-color", "green")

                }else if (this.melyik === "v3"){
                    $(this.v3).css("background-color", "green")
                } else {
                    $(this.v4).css("background-color", "green")
                }

            } else {
                if (this.melyik === "v1"){
                    $(this.v1).css("background-color", "red")

                }else if (this.melyik === "v2"){
                    $(this.v2).css("background-color", "red")

                }else if (this.melyik === "v3"){
                    $(this.v3).css("background-color", "red")

                } else if (this.melyik === "v4"){
                    $(this.v4).css("background-color", "red")
                }
            }
        });
    }


    termekBeallit(adatok){
        this.kerdes.html(adatok.kerdes);
        $(this.kerdes).css("background-color", "brown")
        this.v1.html(adatok.v1);
        this.v2.html(adatok.v2);
        this.v3.html(adatok.v3);
        this.v4.html(adatok.v4);
    }
    kezelesV1(){
        if (this.kattinthato){
            this.valasz = this.adat.v1;
            this.melyik = "v1";
            $(this.v1).css("background-color", "lightblue")
        }
        this.kattinthato = false;
    }
    kezelesV2(){
        if (this.kattinthato){
            this.valasz = this.adat.v2;
            this.melyik = "v2";
            $(this.v2).css("background-color", "lightblue")

        }
        this.kattinthato = false;
    }
    kezelesV3(){
        if (this.kattinthato){
            this.valasz = this.adat.v3;

            this.melyik = "v3";
            $(this.v3).css("background-color", "lightblue")
        }
        this.kattinthato = false;
    }
    kezelesV4(){
        if (this.kattinthato){
            this.valasz = this.adat.v4;
            this.melyik = "v4";
            $(this.v4).css("background-color", "lightblue")

        }
        this.kattinthato = false;
    }
}