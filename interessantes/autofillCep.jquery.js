(function ( $ ) {
 
    $.fn.autofillCep = function( options ) {
 
        var settings = $.extend({
            CEP 		: '#cep',
			logradouro 	: '#logradouro',
			bairro 		: '#bairro',
			uf 			: '#uf',
			localidade 	: '#localidade',
			divID		: this[0].id
        }, options );

        $(settings.CEP).blur(function(){
        	if (settings.CEP != "") {
        		var cep = $(this).val().split('.').join('');
        		var validacep = /^[0-9]{8}$/;

        		if(validacep.test(cep)) {
        			$.getJSON('http://viacep.com.br/ws/'+cep+'/json/',function(localJson){
        				//console.log(localJson);

        				if (!("erro" in localJson)) {
        					$(settings.logradouro).val(localJson.logradouro);
        					$(settings.bairro).val(localJson.bairro);
        					$(settings.uf).val(localJson.uf);
        					$(settings.localidade).val(localJson.localidade);
        				} else {
        					alert("CEP não encontrado.");
        				}
        			});  
        		}
			}
     	
        });
    };
}( jQuery ));

/*
// Exemplo de uso
$('{IF do grupo}').autofillCep({
	CEP 		: 'class ID do CEP',
	logradouro 	: 'class ID do Logradouro',
	bairro 		: 'class ID do Bairro',
	uf 			: 'class ID do UF',
	localidade 	: 'class ID da Localidade',
});

*/
