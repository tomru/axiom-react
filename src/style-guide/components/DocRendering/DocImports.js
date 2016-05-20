import React, { PropTypes, Component } from 'react';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class DocImports extends Component {
  static propTypes = {
    importDocs: PropTypes.object.isRequired,
  };

  render() {
    const { importDocs } = this.props;


    return (
      <CodeTabset>
        { Object.keys(importDocs)
          .filter((key) => importDocs[key])
          .map((key, index) =>
            <CodeSnippet key={ index } language={ key }>
              { importDocs[key] }
            </CodeSnippet>
          )
        }
      </CodeTabset>
    );
  }
}
