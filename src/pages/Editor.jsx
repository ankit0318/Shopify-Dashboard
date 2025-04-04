import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-react-richtexteditor/styles/material.css';
import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => (
  <div className="m-4 mb-14 p-2 md:p-10 bg-white rounded-3xl ">
    <Header category="App" title="Editor" />
    <RichTextEditorComponent>
      <EditorData />
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
);
export default Editor;