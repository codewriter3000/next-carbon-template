'use client';

import {
	Header,
	HeaderContainer,
	HeaderName,
	HeaderNavigation,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderGlobalBar,
	HeaderGlobalAction,
	SkipToContent,
	SideNav,
	SideNavItems,
	HeaderSideNavItems,
} from '@carbon/react';

import Link from 'next/link';

const ApplicationHeader = () => {
	<HeaderContainer
		render={({ isSideNavExpanded, onClickSideNavExpand }) => (
			<Header aria-label="Template">
				<SkipToContent />
				<HeaderMenuButton
					aria-label="Open menu"
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
				/>
				<Link href="/" passHref legacyBehavior>
					<HeaderName prefix="IBM">Template</HeaderName>
				</Link>
				<HeaderNavigation aria-label="Google">
					<Link href="https://www.google.com" passHref legacyBehavior>
						<HeaderMenuItem>Google</HeaderMenuItem>
					</Link>
				</HeaderNavigation>
				<SideNav
					aria-label="Side navigation"
					expanded={isSideNavExpanded}
					isPersistent={false}
				>
					<SideNavItems>
						<HeaderSideNavItems>
							<Link href="https://www.google.com" passHref legacyBehavior>
								<HeaderMenuItem>Google</HeaderMenuItem>
							</Link>
						</HeaderSideNavItems>
					</SideNavItems>
				</SideNav>
			</Header>
		)}
	/>
};

export default ApplicationHeader;
