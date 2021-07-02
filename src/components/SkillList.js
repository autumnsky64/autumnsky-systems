import React from 'react'

const SkillList = ({genre, detail})  => {
  return (
    <>
      <h3>{genre}</h3>
      <ul>
        { detail.map( v => <li>{v}</li> ) }
      </ul>
    </>
  )
}

export default SkillList
