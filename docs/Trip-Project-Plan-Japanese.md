# Trip Diary - プロジェクト企画書

## 1.プロジェクト概要

- プロジェクト名: Trip Diary
- 開発目標
    - React体化及びフロントエンドの力量強化
    - ExpressJS、MongoDBなどを通じたバックエンド開発の理解と経験蓄積
    - 旅行の全般的な情報を記録できるWebアプリケーションの開発

## 2.目標機能

- 会員登録及びログイン機能(JWT認証)
- ログイン状態に応じたアクセス制御
- 旅行記録の作成 / 閲覧 / 修正/ 削除機能
- 旅行記録リストページの実装
- 個別旅行詳細ページの実装

## 3. 技術スタック

- React
- JavaScript
- TailwindCSS
- MongoDB
- ExpressJS
- JWT
- Redux
- Axios

## 4.ユーザーシナリオ

### 非ログインユーザー

- 会員登録/ログインページのみアクセス可能

### ログインユーザー

- すべてのサービス(旅行記録ページ、旅行記録リスト、会員登録/ログイン、会員情報ページ)にアクセス可能

## 5.URL設計

- **/** - ログイン画面表示
- **/signUp** - 会員登録画面表示
- **/list** - 旅行ページリスト表示
- **/trip/new** - 旅行ページ作成画面表示
- **/trip/:id** - 個別旅行ページ表示

## 6. 開発計画

1. 環境設定、フォルダ構造の整理
2. 会員登録/ログイン機能の実装
3. 旅行記録CRUD開発
4. Redux適用
5. UI構成
6. 最終点検

## 7. MongoDB Schemaデータ構造設計

```javascript

// User Schema
{
    _id: ObjectId,
    email: String,
    password: String,
    createdAt: Date,
}

// Trip Schema
{
    userId: ObjectId,
    pageId: String
    title: String,
	location: String,
	startDate: Date,
	endDate: Date,
    content: String,
    createdAt: Date,
    updatedAt: Date,
}

```

## 8. 余談

今回のプロジェクトは最初のフルスタック挑戦であるだけに、色々な試行錯誤と困難が伴うものと予想される。 TypeScriptの代わりにJavaScriptを選択した理由は、聞き慣れた言語で少しでも容易に開発しようとしたからである。 バックエンドの開発自体が初めてであるだけに、フロントエンドでもReduxとAxiosなど多様な技術を積極的に活用して経験を積むつもりだ。