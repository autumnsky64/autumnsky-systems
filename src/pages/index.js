import React from 'react'
import Helmet from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SkillList from '../components/SkillList'
import AchivementList from '../components/AchivementList'

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

          <AchivementList />

          <p>その他、書店アルバイトなど接客経験、製造業の現業経験、ネットショップ担当、<br />Microsoft Excel / VBA / Access を使った事務職の経験があります。</p>
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