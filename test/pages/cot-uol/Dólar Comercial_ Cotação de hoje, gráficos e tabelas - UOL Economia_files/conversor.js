var Lib=Lib||{};Lib.ModConversor=window.Lib.ModConversor||{};Lib.ModConversor.moedas_name=new Array("Brasil - Real","Estados Unidos - Dólar Americano","Zona do euro - Euro","África do Sul - Rand","Albânia - Lek","Alemanha - Euro","Angola - Kwanza","Arábia Saudita - Rial saudita","Argélia - Dinar","Argentina - Peso","Austrália - Dólar australiano","Áustria - Euro","Bangladesh - Teca","Belarus - Rublo bielo-russo","Bélgica - Euro","Bolívia - Boliviano","Brasil - Real","Bulgária - Lev","Canadá - Dólar canadense","Cazaquistão - Tenge","Chile - Peso","China - Yuan","Chipre - Euro","Cingapura - Dólar de Cingapura","Colômbia - Peso colombiano","Coréia do Sul - Won sul-coreano","Croácia - Kuna","Dinamarca - Coroa dinamarquesa","Egito - Libra egípcia","Emirados Árabes Unidos - Dirham","Eslováquia - Euro","Eslovênia - Euro","Espanha - Euro","Estados Unidos - Dólar Americano","Estônia - Euro","Filipinas - Peso filipino","Finlândia - Euro","França - Euro","Grécia - Euro","Holanda - Euro","Hong Kong - Dólar de Hong Kong","Hungria - Forinte","Índia - Rúpia indiana","Indonésia - Rúpia indonésia","Irã - Rial iraniano","Iraque - Dinar","Irlanda - Euro","Islândia - Coroa islandesa","Israel - Shekel","Itália - Euro","Japão - Iene","Jordânia - Dinar jordaniano","Kuait - Dinar kuaitiano","Laos - Kip laosiano","Letônia - Euro","Líbano - Libra libanesa","Líbia - Dinar líbio","Lituânia - Litas","Luxemburgo - Euro","Malásia - Ringgit","Malta - Euro","Marrocos - Dirham marroquino","México - Peso novo mexicano","Moçambique - Metical","Moldova - Leu","Mônaco - Euro","Namíbia - Dólar namibiano","Noruega - Coroa norueguesa","Nova Zelândia - Dólar da Nova Zelândia","Panamá - Balboa","Paquistão - Rúpia paquistanesa","Paraguai - Guarani","Peru - Novo sol","Polônia - Zloty","Portugal - Euro","Qatar - Rial de Qatar","Quênia - Xelim queniano","Reino Unido - Libra esterlina","República Tcheca - Coroa tcheca","Romênia - Novo leu romeno","Rússia - Rublo","Síria - Libra síria","Sri Lanka - Rúpia cingalesa","Suécia - Coroa sueca","Suíça - Franco suíço","Tailândia - Baht","Taiwan - Dólar taiwanês","Tunísia - Dinar tunisiano","Turquia - Lira","Ucrânia - Hrivna","Zona do euro - Euro","Uruguai - Peso Uruguaio","Venezuela - Bolívar","Zimbábue - Dólar do Zimbábue");Lib.ModConversor.init=function(){$.each(Lib.ModConversor.moedas_name,function(index,value){$("#de").append('<option value="'+index+'">'+value+"</option>");$("#para").append('<option value="'+index+'">'+value+"</option>");});var btnConvert=$("#converter");btnConvert.click(function(){var de,para,valor,resultado;de=document.getElementById("de");para=document.getElementById("para");valor=document.getElementById("valor");if(!de.value){alert('Escolha uma moeda no campo "DE" para realizar a conversão.');return false;}else{if(!para.value){alert('Escolha uma moeda no campo "PARA" a fim de realizar a conversão.');return false;}}if(!valor.value){alert("Digite um valor para realizar a conversão.");return false;}else{if(de.value==para.value){alert("Escolher moedas diferentes para realizar a conversão.");return false;}}var de_value=parseFloat($economia_moedas_value[de.value].replace(/,/,"."));var para_value=parseFloat($economia_moedas_value[para.value].replace(/,/,"."));var valor_value=parseFloat(valor.value.replace(/,/,"."));var de_dolar=de_value*valor_value;var resultado=de_dolar/para_value;var decimal=Math.round(resultado*Math.pow(10,3))/Math.pow(10,3);$("#resultado").show();$("#resultado span").html(decimal.toFixed(2).toString().replace(".",","));});$("#calculadora form").on("submit",function(e){btnConvert.trigger("click");e.preventDefault();});};