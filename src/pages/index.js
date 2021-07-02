import React from 'react'
import Helmet from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SkillList from '../components/SkillList'

const HomeIndex = () => {
  const siteTitle = 'Autumnsky systems 胸永晃考'
  const siteDescription = '兵庫県三木市在住 フリーランス プログラマ 胸永晃考（ムネナガ アキナリ）'
  const siteAuthor = '胸永 晃考 Munenaga Akinari'

  const skills = [
    { genre : 'WordPress',
      detail: [
            'テーマ作成',
            'プラグイン開発',
            'ブロック開発',
            'WP-CLI 活用',
            '実行環境構築（Ubuntu、CentOS、Docker）'
          ]
    },{
      genre: 'React',
      detail: [
          'WordPress ブロックエディタのブロック開発、エディタカスタマイズ',
          'Gatsby でスターターを利用したサイト作成'
      ]
    },{
      genre: 'JavaScript',
      detail: [
          'Vue.js でのフロントエンドのインタラクション作成',
      ]
    },{
      genre: 'Androidアプリ',
      detail: [
          'Java / Kotlin によるネイティブアプリ',
          'Realm DB'
      ]
    }
  ]

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="author" content={siteAuthor} />
      </Helmet>

      <div id="main">
        <section>
          <StaticImage
            layout="constrained"
            alt="Munenaga Akinari portrait photo"
            src="../assets/images/portrait.jpg"
            className="image avatar left"
            />
          <p className="profile">
            <ruby>胸永 晃考<rp>（</rp><rt>ムネナガ アキナリ</rt><rp>）</rp></ruby>
            <br />フリーランス プログラマ
            <br />兵庫県三木市 在住
          </p>
        </section>

        <section>
          <h2>分野</h2>
          { skills.map( skill => <SkillList {...skill} /> )}
        </section>

        <section>
          <h2>実績</h2>
          <dl>
            <dt><a href="https://wocker.dev/" target="blank">Wocker</a></dt>
            <dd>Docker ベース WordPress 実行環境 コントリビュータ</dd>
            <dt><a href="https://katsuragawa-lc.com/" target="blank">桂川レディースクリニック</a></dt>
            <dd><a href="https://kiteretz.com/" target="blank">株式会社 キテレツ</a>のコラボレーターとして、WordPress の投稿タイプ設計、テーマテンプレート設計、専用プラグインの作成を担当</dd>
            <dt><a href="https://play.google.com/store/apps/details?id=systems.autumnsky.linden_free" target="blank">LindenFree</a></dt>
            <dd>睡眠・服薬記録 Android アプリ</dd>
            <dt><a href="https://odekake-wanko-bu.com/" target="blank">おでかけわんこ部</a></dt>
            <dd><a href="https://kiteretz.com/" target="blank">株式会社 キテレツ</a>のコラボレーターとして、<a href="" target="blank">SnowMonkey テーマ</a>のカスタマイズ、サーバの移転作業などを担当</dd>
            <dt><a href="/ma/index.html" target="blank">ポートフォリオ M/A 2012年制作</a></dt>
            <dd>ウェブデザイン、DTPの作例を掲載しています。</dd>
          </dl>
          <p>その他、書店アルバイトなど接客経験、製造業の現業経験、ネットショップ担当、<br />Microsoft Excel / VBA / Access を使った事務職の経験があります。</p>
          <p>WEB・DTP デザインもできますが、あまり得意ではありません。</p>
        </section>

        <section>
          <h2>資格</h2>
          <ul>
            <li><a href="https://www.jitec.ipa.go.jp/1_11seido/fe.html" target="blank">IPA 基本情報処理</a></li>
            <li><a href="https://jasr.or.jp/students/qa.html" target="blank">社会調査士</a></li>
            <li>司書</li>
          </ul>
        </section>

        <section>
          <h2>連絡先</h2>
          <a href="mailto:autumnsky64@gmail.com">autumnsky64@gmail.com</a>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex