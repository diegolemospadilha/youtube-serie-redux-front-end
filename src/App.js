import React from 'react';

import Layout from './layout';
import Message from './components/Message';
import Pages from './pages';

export default function App() {
	return (
		<Layout>
			<Message />
			<Pages />
		</Layout>
	);
}
