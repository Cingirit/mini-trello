# Mini Trello

Docker ile öğrenme amaçlı geliştirilen basit bir Trello klonu. Board, List ve Task hiyerarşisiyle çalışan bir REST API.

## Teknolojiler
- Backend: Node.js, Express, Sequelize
- Veritabanı: MySQL 8.0
- Docker & Docker Compose

## Çalıştırma

1. Bu repoyu klonla
2. Proje kökünde bir `.env` dosyası oluştur (örnek için `.env.example`'a bak)
3. Şunu çalıştır:
\`\`\`bash
docker-compose up
\`\`\`
4. API `http://localhost:5000` üzerinden erişilebilir olacak

## API Endpoint'leri
- `GET/POST /api/boards`
- `GET/POST/PUT/DELETE /api/boards/:id`
- `GET/POST/PUT/DELETE /api/lists/:id`
- `GET/POST/PUT/DELETE /api/tasks/:id`