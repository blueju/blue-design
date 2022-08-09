import React, { ReactNode } from 'react'
import { Row, Col } from 'antd'

interface IFormLayoutProps {
  /** 列数，默认为 3 列 */
  columnNumber: number,
  /** 表单项间距，默认为 24 px */
  gutter: number,
  [key: string]: any,
  children: any
}

export default function FormLayout(props: IFormLayoutProps) {
  const {
    columnNumber = 3,
    gutter = 24
  } = props

  /**
   * 对 children 按长度进行分组
   * @param children 
   * @param columnNumber 
   * @returns 
   */
  const groupChildrenByLength = (children: ReactNode[], columnNumber: number) => {
    let startIndex = 0
    let newArray = []
    while (startIndex < children.length) {
      const endIndex = startIndex + columnNumber
      newArray.push(children.slice(startIndex, endIndex))
      startIndex = endIndex
    }
    return newArray
  }

  let newChildren = groupChildrenByLength(Array.isArray(props.children) ? props.children : [props.children], columnNumber)

  return <>{newChildren.map((row: ReactNode[], rowIndex: number) => {
    return <Row key={rowIndex} gutter={gutter}>{row.map((col: ReactNode, colIndex: number) => {
      return <Col key={colIndex} span={Math.floor(24 / columnNumber)}>{col}</Col>
    })}</Row>
  })}</>
}