import React from 'react';
import { Row, Col, Tab, Tabs } from 'react-bootstrap';
import { isValid, toProperCase } from '../utils';
import '../styles/TabList.scss';

function TabList(props)
{
    let tabs = [];

    if (isValid(props.tabs))
    {
        let tabMap = new Map(props.tabs);

        for (let [tabKey, tabValue] of tabMap)
        {
            tabs.push(<Tab key={ 'tab' + tabKey } eventKey={ tabKey } title={ toProperCase(tabKey) }><Row className="px-4 py-2">{ tabValue }</Row></Tab>);
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