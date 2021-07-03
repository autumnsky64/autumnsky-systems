import React from 'react'

const AchivementList = () => {
  const achivements = [
    {
      name: 'Wocker',
      url: 'https://wocker.dev/',
      description: 'Docker ベース WordPress 実行環境 コントリビュータ'
    },{
      name: 'おでかけわんこ部',
      url: '',
      description: '<a href="https://kiteretz.com/" target="blank">株式会社 キテレツ</a>のコラボレーターとして、<a href="https://snow-monkey.2inc.org/" target="blank">SnowMonkey テーマ</a>のカスタマイズ、サーバの移転作業などを担当。'
    },{
      name: '桂川レディースクリニック',
      url: 'https://katsuragawa-lc.com/"',
      description: '<a href="https://kiteretz.com/" target="blank">株式会社 キテレツ</a>のコラボレーターとして、WordPress の投稿タイプ設計、テーマテンプレート設計、専用プラグインの作成を担当。'
    },{
      name: 'LindenFree',
      url: 'https://play.google.com/store/apps/details?id=systems.autumnsky.linden_free',
      description: '睡眠時間・服薬記録 Android アプリ'
    },{
      name: 'ポートフォリオサイト M/A 2012年制作',
      url: '/ma/index.html',
      description: 'ウェブデザイン、DTPの作例を掲載しています。'
    }
  ]
  return(
    <dl>
      { achivements.map( value => {
        return(
          <>
            <dt><a href={value.url} target="blank">{ value.name }</a></dt>
            <dd dangerouslySetInnerHTML={ {__html: value.description} }/>
          </>
        )
      })}
    </dl>
  )
}

export default AchivementList
