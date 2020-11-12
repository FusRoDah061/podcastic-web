Estrutura:
- Usuários podem adicionar novos feeds no frontend
- Periodicamente o backend vai monitorar esses feeds e criar um cache proprio com todos os itens disponíveis no feeds
- Frontend vai consumir desse cache
- Quando um feed é adicionado pela primeira vez, ele será cacheado na hora
- Próximos caches serão feitos para itens novos dos feeds