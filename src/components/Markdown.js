import React, { Component } from 'react'
import marked from 'marked'

class Markdown extends Component {

  constructor(props){
    super(props)

    this.state = {
      markDown: 'Loading...'
    }
  }

  componentDidMount() {
    var xmlhttp = new XMLHttpRequest()
    var url = "https://raw.githubusercontent.com/lost-in-Code-au/lost-in-code-au/master/README.md"
    // var url = '../README.md'

    new Promise((resolve, reject) => {
      xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          resolve(this.responseText)
        }
      }
    }).then((result) => {
      console.log(result)
      this.setState({markDown: result})
    })
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
  }


  render() {
    return (
      <div  className='markDownContainer'>
        <p className='markdownHint'>this CV was rendered in Markdown</p>
        <div className='markdown-body' dangerouslySetInnerHTML={{__html: marked(this.state.markDown)}}></div>
      </div>
    )
  }
}

export default Markdown
