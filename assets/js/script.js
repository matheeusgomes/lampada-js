function onOff(filename,
            ligadadesligada
        ) { //SETATTRIBUTE VAI ALTERAR A INFORMAÇÃO (EX. DEPENDENDO DO BOTAO QUE CLICAR VAI ALTERAR PARA ACESA OU APAGADA)
            document.querySelector('#lampada').setAttribute('src', filename);
            document.querySelector('#lampada').setAttribute('estado', ligadadesligada)
        }

        function qualEstado() { //GETATTRIBUTE VAI PEGAR A INFORMAÇÃO (EX. PEGA A INFORMAÇÃO DO ATRIBUTO ESTADO)
            let ligadaoudesligada = document.querySelector('#lampada').getAttribute('estado');

            alert('A lâmpada está ' + ligadaoudesligada)
        }
