import React from 'react';
import { Row, Col, Tab, Tabs } from 'react-bootstrap';
import { isValid, toProperCase } from '../utils';
import '../styles/TabList.scss';

function TabList(props)
{
    let tabs = [];

    if (isValid(props.tabs))
    {
        let _tabs = new Map(props.tabs);

        for (let [tabName, tabContent] of _tabs)
        {
            tabs.push(<Tab key={ 'tab' + tabName } eventKey={ tabName } title={ toProperCase(tabName) }><Row className="px-4 py-2">{ tabContent }</Row></Tab>);
        }
    }

    return (
        <Row>
            <Col>
                <Tabs className="mb-1">
                    { tabs }
                </Tabs>
            </Col>
        </Row>
    );
}

export default TabList;