const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (str) => new Promise((resolve) => rl.question(str, resolve));

async function main() {
    let continuar = true;

    while (continuar) {
        console.log("\n--- MENU DE EXERCÍCIOS (LISTA 02) ---");
        const opcao = await question("Digite o numero da questao (1 a 17) ou '0' para sair: ");

        switch (opcao) {
            case '0':
                continuar = false;
                console.log("Encerrando programa...");
                rl.close();
                break;

            case '1': // Scanner de Segurança
                const listaProibida = ["Claudio", "Lex Luthor", "Voldemort"];
                let visitantesAutorizados = [];
                for (let i = 0; i < 3; i++) {
                    let nome = await question(`Nome do visitante ${i + 1}: `);
                    if (listaProibida.includes(nome)) {
                        console.log(`ALERTA: Segurança acionada para o visitante ${nome}!`);
                    } else {
                        visitantesAutorizados.push(nome);
                        console.log("Visitante autorizado.");
                    }
                }
                break;

            case '2': // Organizador de Pódio
                let atletas = [];
                for (let i = 0; i < 5; i++) {
                    atletas.push(await question(`Nome do ${i + 1}º atleta: `));
                }
                atletas.forEach((atleta, i) => {
                    if (i === 0) console.log(`Ouro: ${atleta}`);
                    else if (i === 1) console.log(`Prata: ${atleta}`);
                    else if (i === 2) console.log(`Bronze: ${atleta}`);
                    else console.log(`Participante ${atleta} recebeu medalha de honra.`);
                });
                break;

            case '3': // Inventário de Sobrevivência
                let mochila = [];
                for (let i = 0; i < 6; i++) {
                    let item = await question(`Encontrou o item ${i + 1}. Nome: `);
                    if (mochila.length < 4) {
                        mochila.push(item);
                        console.log("Item adicionado.");
                    } else {
                        let resp = (await question("Mochila cheia! Deseja descartar o primeiro item para pegar o novo? (S/N): ")).toUpperCase();
                        if (resp === 'S') {
                            mochila.shift();
                            mochila.push(item);
                            console.log("Item substituído.");
                        }
                    }
                }
                console.log("Conteúdo final da mochila:", mochila);
                break;

            case '4': // Analisador de Clima
                let temps = [];
                for (let i = 0; i < 7; i++) {
                    temps.push(parseFloat(await question(`Temp dia ${i + 1}: `)));
                }
                let media4 = temps.reduce((a, b) => a + b) / 7;
                console.log(`Relatório: Média: ${media4.toFixed(1)}, Máxima: ${Math.max(...temps)}, Mínima: ${Math.min(...temps)}`);
                break;

            case '5': // Consultor de SUV
                const modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"];
                const precos = [110000, 135000, 128000, 105000, 180000];
                let orcamento = parseFloat(await question("Digite seu orçamento máximo: "));
                let compraveis = modelos.filter((m, i) => precos[i] <= orcamento);
                if (compraveis.length > 0) console.log("Modelos disponíveis:", compraveis);
                else console.log("Que tal olhar nossa seção de seminovos?");
                break;

            case '6': // Controle de Estoque Crítico
                const produtos = ["Monitor", "Mouse", "Teclado", "Cabo HDMI"];
                const quantidades = [10, 2, 8, 3];
                console.log("Itens com estoque crítico (< 5 unidades):");
                produtos.forEach((p, i) => { if (quantidades[i] < 5) console.log(`- ${p}`); });
                break;

            case '7': // Sistema de Frota
                let frota = [
                    { modelo: "Caminhão A", km: 12000, revisao: 2 },
                    { modelo: "Caminhão B", km: 5000, revisao: 8 },
                    { modelo: "Caminhão C", km: 15000, revisao: 1 }
                ];
                let frotaManutencao = frota.filter(v => v.km > 10000 || v.revisao > 6);
                console.log(`Relatório: ${frotaManutencao.length} veículos precisam de parada técnica.`);
                break;

            case '8': // Desempenho de Vendas
                let nomesVendedores = ["Ana", "Beto", "Cid", "Duda", "Eva"];
                let totalVendas = [5000, 2000, 8000, 1500, 4000];
                let mediaV = totalVendas.reduce((a, b) => a + b) / 5;
                let destaque = nomesVendedores[totalVendas.indexOf(Math.max(...totalVendas))];
                console.log(`Média do grupo: ${mediaV}`);
                console.log(`Vendedor Destaque: ${destaque}`);
                nomesVendedores.forEach((n, i) => {
                    if (totalVendas[i] < mediaV * 0.7) console.log(`${n} está Abaixo da Meta.`);
                });
                break;

            case '9': // Filtro de Salários
                const funcionarios = [
                    { nome: "Ana", salario: 2500 }, { nome: "Pedro", salario: 4200 },
                    { nome: "Marcos", salario: 1800 }, { nome: "Julia", salario: 3500 }
                ];
                let k = 0;
                console.log("Funcionários com salário acima de R$ 3.000,00:");
                while (k < funcionarios.length) {
                    if (funcionarios[k].salario > 3000) console.log(funcionarios[k].nome);
                    k++;
                }
                break;

            case '10': // Contador de Estoque
                const estoque = [
                    { produto: "Camiseta", quantidade: 15 },
                    { produto: "Calça", quantidade: 10 },
                    { produto: "Meia", quantidade: 50 }
                ];
                let totalEstoque = 0;
                for (let i = 0; i < estoque.length; i++) { totalEstoque += estoque[i].quantidade; }
                console.log("Total de itens no estoque:", totalEstoque);
                break;

            case '11': // Busca de Usuário
                let nomes11 = ["João", "Maria", "Ricardo", "Ana"];
                let idx = 0, encontrado = false;
                do {
                    if (nomes11[idx] === "Ricardo") {
                        console.log("Usuário encontrado");
                        encontrado = true;
                        break;
                    }
                    idx++;
                } while (idx < nomes11.length);
                if (!encontrado) console.log("Não cadastrado");
                break;

            case '12': // Litros de Água
                let agua = [];
                for (let i = 0; i < 6; i++) { agua.push(parseFloat(await question(`Litros dia ${i + 1}: `))); }
                let somaA = agua.reduce((a, b) => a + b);
                let maxA = Math.max(...agua);
                console.log(`Relatório: Total: ${somaA}, Média: ${(somaA / 6).toFixed(2)}, Pico: ${maxA} no Dia ${agua.indexOf(maxA) + 1}`);
                break;

            case '13': // Sensores
                let s = [];
                for (let i = 0; i < 6; i++) { s.push(parseFloat(await question(`Sensor ${i + 1}: `))); }
                let alertas = s.filter(temp => temp > 35).length;
                console.log(`Relatório: Média: ${(s.reduce((a, b) => a + b) / 6).toFixed(2)}, Máxima: ${Math.max(...s)}, Alertas: ${alertas}`);
                break;

            case '14': // Caminhões
                let c = [];
                for (let i = 0; i < 5; i++) { c.push(parseFloat(await question(`KM/L Caminhão ${i + 1}: `))); }
                console.log(`Relatório: Média: ${(c.reduce((a, b) => a + b) / 5).toFixed(2)}, Melhor: ${Math.max(...c)}, Pior: ${Math.min(...c)}`);
                break;

            case '15': // Custo de Manutenção
                let m = [];
                for (let i = 0; i < 4; i++) { m.push(parseFloat(await question(`Custo manutenção ${i + 1}: `))); }
                let totalM = m.reduce((a, b) => a + b);
                console.log(`Relatório: Total: ${totalM}, Média: ${totalM / 4}, Mais cara: ${Math.max(...m)}`);
                break;

            case '16': 
                break;

            case '17': 
                
                break;

            default:
                console.log("Número de questão inválido. Tente de 1 a 17.");
                break;
        }
    }
}

main();