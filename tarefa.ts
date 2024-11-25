// Classe que representa uma Tarefa
export class Tarefa {
    constructor(
        public id: number,       // Identificador único da tarefa
        public descricao: string, // Descrição da tarefa
        public status: string,    // Status atual da tarefa (e.g., "Pendente", "Em Andamento")
        public projeto: string    // Nome do projeto ao qual a tarefa pertence
    ) {}
}

// Classe que gerencia as tarefas de uma equipe
export class GestorTarefas {
    private tarefas: Tarefa[] = []; // Lista de tarefas cadastradas

    // Método para adicionar uma nova tarefa
    public adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
    }

    // Método para atualizar o status de uma tarefa existente
    public atualizarStatus(id: number, status: string): void {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.status = status; // Atualiza o status da tarefa
        } else {
            console.error("Tarefa não encontrada.");
        }
    }

    // Método para consultar todas as tarefas de um projeto específico
    public consultarTarefasPorProjeto(projeto: string): Tarefa[] {
        return this.tarefas.filter(t => t.projeto === projeto);
    }
}


