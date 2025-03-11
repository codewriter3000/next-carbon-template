'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          Design &amp; build with Carbon
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
      	<Tabs>
		<TabList>
			<Tab>About</Tab>
			<Tab>Design</Tab>
			<Tab>Develop</Tab>
		</TabList>
		<TabPanels>
			<TabPanel>Hi</TabPanel>
			<TabPanel>Hi</TabPanel>
			<TabPanel>Hi</TabPanel>
		</TabPanels>
	</Tabs>
      </Column>
    </Grid>
  )
};
