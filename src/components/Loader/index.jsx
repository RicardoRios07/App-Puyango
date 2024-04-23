import React from 'react';
import { Suspense } from "react";

import SuspenseLoader from "../SuspenseLoader";
import BackdropWrapper from '../Backdrop';

const Loader = (Component) => (props) =>
(
	<Suspense fallback={<BackdropWrapper open />}>
		<Component {...props} />
	</Suspense>
);

export default Loader
