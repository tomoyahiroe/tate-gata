# 縦型 nodejs-server

## フォルダ構造

- domain: ドメイン層。
- use_case: ユースケース層。アプリケーションのビジネスロジック。
- repository: データの永続化処理を担う。
- infra: インフラ層。DBやフレームワーク、ルーティングなどを担う
  - db: DBとのコネクションなど typeORM を使用
  - router: ルーティング処理 express.js を使用
  - server.ts: サーバーの起動。実質エントリーポイント
