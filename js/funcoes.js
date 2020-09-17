$(document).ready(function(){

        /** Abaixo, o código que realiza a soma */
        $("#bSomar").click(function(){

            var valor1 = parseInt($("#tAdicao1").val());
            var valor2 = parseInt($("#tAdicao2").val());
            var resultado = valor1 + valor2;
            $("#tAdicaoResultado").val(resultado);

        });

        /** Abaixo, o código que limpa a área de soma */
        $("#bAdicaoLimpar").click(function(){

            $("#tAdicao1").val("");
            $("#tAdicao2").val("");
            $("#tAdicaoResultado").val("");
            $("#tAdicao1").focus();

        });


        /** Abaixo, o código que realiza a subtração */
        $("#bSubtrair").click(function(){

            var valor1 = parseInt($("#tSubtracao1").val());
            var valor2 = parseInt($("#tSubtracao2").val());
            var resultado = valor1 - valor2;
            $("#tSubtracaoResultado").val(resultado);

        });

        /** Abaixo, o código que limpa a área de subtrair */
        $("#bSubtracaoLimpar").click(function(){

            $("#tSubtracao1").val("");
            $("#tSubtracao2").val("");
            $("#tSubtracaoResultado").val("");
            $("#tSubtracao1").focus();

        });

        
        /** Abaixo, o código que realiza a multiplicação */
        $("#bMultiplicar").click(function(){

            var valor1 = parseInt($("#tMultiplicacao1").val());
            var valor2 = parseInt($("#tMultiplicacao2").val());
            var resultado = valor1 * valor2;
            $("#tMultiplicacaoResultado").val(resultado);
    
        });
    
        /** Abaixo, o código que limpa a área de multiplicar */
        $("#bMultiplicacaoLimpar").click(function(){
    
            $("#tMultiplicacao1").val("");
            $("#tMultiplicacao2").val("");
            $("#tMultiplicacaoResultado").val("");
            $("#tMultiplicacao1").focus();
    
        });
    
    
        /** Abaixo, o código que realiza a divisão */
        $("#bDividir").click(function(){
    
            var valor1 = parseInt($("#tDividir1").val());
            var valor2 = parseInt($("#tDividir2").val());
            var resultado = valor1 / valor2;
            $("#tDivisaoResultado").val(resultado);
    
        });
    
        /** Abaixo, o código que limpa a área de dividir */
        $("#bDivisaoLimpar").click(function(){
    
            $("#tDividir1").val("");
            $("#tDividir2").val("");
            $("#tDivisaoResultado").val("");
            $("#tDividir1").focus();
    
        });

});
