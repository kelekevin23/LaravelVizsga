class Ajax {
    constructor(token) {
        this.token = token;
    }
    
    selectAjax(api, myCallback) {
        const tomb = [];
        $.ajax({
            url: api,
            type: "GET",
            success: function (result) {
                result.forEach((element) => {
                    tomb.push(element);
                });
                myCallback(tomb);
            },
            error:function(data,textStatus,errorThrown){
                console.log(data.responseJSON.message);
            },
        });
    }
    
}