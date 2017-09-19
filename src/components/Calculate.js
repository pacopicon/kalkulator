import React, { Component } from 'react'

const rowOneButtons = ['1','2','3','4']
const rowTwoButtons = ['5','6','7','8']
const rowThreeButtons = ['9','0','*','/']
const rowFourButtons = ['+','-']
let input

export default class Calculate extends Component {

  state = { parenthesis: '(' }
  
  togglePar = () => {
    this.setState({ parenthesis: (this.state.parenthesis == '(') ? ')' : '('})
    return this.state.parenthesis
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    this.props.parse(input.value)
    input.value = ''
  } 

  handleEnter = e => {
    if (e.key == 'Enter') {
      this.handleSubmit(e)
    }
  }

  render() {

    const { parse } = this.props

    return (
    <div>
      <form onSubmit={this.handleSubmit} onKeyPress={this.handleEnter}>
        <input className="input" ref={node => {input = node}} />
        <div className="rowOne">
          {rowOneButtons.map((rowOneButton, i) => (
            <button className={`inputBtn rowOneBtn button_${rowOneButton}`} onClick={e => {
              e.preventDefault()
              input.value = input.value + rowOneButton
            }} key={i}>
            <p>{rowOneButton}</p>
            </button>
          ))}
        </div>
        <div className="rowTwo">
          {rowTwoButtons.map((rowTwoButton, i) => (
          <button className={`inputBtn rowTwoBtn button_${rowTwoButton}`} onClick={e => {
            e.preventDefault()
            input.value = input.value + rowTwoButton
          }} key={i}>
          <p>{rowTwoButton}</p>
          </button>
        ))}
        </div>
        <div className="rowThree">
          {rowThreeButtons.map((rowThreeButton, i) => (
            <button className={`inputBtn rowThreeBtn button_${rowThreeButton}`} onClick={e => {
              e.preventDefault()
              input.value = input.value + rowThreeButton
            }} key={i}>
            <p>{rowThreeButton}</p>
            </button>
          ))} 
        </div>
        <div className="rowFour">
          {rowFourButtons.map((rowFourButton, i) => (
            <button className={`inputBtn rowFourBtn button_${rowFourButton}`} onClick={e => {
              e.preventDefault()
              input.value = input.value + rowFourButton
            }} key={i}>
            <p>{rowFourButton}</p>
            </button>
          ))}
          <button className="inputBtn parentheses" onClick={e => {
            e.preventDefault()
            input.value = input.value + this.togglePar()
          }}>
          <p>{this.state.parenthesis}</p>
          </button>
          <button className="submitBtn inputBtn" type="submit">
            <p>=</p>
          </button> 
        </div>
      </form>
    </div>
  )
  }

}