import React from 'react'
import styles from './ContentList.module.css'
import ContentItem from './ContentItem/ContentItem'

const mock = [1, 2, 3, 4];

export default function ContentList() {
    return (
        <div>
            ContentList
            {mock.map((_, index) => <ContentItem key={index} />)}
        </div>
    )
}
