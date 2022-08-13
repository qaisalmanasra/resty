import React from 'react';

function Results(props)
{
  let body = JSON.stringify(props.bodyData);
    return (
        <section data-testid='results'>
          <pre>{props.method === 'GET' ? props.data.name
          : props.method === 'POST' ? body : props.method === 'PUT' ? body : props.method === 'DELETE' ? 'Deleted' : <div className='loader'></div>}
          </pre>
        </section>
      );   
}

export default Results;