import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import styles
import './semantic/dist/components/button.css';
import './semantic/dist/components/container.css';
import './semantic/dist/components/divider.css';
import './semantic/dist/components/flag.css';
import './semantic/dist/components/header.css';
import './semantic/dist/components/icon.css';
import './semantic/dist/components/image.css';
import './semantic/dist/components/input.css';
import './semantic/dist/components/label.css';
import './semantic/dist/components/list.css';
import './semantic/dist/components/loader.css';
import './semantic/dist/components/rail.css';
import './semantic/dist/components/reveal.css';
import './semantic/dist/components/segment.css';
import './semantic/dist/components/step.css';
import './semantic/dist/components/site.css';
import './semantic/dist/components/reset.css';

/* Collections */
import './semantic/dist/components/breadcrumb.css';
import './semantic/dist/components/form.css';
import './semantic/dist/components/grid.css';
import './semantic/dist/components/menu.css';
import './semantic/dist/components/message.css';
import './semantic/dist/components/table.css';

/* Views */
import './semantic/dist/components/ad.css';
import './semantic/dist/components/card.css';
import './semantic/dist/components/comment.css';
import './semantic/dist/components/feed.css';
import './semantic/dist/components/item.css';
import './semantic/dist/components/statistic.css';

/* Modules */
import './semantic/dist/components/accordion.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
