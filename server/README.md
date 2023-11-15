# 縦型 server

## フォルダ構造

```
nodejs-server/
- domain/ (ビジネスロジックの中核を担うドメイン層)
	- entity/ (ドメインモデル)
	- value_object/ (値オブジェクト)
	- repository_interface/ (リポジトリのインターフェース)
- use_case/ (アプリケーションのロジックを担うユースケース層)
- presentation/ (外部とドメイン/ユースケースを仲介する層)
	- validation/ (controllerで実行されるバリデーションファイル群)
	- request/ (infra/mapperとvalidationを使用したリクエストデータの検証)
	- controller/ (use_case層に依存している)
	- router/ (express.jsに依存したルーティング処理)
	- server.ts (express.jsに依存したアプリケーションインスタンスの定義)
- infrastructure/ (DBなど外部に依存したやり取りを担う層)
	- db/
		- prisma/schema.prisma (prisma のスキーマファイル)
	- repository_impl/ (prisma_clientに依存したリポジトリの実装)
	- mapper/ (DB<->ドメインオブジェクトのシリアライズ・デシリアライズ)
index.ts(実行ファイル)
```
