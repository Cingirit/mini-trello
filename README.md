# Mini Trello

Docker ile öğrenme amaçlı geliştirilen basit bir Trello klonu. Board, List ve Task hiyerarşisiyle çalışan bir REST API.

## Teknolojiler
- Backend: Node.js, Express, Sequelize
- Frontend: React (Vite)
- Veritabanı: MySQL 8.0
- Docker & Docker Compose (multi-stage build, healthcheck)

## Çalıştırma

1. Bu repoyu klonla
2. `backend/` klasöründe `.env.example`'ı `.env` olarak kopyala, kendi değerlerini gir
3. Proje kökünde:
\`\`\`bash
docker-compose up --build
\`\`\`
4. Frontend: `http://localhost:3000`
5. Backend API: `http://localhost:5000`

## API Endpoint'leri
- `GET/POST /api/boards`
- `GET/POST/PUT/DELETE /api/boards/:id`
- `GET/POST/PUT/DELETE /api/lists/:id`
- `GET/POST/PUT/DELETE /api/tasks/:id`