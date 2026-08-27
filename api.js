import express from 'express'; // Importa o framework Express para criar o servidor
import cors from 'cors'; // Importa o middleware CORS para permitir requisições externas
const app = express(); // Cria a aplicação servidor
app.use(cors()); // Ativa o CORS para todas as rotas
app.get('/', (req, res) => {
  res.json({
    date: new Date().toLocaleString('pt-BR'), // Data/hora formatada em português do Brasil
    status: 'API no Render funcionando!' // Mensagem de sucesso
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});