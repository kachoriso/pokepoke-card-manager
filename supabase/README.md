# Supabase CLI セットアップ & 基本コマンド (備忘録)

Supabase CLI が `command not found` になった場合や、基本的なコマンドを確認するための手順メモ。

## 前提条件

* Linux 環境 (Debian/Ubuntu系、Codespacesなど)
* `curl` コマンドが利用可能
* `sudo` 権限が利用可能

## 1. Supabase CLI のインストール

**重要:** 常に最新バージョンを使うことを推奨します。

1.  **最新バージョンの確認:**
    * Supabase CLI Releases ページで最新の安定バージョンと、自分の環境に合った `.deb` ファイルの URL を確認する。
        * [https://github.com/supabase/cli/releases](https://github.com/supabase/cli/releases)
    * **アーキテクチャを確認:** 自分の環境が `amd64` (Intel/AMD 64bit) か `arm64` (ARM 64bit) かを確認する。
        ```bash
        uname -m
        # x86_64 と表示されれば amd64 用を選ぶ
        ```

2.  **.deb ファイルのダウンロードとインストール:**
    * 以下のコマンドを実行する。**`<LATEST_AMD64_DEB_URL>`** は、手順1で確認した**最新の `amd64` 用 `.deb` ファイルのURL**に置き換えること。
        *(例として v2.22.6 の URL を記載していますが、実行前に必ず最新を確認してください)*
        ```bash
        # 古いファイルがあれば削除
        rm -f supabase_cli.deb

        # 最新版のURLを指定してダウンロード (★URLは要確認・置換★)
        curl -L -o supabase_cli.deb "https://github.com/supabase/cli/releases/download/v1.181.1/supabase_1.181.1_linux_amd64.deb" # 例: v1.181.1

        # dpkg でインストール (エラーが出ないか確認)
        sudo dpkg -i supabase_cli.deb

        # 不要になった .deb ファイルを削除
        rm supabase_cli.deb
        ```

3.  **インストール確認:**
    ```bash
    supabase --version
    # バージョン番号が表示されれば成功
    ```

## 2. Supabase プロジェクトとの連携

1.  **Supabase アカウントへのログイン:**
    * ブラウザが開き、認証が求められる。
    ```bash
    supabase login
    ```

2.  **ローカルリポジトリとリモートプロジェクトのリンク:**
    * プロジェクトのルートディレクトリで実行する。
    * `<your-project-ref>` は Supabase ダッシュボード (Project Settings > General) で確認できるプロジェクトID。
    ```bash
    supabase link --project-ref <your-project-ref>
    ```

## 3. 基本的なマイグレーション操作

1.  **リモートDBとの差分からマイグレーションファイルを生成:**
    * Supabase ダッシュボードなどでリモートDBのスキーマを変更した後、その変更を SQL ファイルとしてローカルに取り込む。
    * `<migration_name>` は変更内容を表す分かりやすい名前にする (例: `add_user_profile_table`)。
    ```bash
    supabase db diff --linked -f <migration_name> --use-migra
    ```

2.  **マイグレーションの適用 (主にローカルDB向け):**
    * `supabase/migrations` 内の未適用の SQL ファイルをデータベースに適用する。
    ```bash
    # ローカルDBを起動してから実行
    supabase migration up
    ```

## 4. ローカル開発環境 (任意)

ローカルで Supabase の機能 (DB, Auth など) をエミュレートする場合。

1.  **ローカル開発環境の起動:**
    * Docker が必要。
    ```bash
    supabase start
    ```

2.  **ローカルDBのリセット:**
    * ローカルDBを初期化し、`supabase/migrations` 内の全てのマイグレーションを再適用する。
    ```bash
    supabase db reset
    ```

3.  **ローカル開発環境の停止:**
    ```bash
    supabase stop
    ```

## トラブルシューティング

* **`supabase: command not found`:**
    * インストールが正常に完了しているか確認 (`supabase --version`)。
    * インストール場所が環境変数 `PATH` に含まれているか確認 (`echo $PATH`, `which supabase`)。
    * ターミナルを再起動するか `hash -r` を試す。
* **`dpkg` エラー `package architecture ... does not match system ...`:**
    * ダウンロードした `.deb` ファイルのアーキテクチャ (例: `arm64`) が、実行環境 (`amd64` など) と異なっている。正しいアーキテクチャのファイルをダウンロードし直す。