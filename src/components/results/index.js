import React from 'react'
import './results.scss'
import JSONPretty from 'react-json-pretty';

function Results(props) {
  let body = props.bodyData.body;
  let headers = props.headers;
  return (
    <section data-testid='results'>
      <div className='content'>
        <pre className="header">
          {props.method === 'GET' ? JSON.stringify(headers, undefined, 2) : null}
        </pre>
        <pre className="body">
          {
            props.method === 'GET' ? <JSONPretty id='json-pretty' data={props.data} />
              : props.method === 'POST' ? <JSONPretty id='json-pretty' data={body} />
              : null
          }
        </pre>
      </div>
    </section>
  )
}

export default Results
