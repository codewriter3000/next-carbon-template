'use client';

import { Content, Theme } from '@carbon/react';

import ApplicationHeader from '@/components/ApplicationHeader/ApplicationHeader';

export function Providers({ children }) {
	return (
		<div>
			<Theme theme="g100">
				<ApplicationHeader />
				<Content className="h-screen">
					{children}
				</Content>
			</Theme>
		</div>
	);
}
