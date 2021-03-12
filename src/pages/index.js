import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Autumnsky systems'
  const siteDescription = '兵庫県三木市在住 フリーランス・プログラマ 胸永晃考（ムネナガ アキナリ）'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <ruby><rb>胸永 晃考</rb><rt>ムネナガ アキナリ</rt></ruby>
        <br />フリーランス プログラマ
        <br />兵庫県三木市 在住

        <section>
          <h2>分野</h2>
            <h3>WordPress</h3>
            <ul>
              <li>テーマ作成</li>
              <li>プラグイン作成</li>
              <li>ブロック作成</li>
              <li>WP-CLI活用</li>
              <li>実行環境構築（Ubuntu,CentOS,Docker）</li>
            </ul>

            <h3>Vue.js</h3>
            <ul>
              <li>フロントエンドのインタラクション作成など</li>
            </ul>

            <h3>Androidアプリ</h3>
            <ul>
              <li>Java / Kotlinによるネイティブアプリ</li>
              <li>Realm DB</li>
            </ul>
        </section>

        <section>
          <h2>実績</h2>
          <dl>
            <dt>Wocker</dt>
            <dd>Docker ベース WordPress実行環境 コントリビュータ</dd>
            <dt>桂川レディースクリニック</dt>
            <dd>株式会社 キテレツのコラボレーターとして、WordPressの投稿タイプ設計、テーマテンプレート設計、専用プラグインの作成を担当</dd>
            <dt>LindenFree</dt>
            <dd>睡眠・服薬記録 Androidアプリ</dd>
            <dt>COVID-19 Hyogo</dt>
            <dd>兵庫県 COVID-19 ビジュアライゼーションサイト コントリビュータ</dd>
            <dt>おでかこわんこ部</dt>
            <dd>株式会社 キテレツのコラボレーターとして、<a href="">SnowMonkeyテーマ</a>のカスタマイズ、サーバの移転作業などを担当</dd>
            <dt>ポートフォリオサイト M/A 2012年制作</dt>
            <dd>WEBデザイン、DTPもできますがあまり得意ではありません。</dd>
            <dt></dt>
          </dl>
        </section>

        <section>
          <h2>資格</h2>
          <ul>
            <li><a href="">IPA 基本情報処理</a></li>
            <li><a href="">社会調査士</a></li>
            <li>司書</li>
          </ul>
        </section>

        <section>
          <h2>連絡先</h2>
          <a href="mailto:autumnsky64@gmail.com">autumnsky64@gmail</a>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
