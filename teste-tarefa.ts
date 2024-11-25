import { GestorTarefas, Tarefa } from "./tarefa";

// Criando o gestor de tarefas
const gestor = new GestorTarefas();

// Adicionando tarefas
gestor.adicionarTarefa(new Tarefa(1, "Implementar frontend", "Pendente", "Projeto A"));
gestor.adicionarTarefa(new Tarefa(2, "Criar banco de dados", "Em Andamento", "Projeto A"));
gestor.adicionarTarefa(new Tarefa(3, "Testar aplicação", "Pendente", "Projeto B"));

// Atualizando status de uma tarefa
gestor.atualizarStatus(1, "Concluída");
console.log(gestor.consultarTarefasPorProjeto("Projeto A")); // Exibe tarefas do Projeto A

// Consultando tarefas de um projeto inexistente
console.log(gestor.consultarTarefasPorProjeto("Projeto X")); // []
