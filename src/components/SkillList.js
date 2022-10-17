import React from 'react'

const SkillList = ()  => {

  const skills = [
    { genre : 'WordPress',
      detail: [
            '投稿タイプ設計',
            'テーマ・テンプレート開発',
            'ブロック開発',
            'プラグイン開発',
            'WP-CLI 活用',
            '実行環境構築（Docker, Debian, Ubuntu）'
          ]
    },{
      genre: 'React',
      detail: [
          'WordPress ブロックエディタのブロック開発、エディタカスタマイズ',
          'Next.js によるウェブアプリ開発',
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
    skills.map(({genre, detail}) =>{
      return(
        <>
          <h3>{genre}</h3>
          <ul>
            { detail.map( v => <li>{v}</li> ) }
          </ul>
        </>
      )
    })
  )
}

export default SkillList
