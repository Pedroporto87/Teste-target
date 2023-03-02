const distribuidora = [
    {
        "estado": "São Paulo",
        "faturamento": "R$67.836,43"
    },
    {
        "estado": "Rio de Janeiro",
        "faturamento": "R$36.678,66"
    },
    {
        "estado": "Minas Gerais",
        "faturamento": "R$36.678,66"
    },
    {
        "estado": "Espirito Santo",
        "faturamento": "R$27.165,48"
    },
    {
        "estado": "Outros",
        "faturamento": "R$19.849,53"
    }
    
]
const faturamentoLimpo = distribuidora.map (e => {
    return {
        estado: e.estado,
        faturamento: parseFloat(e.faturamento.replace("R$", ''))
    };
});
//console.log(faturamentoLimpo)
var soma = faturamentoLimpo.map(e =>(e.faturamento)).reduce(function(acc, value){
	return acc + value
},0);
//console.log(soma)
var porcentagem = faturamentoLimpo.map(e =>{
    return {
        estado: e.estado,
        faturamento: ((e.faturamento/soma)*100).toFixed(2)
    }
})
console.log(porcentagem)




