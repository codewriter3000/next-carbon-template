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
			<TabPanel>Carbon is IBM’s open-source design system for digital
                    products and experiences. With the IBM Design Language as
                    its foundation, the system consists of working code, design
                    tools and resources, human interface guidelines, and a
                    vibrant community of contributors.</TabPanel>
			<TabPanel>Rapidly build beautiful and accessible experiences. The
                    Carbon kit contains all resources you need to get started.</TabPanel>
			<TabPanel>Carbon provides styles and components in Vanilla, React,
                    Next, Angular, and Vue for anyone building on the web.</TabPanel>
		</TabPanels>
	</Tabs>
      </Column>
    </Grid>
  )
};
