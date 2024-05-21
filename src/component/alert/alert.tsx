/*
import { memo } from "react";

const ChildComponent = memo(function Child() {
	return <h1 className="text-black">Am I memoized?</h1>;
});

export default ChildComponent;

*/

export default function ChildComponent() {
	return <h1 className="text-black">Am I memoized?</h1>;
}
