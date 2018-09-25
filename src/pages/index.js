import styles from './index.css';
import { Collapse, Tabs } from 'antd';

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="This is panel header 1" key="1">
          <p>test</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>test</p>
        </Panel>
        <Panel header="This is panel header 3" key="3" disabled>
          <p>test</p>
        </Panel>
      </Collapse>
      {/* <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
        <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
        <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
      </Tabs> */}
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><a href="https://umijs.org/guide/getting-started.html">Getting Started</a></li>
      </ul>
    </div>
  );
}
