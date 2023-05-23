import React from 'react'

export default function Character({charactersList}) {

    // console.log('arrayCharacters :>> ', charactersList);

    return (
        <>{
            charactersList?.map((p) => {
                return (
                    <div key={p.id}>
                        {p.title}
                    </div>
                )
            })
        }</>
    )
}
