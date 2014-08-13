/* A */

/* B */
/* Go To the Top of Body With Animate */
var Body = {
	top : function() {
		$('html, body').animate({scrollTop:0}, 'slow');

		return true;
	}
};

/* C */
/* CheckBox checked */
var CheckBox = {
	checked : function(idcheckbox) {
		return document.getElementById(idcheckbox).checked;
	}
}

/* CNPJ Validate */
var CNPJ =
{
  validate : function(cnpj) {
		var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
		digitos_iguais = 1;
		if (cnpj.length < 14 && cnpj.length < 15)
			return false;
		for (i = 0; i < cnpj.length - 1; i++)
			if (cnpj.charAt(i) != cnpj.charAt(i + 1))
			{
				digitos_iguais = 0;
				break;
			}
		if (!digitos_iguais)
		{
			tamanho = cnpj.length - 2
			numeros = cnpj.substring(0,tamanho);
			digitos = cnpj.substring(tamanho);
			soma = 0;
			pos = tamanho - 7;
			for (i = tamanho; i >= 1; i--)
			{
				soma += numeros.charAt(tamanho - i) * pos--;
				if (pos < 2)
					pos = 9;
			}
			resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
			if (resultado != digitos.charAt(0))
				return false;

			tamanho = tamanho + 1;
			numeros = cnpj.substring(0,tamanho);
			soma = 0;
			pos = tamanho - 7;
			for (i = tamanho; i >= 1; i--)
			{
				soma += numeros.charAt(tamanho - i) * pos--;
				if (pos < 2)
					pos = 9;
			}
			resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

			if (resultado != digitos.charAt(1))
				return false;

			return true;
		}
		else return false;
	}
};

/* CPF Validate */
var CPF =
{
	validate : function(cpf) {
		var numeros, digitos, soma, i, resultado, digitos_iguais;
		digitos_iguais = 1;
		if (cpf.length < 11)
			return false;
		for (i = 0; i < cpf.length - 1; i++)
			if (cpf.charAt(i) != cpf.charAt(i + 1))
			{
				digitos_iguais = 0;
				break;
			}
		if (!digitos_iguais)
		{
			numeros = cpf.substring(0,9);
			digitos = cpf.substring(9);
			soma = 0;
			for (i = 10; i > 1; i--)
				soma += numeros.charAt(10 - i) * i;
			resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
			if (resultado != digitos.charAt(0))
				return false;
			numeros = cpf.substring(0,10);
			soma = 0;
			for (i = 11; i > 1; i--)
				soma += numeros.charAt(11 - i) * i;
			resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
			if (resultado != digitos.charAt(1))
				return false;
			return true;
		}
		else
			return false;
	}
};

/* D */
/* returns only the input digits */
var Dig =
{
	only : function(v) {
		return v.replace(/\D/g, '');
	}
};

/* returns Date format Br or Sql
 * and time now
 * */
var Data =
{
	nowBr : function() { /* using jquery ui */
		return $.datepicker.formatDate( 'dd/mm/yy', new Date() );
	},
	nowSql : function() { /* using jquery ui */
		return $.datepicker.formatDate( 'yy-mm-dd', new Date() );
	},
	today : function() { /* using javascript */
		var that = new Date();
	    return ((that.getDate() < 10)?"0":"") + that.getDate() +"/"+(((that.getMonth()+1) < 10)?"0":"") + (that.getMonth()+1) +"/"+ that.getFullYear()
	},
	timeNow : function() { /* using javascript */
		var that = new Date();
     	return ((that.getHours() < 10)?"0":"") + that.getHours() +":"+ ((that.getMinutes() < 10)?"0":"") + that.getMinutes() +":"+ ((that.getSeconds() < 10)?"0":"") + that.getSeconds();
	}
};

/* positions in specific div */
/* hide all div */
var Div = {
	go : function(id) {
		$('#'+id).slideToggle('slow', function() {
    			$('html, body').animate({scrollTop:$("#"+id).offset().top}, 'slow');
		});

		return true;
	},
	hideAll: function() {
		$('div[id^="div-"]').hide();
	}
};

/* E */

/* F */
/* Form clear */
var Form =
{
	clear : function(idform) {
		$('#'+idform).each(function() {
			this.reset();
		});
	}
};

/* G */
/* H */

/* I */
/* input readonly , enabledField */
var Input = {
	readOnly : function(id) {
		document.getElementById( id ).readOnly = true;
		document.getElementById( id ).style.backgroundColor = "#CCC";
		document.getElementById( id ).value = '';
	},
	enabledField : function(id) {
		document.getElementById( id ).readOnly = false;
		document.getElementById( id ).style.backgroundColor = "#FFF";
		document.getElementById( id ).value = '';
	}
};

/* J */
/* K */
/* L */

/* M */
/* mask for input fields */
var Mask =
{
	mascara : function(o,f) {
		v_obj = o
		v_fun = f
		setTimeout("Mask.execmascara()", 1)
	},
	execmascara : function() {
		v_obj.value=v_fun(v_obj.value)
	},
	mdata : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d{2})(\d)/,"$1/$2")
		v=v.replace(/(\d{2})(\d)/,"$1/$2")
		return v
	},
	mhora : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d{2})(\d)/,"$1:$2")
		return v
	},
	mtelefone : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/^(\d\d)(\d)/g,"($1) $2")
		v=v.replace(/(\d{4})(\d)/,"$1 - $2")
		return v
	},
	mcep : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d{2})(\d)/,"$1.$2")
		v=v.replace(/(\d{3})(\d)/,"$1-$2")
		return v
	},
	mcpf : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d{3})(\d)/,"$1.$2")
		v=v.replace(/(\d{3})(\d)/,"$1.$2")
		v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
		return v
	},
	mcnpj : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/^(\d{2})(\d)/,"$1.$2")
		v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
		v=v.replace(/\.(\d{3})(\d)/,".$1/$2")
		v=v.replace(/(\d{4})(\d)/,"$1-$2")
		return v
	},
	mnumeros : function(v) {
		return v.replace(/\D/g,"")
	},
	mvalor : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d)(\d{2})$/,"$1.$2")
		return v
	},
	mvalorbr : function(v) {
		v=v.replace(/\D/g,"")
		v=v.replace(/(\d)(\d{2})$/,"$1,$2")
		return v
	}
};

/* Menu Controll */
var Menu =
{
	hideAll: function() {
		$('div[id^="div-"]').hide();
	},
	show: function(id) {
		$('#div-'+id).show('slow');
	},
	init: function(id) {
		Menu.hideAll();
		Menu.show(id);
	},
	menuTitle: function(id, text) {
		$('#'+id).text(text);
	}
}

/* format a number in Brazil or US */
var Money =
{
	formatBr: function(num) {
	    num = num.toString().replace(/\$|\,/g,'');

	    if(isNaN(num))
	        num = "0";

	    sign = (num == (num = Math.abs(num)));
	    num = Math.floor(num*100+0.50000000001);
	    cents = num%100;
	    num = Math.floor(num/100).toString();

	    if(cents<10)
	        cents = "0" + cents;

	    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	        num = num.substring(0,num.length-(4*i+3))+'.'+ num.substring(num.length-(4*i+3));

	    return (((sign)?'':'-') + num + ',' + cents);
	},
	formatUs: function(num) {
		return num.replace(/\./g, "").replace(/,/, ".");
	}
}

/* N */
/* O */
/* P */
/* Q */

/* R */
/* return radio checked from form */
var Radio = {
	checked : function(field, form) {
		return $('input[name='+field+']:checked', '#'+form).val();
	}
};

/* S */
/* return a specific attribute, remove an option from select, remove all options from select */
var Select = {
	option_select_attr : function(idselect, attr) {
		return $('option:selected', $('#'+idselect)).attr( attr );
	},
	remove_selected_option : function(idselect) {
		$('#' + idselect + ' option:selected').each(function() {
			$(this).remove();
		});
	},
	remove_all_option : function(idselect) {
		$('#' + idselect + ' option').each(function() {
			$(this).remove();
		});
	}
};

/* set html Timeout */
var Timeout = {
	set_html : function(href, time) {
		window.setTimeout(function() { window.location.href = href; }, time);
	}
};

/* T */
/* Table CalculateUs, CalculateBr, */
var Table =
{
	calculateUs : function(idtable, posfield) {
		var vlr = 0;
		$("#"+idtable+" tbody tr > td:nth-child("+posfield+")").each(function(i, el) {
			var v = $( el ).find('input').val();

      if ( typeof v == 'undefined' ) {
        vlr += Number(el.innerHTML.replace(".", "").replace(",", "."));
      } else {
        vlr += Number(v.replace(".", "").replace(",", "."));
      }
		});

		return vlr;
	},
	calculateBr : function(idtable, posfield) {
		return Money.formatBr( Table.calculateUs( idtable, posfield ) );
	}
};

/* returns trim element */
var Trim = {
	run : function(str) {
		return str.replace(/^\s+|\s+$/g,"");
	}
};

/* U */
/* V */

/* validate field */
var Validate = {
	field : function(id, msg) {
		if ( $('#'+id).val() == 0 )
		{
			alert( msg );
			$('#'+id).focus();
			return false;
		}

		return true;
	}
};

/* X */

/* Z */
/* Zeros add left in input */
var Zeros = {
	add_left : function(str, max) {
		str = String( str );

		return ( str.length < max ) ? Zeros.add_left("0" + str, max) : str;
	}
};